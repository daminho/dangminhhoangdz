import React, { useEffect, useRef, useState } from 'react';
import Typography from '@mui/material/Typography';

export interface SectionProps {
    title: string;
    child: JSX.Element;
}

function Section(props: SectionProps) {
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Trigger typing when section enters viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // Character-by-character typing effect
    useEffect(() => {
        if (!visible) return;
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setDisplayedTitle(props.title.slice(0, i));
            if (i >= props.title.length) {
                clearInterval(interval);
                // Hide cursor after typing finishes
                setTimeout(() => setShowCursor(false), 1200);
            }
        }, 75);
        return () => clearInterval(interval);
    }, [visible, props.title]);

    const sectionId = props.title.toLowerCase().split(' ').join('');

    return (
        <div
            ref={ref}
            id={sectionId}
            style={{ display: 'flex', flexDirection: 'column', marginTop: '48px' }}
        >
            <Typography
                variant="h4"
                component="div"
                sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: '#79b8ff',
                    textShadow: '0 0 12px rgba(121,184,255,0.4)',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    letterSpacing: '0.05em',
                }}
            >
                <span style={{ opacity: 0.7, fontSize: '0.75em' }}>{'>'}</span>
                {displayedTitle}
                {showCursor && (
                    <span style={{ animation: 'blink 1s step-end infinite', fontSize: '0.9em' }}>▌</span>
                )}
            </Typography>

            {/* Decorative underline */}
            <div style={{
                height: '1px',
                background: 'linear-gradient(to right, #79b8ff 0%, rgba(121,184,255,0.15) 60%, transparent 100%)',
                marginBottom: '8px',
                width: visible ? '100%' : '0',
                transition: 'width 0.8s ease 0.4s',
            }} />

            {props.child}
        </div>
    );
}

export default Section;
