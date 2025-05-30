export interface IFCategoryDetail {
    category: string,
    slugs: string[]
}

export const categories = [
    "Human Computer Interaction",
    "Web Developer"
];

export const categorie_details:IFCategoryDetail[] = [
    {
        category: "Human Computer Interaction",
        slugs: [
            "introduction-hci",
            "cognitive-foundation",
            "user-center-design",
            "user-experiences",
            "interaction-design-basic",
            "prototyping",
            "extended-reality",
            "evaluation-method"
        ]
    },
    {
        category: "Web Developer",
        slugs: [
            "initial-project-typescript"
        ]
    }
];