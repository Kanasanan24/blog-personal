export const parseCategory = (category:string) => {
    return category.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export const reverseCategory = (category:string) => {
    return category.toLowerCase().replace(/ /g, "-");
}