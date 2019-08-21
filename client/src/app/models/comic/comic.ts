export interface Comic {
    comic?: {
        id?: string,
        title?: string,
        description?: string,
        img?: string
    }
    characters?: [
        {
            id?: string,
            nombre?: string,
            img?: string
        }
    ]

}