const styles = (theme) => ({
    root: {
        paddingTop: `${theme.mixins.toolbar.minHeight}px`,
        paddingBottom: `${theme.mixins.toolbar.minHeight}px`,
        height: `fit-content`,
        boxSizing: "border-box",
        backgroundColor: "#F5F5F5"
    },
    title: {
        marginBottom: `${theme.mixins.toolbar.minHeight}px`,
        marginTop: `${theme.mixins.toolbar.minHeight * 0.5}px`,
    },
    rootGrid: {

    },
    cardDiv: {

    },
    card: {

    },
    cardMedia: {
        height: 200,
    },
    cardContent: {
    },
    cardActions: {
        justifyContent: "center",
        flexWrap: "wrap"
    },
    chip: {
        color: "#018786",
        borderColor: "#018786",
        marginBottom: "3px"
    },
    button: {
        marginBottom: "3px"
    }
});

export default styles;