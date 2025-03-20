import Typography from "@mui/material/Typography";

export interface SectionProps {
    title: string,
    child: JSX.Element
}

function Section(props: SectionProps) {
    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: "24px",
            alignItems: "center"
        }} id={props.title.toLowerCase().split(" ").join("")}>
            <div style={{
                width: "100%",
                maxWidth: "1000px",
                display: "flex",
                flexDirection: "column"
            }}>
                <Typography
                    variant="h4"
                    noWrap
                    component="a"
                    sx={{
                        mr: 2,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        textDecoration: 'none',
                        color: "navy",
                        marginBottom: "16px"
                    }}
                >
                    {props.title}
                </Typography>
                {props.child}
            </div>
        </div>
    );
}

export default Section