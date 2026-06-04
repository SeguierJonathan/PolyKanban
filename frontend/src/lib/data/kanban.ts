export type Tag = {
    id: number,
    text: string,
    color: string,
    createdAt: string,
    updatedAt: string,
}

export type Card = {
    id: number,
    position: number,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    tags: Tag[]
}

export type List = {
    id: number,
    position: number,
    title: string,
    createdAt: string,
    updatedAt: string,
    cards: Card[]
}

export type Board = {
    lists: List[]
}