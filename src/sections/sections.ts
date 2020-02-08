import About from "./About";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills"

export interface Section {
    SectionElement: React.ReactType
    displayText: string
    anchor: string
}

export const sections:Section[] = [
    {
        SectionElement: About,
        displayText: "About",
        anchor: "about"
    },
    {
        SectionElement: WorkExperience,
        displayText: "Experience",
        anchor: "experience"
    },
    {
        SectionElement: Skills,
        displayText: "Skills",
        anchor: "skills"
    }
]

export default sections;