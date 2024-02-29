import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import anduinLogo from "./anduin.png";
import onsquareLogo from "./onsquare.png";
import luveriLogo from "./luveri.png";
import cdsnLogo from "./Group 5.svg"

interface ExperienceItemProps {
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
       "Designing core algorithm for a pipeline to extract users’ input from PDF files and map to corresponding fields with the application of Amazon Textract",
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
        "Making virtual listviews’ elements sortable",
        "Displaying search results for the search function in each virtual listview"
    ]
} as ExperienceItemProps ;

const CDSNLab = {
    name: "CDS&N Lab",
    logo: cdsnLogo,
    startDate: new Date("2023-12-20"),
    endDate: new Date("2024-03-01"),
    title: "Undergraduate Intern, Research Assistant",
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
    title: "Co-founder & Front-end developer",
    roles: [
        "In charge of and implemented front-end for the following features: Home, Timeline/Calendar, Chat, Note",
        "Ideating and Designing UI for all features",
        "Organizing user research and testing",
        "Having more than 400.000 downloads in total on both platforms iOS and Android"
    ]
}

const props: ExperienceItemProps[] = [Luveri, CDSNLab, Anduin, Onsquare];


function Experience() {

    return (
        <div style = {{display: "flex", flexDirection: "column"}}>
            {props.map(prop => <ExperienceItem {...prop}></ExperienceItem>)}
        </div>
    );
}


function ExperienceItem(props: ExperienceItemProps) {


    const [rotateAngle, setRotateAngle] = useState([0, 0])
    const [isSpinning, setIsSpinning] = useState(false)


    const options = {month: 'long', year: "numeric" };
    function shortDateDisplay(date: Date): string {
        return date.toLocaleDateString("en-US", options as Intl.DateTimeFormatOptions);
    }


    var executeOnMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        if(isSpinning) {
            return
        }
        setIsSpinning(true)
        setRotateAngle([360, 720])
    }

    var executeOnMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsSpinning(false)
        setRotateAngle([0, 0])
    }


    return (
        <div style = {{display: "flex", justifyItems: "center", alignItems: "center", marginTop: "32px"}}>
            {
                props.logo != undefined ?
                <Box sx = {{width: "160px", height: "160px", display: {md: "flex", xs:"none"}, justifyItems: "center", alignItems: "center"}}
                        onMouseEnter = {executeOnMouseEnter}
                        onMouseLeave = {executeOnMouseLeave}
                    >
                    <Box 
                        style = {{
                            transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(${rotateAngle[0]}deg) rotateY(${rotateAngle[1]}deg) rotateZ(0deg) skew(0deg, 0deg)`,
                            transformStyle: "preserve-3d",
                            transitionDuration: '2000ms',
                            maxHeight:"160px", width: "160px", margin: "auto",
                            borderRadius: "8px"
                        }}
                        id = {`logo-${props.name}`}
                        
                        component = "img" 
                        src = {props.logo} ></Box>
                </Box> 
                : <div style={{height:"160px", width: "160px"}}></div>
            }
            <div style = {{display: "flex", flexDirection: "column", marginLeft: "32px"}}>
                <div style = {{display:"flex"}}>
                    <Box sx = {{width: "80px", height: "80px", display: {md: "none", xs: "flex"}, justifyItems: "center", alignItems: "center", marginRight: "32px"}}>
                        <Box component = "img" src = {props.logo} style={{maxHeight:"80px", width: "80px", margin: "auto"}}></Box>
                    </Box>
                    <div style = {{display: "flex", flexDirection: "column"}}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.25rem',
                            textDecoration: 'none',
                            color: "navy"
                            }}
                        >
                            {props.name}
                            </Typography>
                        <Typography
                                variant="body1"
                                noWrap
                                component="a"
                                sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                textDecoration: 'none',
                                color: "grey"
                                }}
                            >
                                {props.title}
                            </Typography>
                        <Typography
                                variant="body2"
                                noWrap
                                component="a"
                                sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                textDecoration: 'none',
                                color: "grey",
                                marginBottom: "8px",
                                }}
                            >
                                {shortDateDisplay(props.startDate) + " - " + shortDateDisplay(props.endDate)}
                            </Typography>
                    </div>
                </div>
                <div>
                    {props.roles.map(role => <Typography style={{marginTop: "6px"}} sx = {{fontFamily: 'monospace',
                            fontWeight: 400, fontSize: "14px"}}>{"- " + role}</Typography>)}
                </div>
            </div>
        </div>
    );
}


export default Experience;