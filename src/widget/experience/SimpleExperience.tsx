import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { LIST_EXPERIENCES } from "./Experience";



interface SimpleExperienceProps {
    name: string,
    title: string,
    logo: string,
}

export default function SimpleExerience() {
    return <Grid container>
        {LIST_EXPERIENCES.map(prop => <Grid item xs = {6}>
            <SimpleExperienceItem {...{name: prop.name, title: prop.title, logo: prop.logo ?? ""}}></SimpleExperienceItem>
        </Grid>)}
    </Grid>
}


function SimpleExperienceItem(props: SimpleExperienceProps){

    const [rotateAngle, setRotateAngle] = useState([0, 0])
    const [isSpinning, setIsSpinning] = useState(false)


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
        <div style = {{display: "flex", flexDirection:"column", justifyItems: "center", alignItems: "center", marginTop: "32px"}}>
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
            <div style = {{display: "flex", flexDirection: "column", alignItems:"center"}}>
                <Box sx = {{width: "80px", height: "80px", display: {md: "none", xs: "flex"}, justifyItems: "center", alignItems: "center", marginRight: "32px"}}>
                        <Box component = "img" src = {props.logo} style={{maxHeight:"80px", width: "80px", margin: "auto"}}></Box>
                </Box>
                <div style = {{display: "flex", flexDirection: "column", alignItems:"center"}}>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
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
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            textDecoration: 'none',
                            color: "grey"
                            }}
                        >
                            {props.title}
                        </Typography>
                </div>
            </div>
        </div>
    )
}