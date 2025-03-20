import { Button, Typography, Box } from "@mui/material";
import resume from './CV_HoangDang.pdf'

export default function AboutMe() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            padding: "0 32px",
            marginTop: "12px",
        }}>
            <Typography
                sx={{
                    fontSize: "18px",
                    fontFamily: 'monospace',
                    color: "#545454",
                    textAlign: "justify",
                    textJustify: "inter-word",
                    lineHeight: 1.6,
                }}
            >
                I'm Dang Minh Hoang, I graduated from KAIST with a double major in Computer Science and Business Technology Management in December 2024.
                I'm currently working as a Software Engineer in Vietnam. My development philosophy is to build human-centric products that help increase efficiency and convenience in daily life. I'm interested in <span style={{fontWeight: "bold"}}>Efficiency for ML models</span> and <span style={{fontWeight: "bold"}}>Human-computer Interaction</span>.
            </Typography>
            
            <Typography
                sx={{
                    fontSize: "18px",
                    fontFamily: 'monospace',
                    color: "#545454",
                    textAlign: "justify",
                    textJustify: "inter-word",
                    lineHeight: 1.6,
                }}
            >
                I'm a dynamic, energetic, durable, and optimistic person. I love playing billiards, piano, and dancing. I can play billiards for 10 hours straight and usually play 8-ball.
                Apart from the energetic moments, I spend my self-time on reading books, cafe hopping, and riding my bike to a random place
            </Typography>

            <Button 
                href={resume} 
                target="blank" 
                sx={{
                    padding: "8px 24px",
                    marginTop: "12px",
                    alignSelf: "flex-start",
                    fontFamily: 'monospace',
                    textTransform: "none",
                    fontSize: "16px",
                }} 
                variant="contained"
            >
                My CV
            </Button>
        </Box>
    );
}