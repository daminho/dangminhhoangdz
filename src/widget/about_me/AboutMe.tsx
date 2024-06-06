import { Button } from "@mui/material";
import resume from './CV_HoangDang.pdf'
import react from "react";



export default function AboutMe() {
    const divider = <div style = {{height: "12px", width: "100%"}}></div>


    return (
        <div style = {{display: "block", paddingLeft: "32px", paddingRight: "32px", marginTop: "12px"}}>
           <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <div style= {{fontSize: "18px", fontFamily:  'monospace', color: "#545454"}}> I'm Dang Minh Hoang, a Vietnamese student studying double major in Computer Science and Business Technology Management at KAIST, South Korea.
                 My life goal is to build useful products to contribute to the society. Currently, I'm interested in <span style={{fontWeight: "bold"}}>Efficiency for ML models</span> and <span style={{fontWeight: "bold"}}>Human-computer Interaction</span>
                 . I hope to bring more useful application of AI into the daily life.
            </div>
            {divider}
            <div style= {{fontSize: "18px", fontFamily:  'monospace', color: "#545454"}}> I'm a dynamic, energetic, durable, and optimistic person. I love playing billiards, piano, and dancing. I can play billiards for 10 hours straight and usually play 8-ball.
                 Apart from the energetic moments, I spend my self-time on reading books, cafe hopping, and riding my bike to a random place</div>
           </div>
           <Button href ={resume} target="blank" sx = {{padding: "4px", margin: "0px", marginTop: "12px"}} variant="contained">
                My CV
           </Button>
        </div>
    );
}