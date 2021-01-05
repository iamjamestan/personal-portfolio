export default (theme) => ({
    root: {
        flexGrow: "1",
        "& a": {
            textDecoration: "none",
            color: "inherit"
        },
        color: "white",
        "& header": {
            boxShadow: props => props.isHero && "none",
        },
    },
    toolbar: {
        justifyContent:"space-between",
    },

    middle: {
        display: "flex",
        "& a": {
            margin: "0 0.8rem"
        },
        "& a:hover": {
            textDecoration: "underline",
        },
    },
});