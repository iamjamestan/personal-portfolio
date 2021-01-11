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
        marginBottom: `${theme.mixins.toolbar.minHeight * 0.5}px`,
        marginTop: `${theme.mixins.toolbar.minHeight * 0.5}px`,
    },

    profile: {

    },
    pane: {

    }
})

export default styles;