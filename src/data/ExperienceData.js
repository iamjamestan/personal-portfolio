import React from "react";
import Button from '@material-ui/core/Button';

export default [
    {
        type:"item",
        title: "Software Engineer",
        subHeading: "Squarepoint Capital, Jan 2023 - Dec 2023",
        details: [
            "Collaborated closely with quantitative researchers to build and deploy robust data pipelines for various forms of datasets, enabling alpha creation and backtesting of quantitative strategies.",
            "Fixed numerous production issues during support rotation, where I monitored ongoing deployments and troubleshooted problems in a timely manner, ensuring the integrity of our data pipelines.",
            "Refactored existing data applications to improve their reliability and maintainability.",
        ]
    },
    {
        type: "year",
        year: 2023
    },
    {
        type:"item",
        title: "Software Engineer Intern",
        subHeading: "Stripe Payments Singapore, May 2022 - Aug 2022",
        details: [
            "Developed an automatic website verifier that scrapes website contents and verifies them against a set of requirements, reducing the manual labour of inspecting merchant websites.",
            "Designed an extensible architecture for the website verifier, allowing engineers to easily change verification algorithms without having to modify other components in the pipeline.",
            "Liaised with operations team to facilitate large-scale testing of the website verifier on merchant websites, providing visibility of its accuracy and reliability."
        ]
    },
    {
        type: "year",
        year: 2022
    },
    {
        type:"item",
        title: "Software Engineer Intern",
        subHeading: "Visa Worldwide Pte Ltd, May 2021 - Aug 2021",
        details: [
            "Developed a Maven module that encapsulates Visa’s cryptographic algorithms, automating the manual process of cryptogram testing for the team.",
            "Integrated existing test suite with an open source tool, reportportal.io, reducing the manual labour of classifying test failures for every new test cycle.",
            "Developed shell scripts and created Jenkins jobs that automate the deployment of the Visa Automated Testing Portal (VATP)."
        ]
    },
    {
        type:"item",
        title: "Lab Teaching Assistant (CS2040)",
        subHeading: "National University of Singapore, Jan 2021 - May 2021",
        details: [
            "Taught concepts pertaining to algorithmic analysis, sorting, hashing, heaps, trees and graphs.",
            "Attained a teaching score of 4.9/5.0 as compared to the department average of 4.2/5.0.",
            <Button variant="outlined" size={"small"} href="https://drive.google.com/file/d/1yKNj3xoXQdJC3S1ZnSZNifTctEqZZyTe/view?usp=sharing" color={"inherit"} target={"_blank"}>
                View teaching report
            </Button>
        ]
    },
    {
        type: "year",
        year: 2021
    },
    {
        type:"item",
        title: "Software Development Intern",
        subHeading: "Phillip Futures Pte Ltd, Jun 2020 - Aug 2020",
        details: [
            "Revamped company’s internal website to ASP.NET Model-View-Controller (MVC) architecture (back end).",
            "Liaised with UX/UI designer to redesign company’s internal website (front end).",
            "Developed with C#, ASP.NET MVC, Bootstrap 4 and JQuery."
        ],
    },
    {
        type:"item",
        title: "Lab Teaching Assistant (CS2030)",
        subHeading: "National University of Singapore, Jan 2020 - May 2020",
        details: [
            "Taught concepts pertaining to object-oriented programming, lazy evaluation, streams, and asynchronous programming.",
            "Oversaw 20 student Java projects and reinforced coding standards.",
            "Attained a teaching score of 4.3/5.0 as compared to the department average of 4.1/5.0.",
            <Button variant="outlined" size={"small"} href="https://drive.google.com/file/d/17H0IXpy13IVA-VC-E3R3ivMc6FmKn-mP/view?usp=sharing" color={"inherit"} target={"_blank"}>
                View teaching report
            </Button>
        ]
    },
    {
        type: "year",
        year: 2020
    },
];