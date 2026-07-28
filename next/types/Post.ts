type Post = {
    id: string
    title: string
    date?: string
    description: string
    body?: HTMLElement | string
    slug: string,
    likes?: number,
    comments?: Comments[],
    user: User,
}