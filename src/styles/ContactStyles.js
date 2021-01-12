import contactBackground from "../images/background/contactBackground.png"
const styles = (theme) => ({
    root: {
        paddingBottom: `${theme.mixins.toolbar.minHeight * 1.5}px`,
        height: `100vh`,
        boxSizing: "border-box",
        background: `url(${contactBackground}) no-repeat center`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        "&: div": {
            flex: "grow"
        }
    },
    title: {
        marginBottom: `${theme.mixins.toolbar.minHeight * 0.3}px`
    },
    card: {
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "inline-flex",
        flexDirection: "column",
        width: "80%",
        height: "fit-content",
        borderRadius:"15px",
        padding:"1.5rem"
    },
    icons: {
        paddingTop:"0.75rem",
        display: "flex",
        justifyContent: "center"
    }
});

export default styles;