export interface Skill {
    name: string
    rating: number
}
export interface SkillCategory {
    data: Skill[]
    title: string
}

export interface SkillsQuery {
    all: {
        skills: {
            skillCategory: SkillCategory
        } []
    }
}