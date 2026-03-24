import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Collapse, useTheme, useMediaQuery } from '@mui/material';
import anduinLogo from './anduin.png';
import onsquareLogo from './onsquare.png';
import luveriLogo from './luveri.png';
import cdsnLogo from './Group 5.svg';
import iclabLogo from './ic_lab.jpg';
import geocomplyLogo from './geocomply.png';

export interface ExperienceItemProps {
    name: string;
    logo: string | undefined;
    startDate: Date;
    endDate?: Date;
    title: string;
    roles: string[];
}

const Anduin: ExperienceItemProps = {
    name: 'Anduin Transaction',
    logo: anduinLogo,
    startDate: new Date('2023-03-01'),
    endDate: new Date('2023-08-31'),
    title: 'Software Engineer Intern',
    roles: [
        'Built a document management platform with audit logs integrated with existing features',
        'Designed core algorithm for a PDF extraction pipeline using Amazon Textract',
        'Built a standalone app to apply the extraction pipeline at large scale',
    ],
};

const Onsquare: ExperienceItemProps = {
    name: 'OnSquare',
    logo: onsquareLogo,
    startDate: new Date('2023-06-19'),
    endDate: new Date('2023-08-26'),
    title: 'Software Engineer Intern',
    roles: [
        'Implemented multiple types of infinite virtual list views',
        'Made virtual list elements drag-and-drop sortable',
        'Added search functionality within virtual list views',
    ],
};

const CDSNLab: ExperienceItemProps = {
    name: 'CDS&N Lab',
    logo: cdsnLogo,
    startDate: new Date('2023-12-20'),
    endDate: new Date('2024-03-01'),
    title: 'Undergraduate Research Assistant',
    roles: [
        'Built annotation pipeline for AI City Challenge 2022 on the ViTDet model',
        'Experimented with different ViT backbone patch sizes to evaluate performance impact',
        'Optimized evaluation with multiprocessing and improved prediction–ground-truth matching',
    ],
};

const Luveri: ExperienceItemProps = {
    name: 'Luveri',
    logo: luveriLogo,
    startDate: new Date('2021-04-01'),
    endDate: new Date('2023-06-01'),
    title: 'Co-founder & Front-end Developer',
    roles: [
        'Led front-end development for Home, Timeline/Calendar, Chat, and Note features',
        'Ideated and designed UI for all features',
        'Organized user research and usability testing',
        '400,000+ downloads across iOS and Android',
    ],
};

const ICLab: ExperienceItemProps = {
    name: 'IC Lab',
    logo: iclabLogo,
    startDate: new Date('2024-06-01'),
    endDate: new Date('2024-09-01'),
    title: 'Undergraduate Intern, Research Assistant',
    roles: [],
};

const GeoComplyII: ExperienceItemProps = {
    name: 'GeoComply',
    logo: geocomplyLogo,
    startDate: new Date('2026-04-01'),
    title: 'Software Engineer II',
    roles: [],
};

const GeoComplyI: ExperienceItemProps = {
    name: 'GeoComply',
    logo: geocomplyLogo,
    startDate: new Date('2025-04-01'),
    endDate: new Date('2026-03-31'),
    title: 'Software Engineer I',
    roles: [],
};

// Chronological order (newest first)
export const LIST_EXPERIENCES: ExperienceItemProps[] = [GeoComplyII, GeoComplyI, ICLab, CDSNLab, Anduin, Onsquare, Luveri];

function shortDateDisplay(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function dateRangeDisplay(start: Date, end?: Date): string {
    return shortDateDisplay(start) + ' — ' + (end ? shortDateDisplay(end) : 'Present');
}

// ─── Reusable experience card ───────────────────────────────────────────────

interface CardProps {
    exp: ExperienceItemProps;
    expanded: boolean;
    onToggle: () => void;
    align?: 'left' | 'right';
}

function ExperienceCard({ exp, expanded, onToggle, align = 'left' }: CardProps) {
    const [hovered, setHovered] = useState(false);
    const [isJumping, setIsJumping] = useState(false);
    const isHoveredRef = useRef(false);
    const jumpTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const scheduleJump = () => {
        jumpTimerRef.current = setTimeout(() => {
            if (!isHoveredRef.current) return;
            setIsJumping(true);
            setTimeout(() => {
                setIsJumping(false);
                if (isHoveredRef.current) scheduleJump();
            }, 750);
        }, 700);
    };

    const handleMouseEnter = () => {
        setHovered(true);
        isHoveredRef.current = true;
        scheduleJump();
    };

    const handleMouseLeave = () => {
        setHovered(false);
        isHoveredRef.current = false;
        setIsJumping(false);
        if (jumpTimerRef.current) clearTimeout(jumpTimerRef.current);
    };

    return (
        <Box
            onClick={onToggle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                cursor: 'pointer',
                background: '#161b22',
                border: `1px solid ${hovered ? '#79b8ff' : '#30363d'}`,
                borderRadius: '8px',
                padding: '16px',
                width: '100%',
                maxWidth: { xs: '100%', md: '380px' },
                boxShadow: hovered
                    ? '0 0 24px rgba(121,184,255,0.18), 0 4px 20px rgba(0,0,0,0.5)'
                    : '0 4px 12px rgba(0,0,0,0.4)',
                transform: isJumping ? undefined : (hovered ? 'translateY(-3px)' : 'translateY(0)'),
                animation: isJumping ? 'cardJump 0.75s ease' : 'none',
                transition: isJumping ? 'none' : 'all 0.3s ease',
                userSelect: 'none',
                textAlign: align,
            }}
        >
            {/* Card header */}
            <Box sx={{
                display: 'flex',
                flexDirection: align === 'right' ? 'row-reverse' : 'row',
                alignItems: 'center',
                gap: 1.5,
            }}>
                {exp.logo && (
                    <Box
                        component="img"
                        src={exp.logo}
                        sx={{
                            width: 44,
                            height: 44,
                            objectFit: 'contain',
                            borderRadius: '6px',
                            background: '#ffffff',
                            padding: '4px',
                            flexShrink: 0,
                            transform: hovered ? 'rotate(6deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                            transition: 'transform 0.35s ease',
                        }}
                    />
                )}
                <Box sx={{ flex: 1, textAlign: align }}>
                    <Typography sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        color: '#79b8ff',
                        fontSize: '13px',
                        letterSpacing: '0.08em',
                    }}>
                        {exp.name}
                    </Typography>
                    <Typography sx={{ fontFamily: 'monospace', color: '#8b949e', fontSize: '12px', mt: 0.25 }}>
                        {exp.title}
                    </Typography>
                    <Typography sx={{ fontFamily: 'monospace', color: '#58a6ff', fontSize: '11px', mt: 0.25 }}>
                        {dateRangeDisplay(exp.startDate, exp.endDate)}
                    </Typography>
                </Box>
                <Box sx={{
                    color: '#79b8ff',
                    fontSize: '16px',
                    flexShrink: 0,
                    transition: 'transform 0.3s ease',
                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    alignSelf: 'flex-start',
                }}>
                    ▾
                </Box>
            </Box>

            {/* Expandable roles */}
            <Collapse in={expanded} timeout={300}>
                <Box sx={{
                    mt: 1.5,
                    pt: 1.5,
                    borderTop: '1px solid #30363d',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.75,
                    textAlign: 'left',
                }}>
                    {exp.roles.map((role, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                            <span style={{ color: '#79b8ff', flexShrink: 0, fontSize: '12px', marginTop: '2px' }}>▸</span>
                            <Typography sx={{ fontFamily: 'monospace', color: '#cdd9e5', fontSize: '12px', lineHeight: 1.6 }}>
                                {role}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Collapse>
        </Box>
    );
}

// ─── Single timeline item ────────────────────────────────────────────────────

interface TimelineItemProps {
    exp: ExperienceItemProps;
    index: number;
}

function TimelineItem({ exp, index }: TimelineItemProps) {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const [expanded, setExpanded] = useState(false);
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const isLeft = index % 2 === 0;
    const delay = `${index * 0.12}s`;

    // ── Mobile layout (left-side timeline) ───────────────────────────────────
    if (!isMd) {
        return (
            <Box
                ref={ref}
                sx={{
                    display: 'flex',
                    mb: 4,
                    pl: '40px',
                    position: 'relative',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(24px)',
                    transition: `opacity 0.5s ease ${delay}, transform 0.5s ease ${delay}`,
                }}
            >
                {/* Timeline dot */}
                <Box sx={{
                    position: 'absolute',
                    left: '12px',
                    top: '22px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#79b8ff',
                    animation: 'dotPulse 2.5s ease-in-out infinite',
                    zIndex: 2,
                }} />
                <ExperienceCard exp={exp} expanded={expanded} onToggle={() => setExpanded(!expanded)} />
            </Box>
        );
    }

    // ── Desktop layout (alternating center timeline) ──────────────────────────
    return (
        <Box
            ref={ref}
            sx={{ display: 'flex', alignItems: 'flex-start', mb: 5, position: 'relative', minHeight: '80px' }}
        >
            {/* Left slot */}
            <Box sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                pr: '40px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-36px)',
                transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}`,
            }}>
                {isLeft && (
                    <ExperienceCard exp={exp} expanded={expanded} onToggle={() => setExpanded(!expanded)} align="right" />
                )}
            </Box>

            {/* Timeline dot */}
            <Box sx={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#79b8ff',
                flexShrink: 0,
                mt: '22px',
                zIndex: 2,
                animation: 'dotPulse 2.5s ease-in-out infinite',
                animationDelay: `${index * 0.4}s`,
            }} />

            {/* Right slot */}
            <Box sx={{
                flex: 1,
                pl: '40px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(36px)',
                transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}`,
            }}>
                {!isLeft && (
                    <ExperienceCard exp={exp} expanded={expanded} onToggle={() => setExpanded(!expanded)} align="left" />
                )}
            </Box>
        </Box>
    );
}

// ─── Experience section (timeline container) ─────────────────────────────────

export default function Experience() {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box sx={{ position: 'relative', mt: 2 }}>
            {/* Vertical timeline line */}
            <Box sx={{
                position: 'absolute',
                left: isMd ? 'calc(50% - 1px)' : '17px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(to bottom, transparent 0%, #79b8ff 8%, #79b8ff 92%, transparent 100%)',
                zIndex: 1,
            }} />

            {LIST_EXPERIENCES.map((exp, idx) => (
                <TimelineItem key={exp.name} exp={exp} index={idx} />
            ))}
        </Box>
    );
}
