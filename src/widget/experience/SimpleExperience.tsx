import { Box, Grid, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { LIST_EXPERIENCES } from "./Experience";

interface SimpleExperienceProps {
    name: string;
    title: string;
    logo: string;
}

export default function SimpleExerience() {
    return (
        <Grid container rowSpacing={2} columnSpacing={2} sx={{ 
            width: "100%",
            margin: "0 auto",
            padding: 0,
            maxWidth: "1000px"
        }}>
            {LIST_EXPERIENCES.map((prop, index) => (
                <Grid item xs={12} sm={6} md={4} key={prop.name}>
                    <SimpleExperienceItem 
                        {...{name: prop.name, title: prop.title, logo: prop.logo ?? ""}}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

function SimpleExperienceItem(props: SimpleExperienceProps) {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Box
            sx={{
                height: "140px",
                width: "100%",
                maxWidth: "300px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "12px",
                transition: "all 0.3s ease-in-out",
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                background: isHovered 
                    ? "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)"
                    : "rgba(255,255,255,0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: isHovered 
                    ? "0 8px 24px rgba(0,0,0,0.12)"
                    : "0 2px 8px rgba(0,0,0,0.08)",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
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
                "&:hover::before": {
                    transform: "translateX(100%)",
                }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // onClick={() => setIsFlipped(!isFlipped)}
        >
            <Box sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                transition: "transform 0.6s",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
            }}>
                {/* Front of card */}
                <Box sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    
                    backfaceVisibility: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "4px",
                }}>
                    <Box sx={{
                        width: "80px",
                        height: "80px",
                        flexShrink: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "12px",
                        transition: "transform 0.3s ease-in-out",
                        transform: isHovered ? "scale(1.1)" : "scale(1)",
                    }}>
                        <Box
                            component="img"
                            src={props.logo}
                            sx={{
                                maxHeight: "100%",
                                width: "100%",
                                objectFit: "contain",
                                borderRadius: "8px",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                            }}
                        />
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        flex: 1,
                        minWidth: 0,
                        overflow: "hidden",
                        maxWidth: "calc(100% - 92px)", // 80px logo + 12px margin
                    }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: theme.palette.primary.main,
                                marginBottom: "4px",
                                fontSize: "1rem",
                                transition: "color 0.3s ease-in-out",
                                "&:hover": {
                                    color: theme.palette.primary.dark,
                                },
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {props.name}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 500,
                                color: theme.palette.text.secondary,
                                fontSize: "0.9rem",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {props.title}
                        </Typography>
                    </Box>
                </Box>

                {/* Back of card
                <Box sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)",
                    borderRadius: "12px",
                }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: 'monospace',
                            color: theme.palette.primary.main,
                            textAlign: "center",
                            marginBottom: "8px",
                            fontSize: "1rem",
                        }}
                    >
                        Experience Details
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: 'monospace',
                            color: theme.palette.text.secondary,
                            textAlign: "center",
                            lineHeight: 1.4,
                            fontSize: "0.9rem",
                        }}
                    >
                        Click to view more details about this experience
                    </Typography>
                </Box> */}
            </Box>
        </Box>
    );
}