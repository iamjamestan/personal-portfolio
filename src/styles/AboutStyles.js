const styles = (theme) => ({
    root: {
        paddingTop: `${theme.mixins.toolbar.minHeight}px`,
        paddingBottom: `${theme.mixins.toolbar.minHeight}px`,
        minHeight: `100vh`,
        boxSizing: "border-box",
        backgroundColor: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    title: {
        marginBottom: `${theme.mixins.toolbar.minHeight}px`,
        marginTop: `${theme.mixins.toolbar.minHeight * 0.5}px`,
    },
    container: {
        minHeight: "70vh"
    },
    profile: {
        paddingTop: "2rem",
        paddingBottom: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    },
    image: {
        height: "13rem"
    },
    skills: {
        height: "fit-content",
        justifyContent: "center"
    },
    skillBlock: {
        height: "70px",
        margin: "0.5rem 0",
    },
    box: {
        display: "flex",
        flexDirection: "row"
    },
    category: {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center"
    },
    logos: {
        padding: "0.2em",
        display: "inline-flex",
        flexDirection: "row",
    },
    accordion: {
        width: "60%",
        backgroundColor: theme.palette.secondary.main,
        boxShadow: "none",
        border: theme.palette.secondary.dark
    },
    accordionDetails: {
        backgroundColor: "white",
        borderBottom: "1px solid grey",
        display: "flex",
        justifyContent: "space-between"
    }
})

export default styles;