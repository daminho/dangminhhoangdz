import { Box, Typography, Container } from "@mui/material";
import profileImage from "./profile.jpg";

export default function LandingPage() {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)",
                position: "relative",
                overflow: "hidden",
                marginTop: {xs: "24px", md: "48px"},
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                    transform: "translateX(-100%)",
                    transition: "transform 0.6s",
                },
            }}
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        gap: { xs: "32px", md: "48px" },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: { xs: "center", md: "flex-start" },
                            textAlign: { xs: "center", md: "left" },
                            gap: "24px",
                            flex: 1,
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: "navy",
                                fontSize: { xs: "2.5rem", md: "3.5rem" },
                                lineHeight: 1.2,
                            }}
                        >
                            Dang Minh Hoang
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 500,
                                color: "#545454",
                                fontSize: { xs: "1.2rem", md: "1.5rem" },
                                maxWidth: "600px",
                            }}
                        >
                            Software Engineer
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: 'monospace',
                                color: "#666",
                                fontSize: { xs: "1rem", md: "1.2rem" },
                                maxWidth: "500px",
                                lineHeight: 1.6,
                            }}
                        >
                            Building human-centric products that enhance efficiency and convenience in daily life
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            maxWidth: { xs: "300px", md: "400px" },
                            width: "100%",
                        }}
                    >
                        <Box
                            component="img"
                            src={profileImage}
                            alt="Dang Minh Hoang"
                            sx={{
                                width: { xs: "300px", md: "400px" },
                                height: { xs: "300px", md: "400px" },
                                objectFit: "cover",
                                borderRadius: "50%",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                                border: "4px solid white",
                                transition: "transform 0.3s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}