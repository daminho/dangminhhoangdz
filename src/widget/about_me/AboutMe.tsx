import { Box, Button, Typography } from '@mui/material';
import resume from './CV_HoangDang.pdf';

export default function AboutMe() {
    return (
        <Box sx={{ px: 1, mt: 1.5, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {[
                "I'm Dang Minh Hoang, a Vietnamese student studying double major in Computer Science and Business Technology Management at KAIST, South Korea. My life goal is to build valuable software / products for society. Currently interested in Human–Computer Interaction.",
                "I'm a dynamic, energetic, and optimistic person. I love playing billiards, piano, and dancing. Apart from those energetic moments, I spend my downtime reading, café hopping, and exploring chilling-vibe locations.",
            ].map((text, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <Typography sx={{ color: '#79b8ff', fontFamily: 'monospace', fontSize: '15px', flexShrink: 0, mt: '2px' }}>
                        {'$'}
                    </Typography>
                    <Typography sx={{ fontFamily: 'monospace', color: '#cdd9e5', fontSize: '15px', lineHeight: 1.8 }}>
                        {text}
                    </Typography>
                </Box>
            ))}

            <Box>
                <Button
                    href={resume}
                    target="blank"
                    variant="outlined"
                    sx={{
                        mt: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        fontSize: '13px',
                        color: '#79b8ff',
                        borderColor: '#79b8ff',
                        letterSpacing: '0.05em',
                        textTransform: 'none',
                        px: 2.5,
                        py: 0.75,
                        '&:hover': {
                            backgroundColor: 'rgba(121,184,255,0.1)',
                            borderColor: '#79b8ff',
                            boxShadow: '0 0 12px rgba(121,184,255,0.3)',
                        },
                        transition: 'all 0.2s ease',
                    }}
                >
                    {'>'} View CV
                </Button>
            </Box>
        </Box>
    );
}
