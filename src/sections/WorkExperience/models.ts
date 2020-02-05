export interface WorkExperienceItem {
    company: string
    title: string
    timespans: string[]
    url: string
    location: string
    description: string
}

export interface WorkExperienceQuery {
    all: {
        workExperiences: {
            node: WorkExperienceItem
        } []
    }
}