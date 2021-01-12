import contactBackground from "../images/background/contactBackground.png"
const styles = (theme) => ({
    root: {
        paddingTop: `${theme.mixins.toolbar.minHeight}px`,
        minHeight: `100vh`,
        boxSizing: "border-box",
        background: `url(${contactBackground}) no-repeat center`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    },
    title: {
        marginBottom: `${theme.mixins.toolbar.minHeight}px`,
        marginTop: `${theme.mixins.toolbar.minHeight * 0.5}px`,
    },
});

export default styles;