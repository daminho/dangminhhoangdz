import Typography from "@mui/material/Typography";

export interface SectionProps {
    title: string,
    child: JSX.Element
}


function Section(props: SectionProps) {
    return (
        <div style={{display: "flex", flexDirection: "column", marginTop: "24px"}} id = {props.title.toLowerCase().split(" ").join("")}>
            <Typography
                variant="h4"
                noWrap
                component="a"
                sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                textDecoration: 'none',
                color: "navy"
             }}
            >{props.title}</Typography>
            {props.child}
        </div>
    );
}

export default Section