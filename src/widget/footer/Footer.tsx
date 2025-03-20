import { Box, Typography, IconButton, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                width: "100%",
                py: 3,
                px: 2,
                mt: "auto",
                backgroundColor: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(10px)",
            }}
        >
            <Box
                sx={{
                    maxWidth: "1000px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                }}
            >
                <Box sx={{ display: "flex", gap: "24px" }}>
                    <IconButton
                        component={Link}
                        href="https://github.com/daminho"
                        target="_blank"
                        sx={{ color: "navy" }}
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        component={Link}
                        href="https://linkedin.com/in/dangminhhoangdz"
                        target="_blank"
                        sx={{ color: "navy" }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton
                        component={Link}
                        href="mailto:dangminhhoangdz@gmail.com"
                        sx={{ color: "navy" }}
                    >
                        <EmailIcon />
                    </IconButton>
                </Box>
                <Typography
                    variant="body2"
                    sx={{
                        fontFamily: 'monospace',
                        color: "#666",
                        textAlign: "center",
                    }}
                >
                    © {new Date().getFullYear()} Dang Minh Hoang. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}