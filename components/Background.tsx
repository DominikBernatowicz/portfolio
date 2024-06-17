'use client'
import React, { useEffect, useState } from 'react'

const Hexagon = ({ offsetX, offsetY, isVisible }: { offsetX: number, offsetY: number, isVisible: boolean }) => {

    return (
        <div style={{
            position: 'absolute',
            left: offsetX,
            top: offsetY,
            opacity: `${isVisible ? 1 : 0}`,
            transition: 'opacity 2s'
        }}>
            <div
                style={{
                    width: 0,
                    borderBottom: '13px solid #131217',
                    borderLeft: '22px solid transparent',
                    borderRight: '22px solid transparent',
                }}></div>
            <div
                style={{
                    width: 44,
                    height: 22,
                    backgroundColor: '#131217',
                }}></div>
            <div
                style={{
                    width: 0,
                    borderTop: '13px solid #131217',
                    borderLeft: '22px solid transparent',
                    borderRight: '22px solid transparent',
                }}></div>
        </div>
    )
};

const Background = () => {
    const [hexagons, setHexagons] = useState<{
        offsetX: number;
        offsetY: number;
    }[]>([]);

    const [isVisible, setVisible] = useState<boolean>(false)

    useEffect(() => {
        // hexagons bg
        const generateHexagons = () => {
            const countX = Math.ceil(window.innerWidth / 48) + 1;
            const countY = Math.ceil(document.documentElement.scrollHeight / 40) + 1;

            const hexagonsArray = [];
            for (let i = 0; i < countY; i++) {
                for (let j = 0; j < countX; j++) {
                    const offsetX = j * 48 + ((i * 24) % 48);
                    const offsetY = i * 40;
                    hexagonsArray.push({ offsetX, offsetY });
                }
            }
            setHexagons(hexagonsArray);
        }

        generateHexagons()

        const timeout = setTimeout(() => setVisible(true), 500)

        // moving gradient
        let mousePosition = {
            x: 0,
            y: 0
        };

        const handleMouseMove = (mouse: { clientX: number; clientY: number; }) => {
            mousePosition = {
                x: mouse.clientX,
                y: mouse.clientY
            };
        };

        const handleScroll = () => {
            const gradientElement = document.getElementById('gradient');
            if (gradientElement) {
                gradientElement.style.transform = `translate(${mousePosition.x + window.scrollX}px, ${mousePosition.y + window.scrollY}px)`;
            }
        };

        const loop = () => {
            const gradientElement = document.getElementById('gradient');
            if (gradientElement) {
                gradientElement.style.transform = `translate(${mousePosition.x + window.scrollX}px, ${mousePosition.y + window.scrollY}px)`;
            }
            window.requestAnimationFrame(loop);
        };

        document.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener('resize', generateHexagons);
        window.requestAnimationFrame(loop);

        // Clean up event listeners on component unmount
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener('resize', generateHexagons);
            clearTimeout(timeout)
        };
    }, []);

    return (
        <>
            <div
                id='gradient'
                className='absolute bg-custom-radial'
                style={{
                    top: `${isVisible ? '-200px' : '-10px'}`,
                    left: `${isVisible ? '-200px' : '-10px'}`,
                    height: `${isVisible ? '400px' : '20px'}`,
                    width: `${isVisible ? '400px' : '20px'}`,
                    opacity: `${isVisible ? 0.7 : 1}`,
                    transition: 'opacity 3s, width 3s, height 3s, top 3s, left 3s'
                }}
            >
            </div>
            <div
                id='pattern'
                className='absolute -top-[44px] -left-[44px] right-0 bottom-0'
            >
                {hexagons.map((hex, index) => (
                    <Hexagon key={index} offsetX={hex.offsetX} offsetY={hex.offsetY} isVisible={isVisible} />
                ))}
            </div>
        </>
    )
}

export default Background