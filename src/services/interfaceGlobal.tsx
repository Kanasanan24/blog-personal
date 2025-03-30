export interface IFTheme {
    theme: "Light" | "Dark",
    setTheme: React.Dispatch<React.SetStateAction<"Light" | "Dark">>
}

export interface IFBlog {
    slug: string,
    categories: string[],
    blog_image: string,
    created_at: string,
    title: string,
    description: string,
    author_image: string,
    author_name: string
}