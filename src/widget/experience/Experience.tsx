import { Box, Grid, Typography, Paper, useTheme } from "@mui/material";
import React, { useState } from "react";
import anduinLogo from "./anduin.png";
import onsquareLogo from "./onsquare.png";
import luveriLogo from "./luveri.png";
import cdsnLogo from "./Group 5.svg"
import iclabLogo from "./ic_lab.jpg";

export interface ExperienceItemProps {
    name: string;
    logo: string | undefined;
    startDate: Date;
    endDate: Date;
    title: string;
    roles: string[];
}


const Anduin = {
    name: "Anduin Transaction",
    logo: anduinLogo,
    startDate: new Date("2023-03-01"),
    endDate: new Date("2023-08-31"),
    title: "Software Engineer Intern",
    roles: [
       "Building a place for managing documents with audit logs and integrating with other features",
       "Designing core algorithm for a pipeline to extract users' input from PDF files and map to corresponding fields with the application of Amazon Textract",
       "Building standalone app from scratch to apply the extracting pipeline into a large-scale of number of input files"
    ]
} as ExperienceItemProps ;

const Onsquare = {
    name: "OnSquare",
    logo: onsquareLogo,
    startDate: new Date("2023-06-19"),
    endDate: new Date("2023-08-26"),
    title: "Software Engineer Intern",
    roles: [
        "Implementing different kinds of infinitely virtual listview",
        "Making virtual listviews' elements sortable",
        "Displaying search results for the search function in each virtual listview"
    ]
} as ExperienceItemProps ;

const CDSNLab = {
    name: "CDS&N Lab",
    logo: cdsnLogo,
    startDate: new Date("2023-12-20"),
    endDate: new Date("2024-03-01"),
    title: "Research Intern",
    roles: [
        "Building annotation, intergrate AI City Challenge 2022 to run on ViTDet model",
        "Experimenting to evaluate the effect of different ViT backbone's patch size on the performance of the model",
        "Optimizing the evaluation process with new predictions-groundtruth matching and multiprocessing"
    ]
} as ExperienceItemProps;

const Luveri = {
    name: "Luveri",
    logo: luveriLogo,
    startDate: new Date("2021-04-01"),
    endDate: new Date("2023-06-01"),
    title: "Co-founder",
    roles: [
        "In charge of and implemented front-end for the following features: Home, Timeline/Calendar, Chat, Note",
        "Ideating and Designing UI for all features",
        "Organizing user research and testing",
        "Having more than 400.000 downloads in total on both platforms iOS and Android"
    ]
}

const ICLab = {
    name: "IC Lab",
    logo: iclabLogo,
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-09-01"),
    title: "Research Intern",
    roles: []

}

export const LIST_EXPERIENCES: ExperienceItemProps[] = [Luveri, ICLab, CDSNLab, Anduin, Onsquare];


function Experience() {
    return (
        <Grid container spacing={2} sx={{ 
            width: "100%",
            margin: "0 auto",
            padding: 0,
            maxWidth: "1000px"
        }}>
            {LIST_EXPERIENCES.map((prop, index) => (
                <Grid item xs={12} sm={6} md={4} key={prop.name}>
                    <ExperienceItem 
                        {...prop}
                    />
                </Grid>
            ))}
        </Grid>
    );
}


function ExperienceItem(props: ExperienceItemProps) {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    const options = {month: 'long', year: "numeric" };
    function shortDateDisplay(date: Date): string {
        return date.toLocaleDateString("en-US", options as Intl.DateTimeFormatOptions);
    }

    return (
        <Paper
            elevation={isHovered ? 8 : 2}
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
                    flexDirection: "row",
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
                        alignItems: "stretch",
                        flex: 1,
                        minWidth: 0,
                        overflow: "hidden",
                        maxWidth: "calc(100% - 92px)",
                        gap: "8px",
                    }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: theme.palette.primary.main,
                                fontSize: "1rem",
                                transition: "color 0.3s ease-in-out",
                                "&:hover": {
                                    color: theme.palette.primary.dark,
                                },
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                textAlign: "justify",
                                textJustify: "inter-word",
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
                                textAlign: "justify",
                                textJustify: "inter-word",
                            }}
                        >
                            {props.title}
                        </Typography>
                    </Box>
                </Box>

                {/* Back of card */}
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
                </Box>
            </Box>
        </Paper>
    );
}


export default Experience;