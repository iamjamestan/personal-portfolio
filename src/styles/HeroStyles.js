const styles = (theme) => ({
    root: {

    },
    particles: {
        backgroundColor: "#121923",
        height: "100vh",
    },
    rootGrid: {
        position: "absolute",
        display: "inline-flex",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    intro: {
        textAlign: "center",
        "& a": {
            textDecoration: "none",
        },
        flexWrap: "wrap"
    },
    imageContainer: {
        textAlign: "center",
        "& img":  {
            width: "13rem",
        },
    },
    button: {
        marginTop: "25px"
    },

});

export default styles;