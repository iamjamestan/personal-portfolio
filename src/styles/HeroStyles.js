const styles = (theme) => ({
    root: {

    },
    particles: {
        backgroundColor: "#121923",
        height: "100vh",
        zIndex: "10"
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

        }
    },
    image : {
        width: "13rem",
        height: "13rem"
    },
    button: {
        marginTop: "25px"
    },

});

export default styles;