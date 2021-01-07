import portfolio from "../images/portfolio.png";
import HairStyleX from "../images/HairStyleX.png";
import SupperJio from "../images/SupperJio.png";

export default [
    {
        title: "SupperJio Telegram bot",
        imageLink: SupperJio,
        description: "A telegram bot developed to help collate supper orders in telegram groups, with over 1000 daily users in NUS.",
        links: {
            github: "https://github.com/iamjamestan/supperbot-node-telegram",
            documentation: "https://docs.google.com/document/d/1GYp-AiEbluJmp6-xQk-ujfbzBARep92E8MzXMF4IfHI/edit",
            demo: "https://t.me/SupperJio_v2_bot"
        },
        skills: [
            "NodeJS",
            "PostGreSQL",
            "Heroku"
        ]
    },
    {
        title: "HairStyleX",
        imageLink: HairStyleX,
        description: "A JavaFX desktop application designed to help budding hair salon owners manage clients, hairdressers, and appointments.",
        links: {
            github: "https://github.com/AY2021S1-CS2103T-T15-1/tp",
            documentation: "https://ay2021s1-cs2103t-t15-1.github.io/tp/",
        },
        skills: [
            "JavaFX",
            "Github Actions",
            "Gradle",
            "IntelliJ"
        ]
    },
    {
        title: "Personal Portfolio",
        imageLink: portfolio,
        description: "This very website that you are viewing😁! Developed with ReactJS, Material-UI components, and cloud hosting (Netlify).",
        links: {
            github: "https://github.com/iamjamestan/personal-portfolio",
            //TODO: add Figma prototype link once done.
        },
        skills: [
            "ReactJS",
            "Material-UI",
            "WebStorm"
        ]
    },
];