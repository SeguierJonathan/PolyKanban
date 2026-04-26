type Card = {
    id: number,
    title: string,
    text: string
}

type List = {
    id: number,
    title: string,
    cards: Card[]
}

type Kanban = {
    Lists: List[]
}

export const kanbanData: Kanban = {
    Lists: [
        {
            id: 1,
            title: "A faire",
            cards: [
                {
                    id: 1,
                    title: "etiquette 1",
                    text: "je suis la premiere etiquette"
                },
                {
                    id: 2,
                    title: "etiquette 5",
                    text: "je suis la deuxieme etiquette"
                },
                {
                    id: 3,
                    title: "etiquette 3",
                    text: "je suis la troisieme etiquette"
                },
                {
                    id: 4,
                    title: "etiquette 4",
                    text: "je suis la quatrieme etiquette"
                }
            ]
        },
        {
            id: 2,
            title: "En cours",
            cards: [
                {
                    id: 1,
                    title: "etiquette 1",
                    text: "je suis la premiere etiquette"
                },
                {
                    id: 2,
                    title: "etiquette 5",
                    text: "je suis la deuxieme etiquette"
                },
            ]
        },
        {
            id: 3,
            title: "Fini",
            cards: [
                {
                    id: 1,
                    title: "etiquette 1",
                    text: "je suis la premiere etiquette"
                },

            ]
        }

    ]
}
