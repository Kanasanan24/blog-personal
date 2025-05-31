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
            "evaluation-method",
            "data-visualization&information-architechture",
            "hypothesis-testing",
            "social-interaction",
            "future-directions-in-hci"
        ]
    },
    {
        category: "Web Developer",
        slugs: [
            "initial-project-typescript"
        ]
    }
];