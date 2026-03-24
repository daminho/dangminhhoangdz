import Box from "@mui/material/Box";
import React, { useState } from "react";
import hoangdz from "./hoangdzvl.jpg";
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Hello!', "I'm Dang Minh Hoang", 'Undergraduate @ KAIST', 'You can call me Hoangdz'];

function LandingPage() {
    const [index, setIndex] = React.useState(0);
    const [rotateAngle, setRotateAngle] = React.useState([0, 0]);
    const [isGlitching, setIsGlitching] = useState(false);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((i) => i + 1),
            3000,
        );
        return () => clearInterval(intervalId);
    }, []);

    const executeOnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const image = document.getElementById("landing-image");
        if (!image) return;
        image.style.transitionDuration = '100ms';
        const height = image.offsetHeight;
        const width  = image.offsetWidth;
        const center = [width / 2, height / 2];
        const left   = image.offsetLeft;
        const top    = image.offsetTop;
        const shifted = [e.clientX - left, e.clientY - top];
        const coeff   = [
            (shifted[0] - center[0]) / Math.abs(center[0] - shifted[0] || 1),
            (center[1] - shifted[1]) / Math.abs(center[1] - shifted[1] || 1),
        ];
        let angle = [
            Math.abs(center[1] - shifted[1]) * coeff[1],
            Math.abs(center[0] - shifted[0]) * coeff[0],
        ];
        angle = angle.map((v, i) => 10 * v / center[1 - i]);
        setRotateAngle(angle);
    };

    const executeOnMouseLeave = () => {
        setTimeout(() => {
            const image = document.getElementById("landing-image");
            if (!image) return;
            image.style.transitionDuration = '500ms';
            setRotateAngle([0, 0]);
        }, 300);
    };

    const handleClick = () => {
        if (isGlitching) return;
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 520);
    };

    return (
        <div
            id="landing-image"
            className={isGlitching ? 'avatar-glitch' : ''}
            style={{
                willChange: 'transform',
                transform: `translate3d(0px,0px,0px) scale3d(1,1,1) rotateX(${rotateAngle[0]}deg) rotateY(${rotateAngle[1]}deg) rotateZ(0deg)`,
                transformStyle: 'preserve-3d',
                transitionDuration: '500ms',
                maxWidth: '1000px',
                position: 'relative',
                padding: '20px',
                cursor: 'pointer',
                borderRadius: '8px',
                overflow: 'hidden',
            }}
            onMouseMove={executeOnMouseMove}
            onMouseLeave={executeOnMouseLeave}
            onClick={handleClick}
        >
            {/* Scan-line overlay */}
            <div style={{
                position: 'absolute', inset: '20px', pointerEvents: 'none', zIndex: 2,
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
                borderRadius: '4px',
            }} />

            <Box
                component="img"
                src={hoangdz}
                sx={{ maxWidth: '100%', display: 'block', borderRadius: '4px' }}
                style={{ boxShadow: '0 2px 32px rgba(0,0,0,.5), 0 16px 40px rgba(0,0,0,.7)' }}
            />

            {/* Terminal-style text overlay */}
            <div style={{
                position: 'absolute', top: '36%', left: '12%', zIndex: 3,
                display: 'flex', alignItems: 'center', gap: '6px',
            }}>
                <span style={{
                    color: '#79b8ff',
                    fontFamily: 'monospace',
                    fontSize: 'clamp(20px, 4vw, 44px)',
                    fontWeight: 700,
                    textShadow: '0 0 12px #79b8ff, 0 0 24px rgba(121,184,255,0.5)',
                    letterSpacing: '0.05em',
                }}>{'>'}</span>
                <TextTransition springConfig={presets.wobbly} style={{
                    color: '#e6edf3',
                    fontSize: 'clamp(20px, 4vw, 44px)',
                    fontFamily: 'pacifico',
                    textShadow: '0 2px 12px rgba(0,0,0,0.8)',
                    maxWidth: '240px',
                }}>
                    {TEXTS[index % TEXTS.length]}
                </TextTransition>
                <span style={{
                    color: '#79b8ff',
                    fontFamily: 'monospace',
                    fontSize: 'clamp(20px, 4vw, 44px)',
                    animation: 'blink 1s step-end infinite',
                    lineHeight: 1,
                }}>▌</span>
            </div>
        </div>
    );
}

export default LandingPage;
