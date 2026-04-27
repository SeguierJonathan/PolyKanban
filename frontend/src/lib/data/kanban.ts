type Tag = {
    id: number,
    text: string,
    color: string
}

type Card = {
    id: number,
    title: string,
    text: string,
    tags: Tag[]
}

type List = {
    id: number,
    title: string,
    cards: Card[]
}

type Kanban = {
    lists: List[]
}

export const kanbanData: Kanban = {
    lists: [
        {
            id: 1,
            title: "A faire",
            cards: [
                {
                    id: 1,
                    title: "etiquette 1",
                    text: "je suis la premiere etiquette",
                    tags: [
                        { id: 1, text: "Urgent", color: "#FF0000" },
                        { id: 2, text: "test", color: "#FF5500" },
                        { id: 3, text: "Valid", color: "#00FF00" }
                    ]
                },
                {
                    id: 2,
                    title: "etiquette 5",
                    text: "je suis la deuxieme etiquette",
                    tags: []
                },
                {
                    id: 3,
                    title: "etiquette 3",
                    text: "je suis la troisieme etiquette",
                    tags: [
                        { id: 1, text: "Urgent", color: "#FF0000" },
                        { id: 2, text: "test", color: "#FF5500" },
                        { id: 3, text: "Valid", color: "#00FF00" }
                    ]

                },
                {
                    id: 4,
                    title: "etiquette 4",
                    text: "je suis la quatrieme etiquette",
                    tags: []
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
                    text: "je suis la premiere etiquette",
                    tags: []
                },
                {
                    id: 2,
                    title: "etiquette 5",
                    text: "je suis la deuxieme etiquette",
                    tags: []
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
                    text: "je suis la premiere etiquette",
                    tags: [
                        { id: 1, text: "Urgent", color: "#FF0000" },
                        { id: 2, text: "test", color: "#FF5500" },
                        { id: 3, text: "Valid", color: "#00FF00" }
                    ]
                },

            ]
        }

    ]
}
