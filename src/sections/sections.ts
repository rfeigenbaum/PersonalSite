import About from "./About";
import WorkExperience from "./WorkExperience";

export interface Section {
    SectionElement: React.ReactNode
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
    }
]

export default sections;