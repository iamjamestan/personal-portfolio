import aboutBackground from "../images/background/aboutBackground.jpg";
const styles = (theme) => ({
    root: {
        paddingTop: `${theme.mixins.toolbar.minHeight}px`,
        paddingBottom: `${theme.mixins.toolbar.minHeight}px`,
        height: `fit-content`,
        boxSizing: "border-box",
        background: `url(${aboutBackground}) no-repeat center`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"center"
    },
    title: {
        marginBottom: `${theme.mixins.toolbar.minHeight * 0.5}px`,
        marginTop: `${theme.mixins.toolbar.minHeight * 0.5}px`,
    },
    profile: {
        paddingTop: "2rem",
        paddingBottom: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        backgroundColor: "rgba(255,255,255,0.85)",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    },
    image: {
        height: "13rem"
    },
    skills: {
        height: "fit-content",
        flexGrow: "0",
        justifyContent: "center"
    },
    skillBlock: {
        height: "4rem",
        margin: "0.5rem 0",
    },
    box: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.85)",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        borderRadius: '20px'
    },
    category: {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 0.5rem",
        minWidth: "20%",
        [theme.breakpoints.down("sm")]: {
            minWidth: "30%",
        },
        backgroundColor: "#018786",
        borderRadius: '20px 0px 0px 20px',
        color: "white",
    },
    logos: {
        padding: "0.2em",
        display: "inline-flex",
        flexDirection: "row",
        height: "inherit"
    },
    logoDiv: {
        width: "auto",
        maxWidth:"10.5vw",
        height: "inherit",
        marginLeft: "0.6rem",
        display: "flex",
        alignItems:"center",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "10vw",
        }
    },
    accordion: {
        borderRadius: "5px",
        width: "60%",
        "&:before": {
            display: "none"
        },
    },
    accordionSummary: {
        backgroundColor: "#018786",
        borderRadius: "5px",
        color: "white",
    },
    accordionDetails: {
        backgroundColor: "rgba(255,255,255)",
        borderBottom: "1px solid grey",
        display: "flex",
        justifyContent: "space-between"
    }
})

export default styles;