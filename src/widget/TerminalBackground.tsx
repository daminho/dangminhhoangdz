import React, { useEffect, useRef } from 'react';

const CHARS = '01アイウエオカキクケコ<>{}[]();=+-*/&$#@!~?/\\|abcdefghijklmnopqrstuvwxyz0123456789';

export default function TerminalBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;

        const resize = () => {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();

        const fontSize = 13;
        const cols = Math.floor(canvas.width / fontSize);
        // Start drops at random negative positions so they stagger nicely
        const drops: number[] = Array.from({ length: cols }, () => Math.random() * -60);

        let frameCount = 0;
        let animFrame: number;

        function draw() {
            animFrame = requestAnimationFrame(draw);
            frameCount++;
            // Only redraw every 4 animation frames (~15 fps) for subtlety & performance
            if (frameCount % 4 !== 0) return;

            // Fade out old characters by painting a translucent overlay
            ctx.fillStyle = 'rgba(13, 17, 23, 0.06)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Vary alpha per character for organic feel
                const alpha = Math.random() * 0.12 + 0.04;
                ctx.fillStyle = `rgba(100, 255, 218, ${alpha})`;
                const char = CHARS[Math.floor(Math.random() * CHARS.length)];
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);

                // Reset column when it has scrolled past the canvas
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = Math.random() * -40;
                }
                drops[i] += 0.8;
            }
        }

        draw();
        window.addEventListener('resize', resize);

        return () => {
            cancelAnimationFrame(animFrame);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
}
