import Box from "@mui/material/Box";
import React, { MouseEventHandler } from "react";
import hoangdz from "./hoangdzvl.jpg"
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Hello!', 'I\'m Dang Minh Hoang', 'Undergraduate Student @ KAIST', 'You can call me Hoangdz'];

function LandingPage () {

    const [index, setIndex] = React.useState(0);
    const [rotateAngle, setRotateAngle] = React.useState([0, 0])

    React.useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

    var executeOnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        var image = document.getElementById("landing-image")
        image!.style.transitionDuration = '100ms'
        var height = image?.offsetHeight ?? 0
        var width = image?.offsetWidth ?? 0
        var center = [width / 2, height / 2]

        var top = image?.offsetTop ?? 0
        var left = image?.offsetLeft ?? 0
        var shifted = [e.clientX - left, e.clientY - top]
        
        var coefficient = [(shifted[0] - center[0]) / Math.abs(center[0] - shifted[0]) , (center[1] - shifted[1]) / Math.abs(center[1] - shifted[1])]

        var _rotateAngle = [Math.abs(center[1] - shifted[1]) * coefficient[1], Math.abs(center[0] - shifted[0]) * coefficient[0]]

        for(var i = 0; i < 2; i++) {
            _rotateAngle[i] = 10 * _rotateAngle[i] / center[1 - i]
        }
        setRotateAngle(_rotateAngle)
        
    }

    var executeOnMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        
        setTimeout(() => {
            var image = document.getElementById("landing-image")
            image!.style.transitionDuration = '500ms'
            setRotateAngle([0, 0])
            
        }, 500)
    }

    return (
        <div id = "landing-image" style={{ willChange: "transform", 
            transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(${rotateAngle[0]}deg) rotateY(${rotateAngle[1]}deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            transitionDuration: '500ms',
            maxWidth: "1000px", position: "relative",
            padding: '20px',
            backgroundColor: 'transparent',
            }} 
            onMouseMove={executeOnMouseMove}
            onMouseLeave={executeOnMouseLeave}
            >
            <Box component= "img" src = {hoangdz} sx = {{maxWidth: "100%"}} style = {{boxShadow: '0 2px 32px rgba(0, 0, 0, .2), 0 16px 21px rgba(0, 0, 0, .55)',}}/>
            <TextTransition springConfig={presets.wobbly} style = {{
                position: "absolute", top: "36%", color: "white",
                fontSize: "36px", left: "15%", maxWidth: "200px",
                fontFamily: 'pacifico'
            }}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </div>
    );
}

export default LandingPage;