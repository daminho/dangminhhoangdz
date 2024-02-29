import { Button } from "@mui/material";
import resume from './CV_HoangDang.pdf'




export default function AboutMe() {
    const divider = <div style = {{height: "12px", width: "100%"}}></div>


    return (
        <div style = {{display: "block", paddingLeft: "32px", paddingRight: "32px", marginTop: "12px"}}>
           <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <div style= {{fontSize: "18px", fontFamily:  'monospace', color: "#545454"}}> I'm Dang Minh Hoang, a Vietnamese student studying double major in Computer Science and Business Technology Management at KAIST, South Korea.
                 My life goal is to build valuable softwares/products for the societies. Currently, I'm interested in Human-Computer Interaction</div>
            {divider}
            <div style= {{fontSize: "18px", fontFamily:  'monospace', color: "#545454"}}> I'm a dynamic, energetic, and optimistic person. I love playing billiards, piano, and dancing. Apart from energetic moments, I spend my self-time on reading books,
                cafe hopping, and going to chilling-vibe locations  </div>
           </div>
           <Button href ={resume} target="blank" sx = {{padding: "4px", margin: "0px", marginTop: "12px"}} variant="contained">
                My CV
           </Button>
        </div>
    );
}