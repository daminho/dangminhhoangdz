import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';

const socials = [
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/dang-minh-hoang-8b6683179/', label: 'LinkedIn' },
    { icon: <GitHubIcon />,   href: 'https://github.com/daminho',                              label: 'GitHub' },
    { icon: <InstagramIcon />,href: 'https://www.instagram.com/consoidaudan/',                 label: 'Instagram' },
    { icon: <FacebookIcon />, href: 'https://www.facebook.com/dangminhhoangdz',               label: 'Facebook' },
];

function Divider() {
    return (
        <Box sx={{
            height: { md: '20px', xs: '1px' },
            width:  { md: '1px', xs: '120px' },
            mx:     { md: '16px', xs: 0 },
            my:     { md: 0, xs: '6px' },
            background: '#30363d',
        }} />
    );
}

function Footer() {
    return (
        <Box sx={{
            width: '100%',
            borderTop: '1px solid #30363d',
            background: 'rgba(13,17,23,0.9)',
            backdropFilter: 'blur(8px)',
            py: 2,
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Box sx={{
                px: 4,
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 1, md: 0 },
            }}>
                <Box sx={{ display: 'flex' }}>
                    {socials.map(({ icon, href, label }) => (
                        <IconButton
                            key={label}
                            href={href}
                            target="blank"
                            aria-label={label}
                            sx={{
                                color: '#8b949e',
                                '&:hover': { color: '#79b8ff' },
                                transition: 'color 0.2s',
                            }}
                        >
                            {icon}
                        </IconButton>
                    ))}
                </Box>

                <Divider />

                <Typography sx={{ fontFamily: 'monospace', color: '#8b949e', fontSize: '12px' }}>
                    dangminhhoangdz@gmail.com
                </Typography>

                <Divider />

                <Typography sx={{ fontFamily: 'monospace', color: '#8b949e', fontSize: '12px' }}>
                    +82 10 9575 7883
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
