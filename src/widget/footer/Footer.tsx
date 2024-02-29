import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import IconButton from '@mui/material/IconButton';


function Footer() {
    return (
        <Box sx = {{
            width: "100%",
            minHeight: "36px", 
            display: "flex",
            justifyContent: "center"
        }}>
            <Box sx = {{
                paddingLeft: "32px",
                paddingRight: "32px",
                display: "flex",
                alignItems: "center",
                height: "100%",
                flexDirection: {
                    xs: "column",
                    md: "row"
                }
            }}>
        

            <Box sx = {{display: "flex"}}>
                <IconButton href = 'https://www.linkedin.com/in/dang-minh-hoang-8b6683179/' target = 'blank'>
                        <LinkedInIcon sx = {{height: "24px"}}/>
                </IconButton>

                <IconButton href = 'https://github.com/daminho' target = 'blank'>
                    <GitHubIcon sx = {{height: "24px"}}/>
                </IconButton>

                <IconButton href = 'https://www.instagram.com/consoidaudan/' target = 'blank'>
                    <InstagramIcon sx = {{height: "24px"}}/>
                </IconButton>

                <IconButton href = 'https://www.facebook.com/dangminhhoangdz' target = 'blank'>
                    <FacebookIcon sx = {{height: "24px"}}/>
                </IconButton>
            </Box>

            <Box sx = {{
                height: { md: "24px", xs: "1px"},
                width:  { md: "1px", xs: "160px"},
                marginX: {md: "20px", xs: "0px"},
                marginY: {md: "0px", xs: "4px"},
                 backgroundColor: "grey"
            }}></Box>

            <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        textDecoration: 'none',
                        color: "grey",
                        fontSize: "12px"
                    }}
                >
                    dangminhhoangdz@gmail.com
                </Typography>

            <Box sx = {{
                height: { md: "24px", xs: "1px"},
                width: { md: "1px", xs: "160px"},
                marginX: {md: "20px", xs: "0px"},
                marginY: {md: "0px", xs: "4px"},
                backgroundColor: "grey"
            }}></Box>


            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    textDecoration: 'none',
                    color: "grey",
                    fontSize: "12px"
                }}
            >
                +82 10 9575 7883
            </Typography>
            
            </Box>
        </Box>
    );
}


export default Footer;