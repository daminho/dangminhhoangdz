import Box from "@mui/material/Box";
import React from "react";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import billiards from "./billard.png"
import dancing from "./dancing.png"
import piano from "./piano.png"
import { Typography } from "@mui/material";

interface HobbyProps {
    name: string,
    image: string,
}

const hobbies : string[] = ["Billiards (8-Ball)", "Dancing", "Reading", "Piano", "Eating", "Gym", "Badminton", "Travelling"]
export default function Hobbies() {

    const [index, setIndex] = useState(0);

    return (
        <div style = {{display: "flex", flexWrap: "wrap"}}>
            {hobbies.map((hobby) => (
                <Typography
                    variant="subtitle1"
                    sx = {{
                        fontWeight: 700,
                        color: "navy",
                        marginRight: "12px"
                    }}
                >{hobby}</Typography>
            ))}
        </div>
    )
}
