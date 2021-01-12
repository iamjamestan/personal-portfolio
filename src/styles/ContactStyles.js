import contactBackground from "../images/background/contactBackground.png"
const styles = (theme) => ({
    root: {
        paddingBottom: `${theme.mixins.toolbar.minHeight * 1.5}px`,
        minHeight: `100vh`,
        [theme.breakpoints.down("sm")]: {
            height: "fit-content",
            paddingTop: `${theme.mixins.toolbar.minHeight * 1.2}px`,
            paddingBottom: `${theme.mixins.toolbar.minHeight * 0.5}px`
        },
        boxSizing: "border-box",
        background: `url(${contactBackground}) no-repeat center`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        marginBottom: `${theme.mixins.toolbar.minHeight * 0.3}px`
    },
    card: {
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minWidth: "80%",
        height: "fit-content",
        borderRadius:"15px",
        flexWrap: "wrap",
        padding:"1.5rem",
        [theme.breakpoints.down("sm")]: {
            padding:"1rem",
        }
    },
    icons: {
        paddingTop:"0.75rem",
        display: "flex",
        justifyContent: "center"
    }
});

export default styles;