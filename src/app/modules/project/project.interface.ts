export type TTechnology = {
    value: string;
    label: string;
}


export type TProject = {
    name: string;
    category: string;
    description: string;
    technologies: TTechnology[];
    liveUrl: string;
    clientCode: string;
    serverCode: string
}