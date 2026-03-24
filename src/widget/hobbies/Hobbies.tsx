import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const hobbies: string[] = [
    'Billiards (8-Ball)',
    'Dancing',
    'Reading',
    'Piano',
    'Eating',
    'Gym',
    'Badminton',
    'Travelling',
];

function HobbyBadge({ name }: { name: string }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                px: 1.5,
                py: 0.5,
                border: `1px solid ${hovered ? '#79b8ff' : '#30363d'}`,
                borderRadius: '4px',
                background: hovered ? 'rgba(121,184,255,0.08)' : 'rgba(22,27,34,0.6)',
                transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: hovered ? '0 4px 14px rgba(121,184,255,0.15)' : 'none',
                transition: 'all 0.2s ease',
                cursor: 'default',
            }}
        >
            <span style={{ color: '#79b8ff', fontSize: '11px' }}>▸</span>
            <Typography sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: '13px',
                color: hovered ? '#e6edf3' : '#8b949e',
                transition: 'color 0.2s',
            }}>
                {name}
            </Typography>
        </Box>
    );
}

export default function Hobbies() {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 1 }}>
            {hobbies.map((hobby) => (
                <HobbyBadge key={hobby} name={hobby} />
            ))}
        </Box>
    );
}
