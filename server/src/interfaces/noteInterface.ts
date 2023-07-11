export interface INote {
    title: string;
    content: string | Buffer;
    date: Date;
    user: string;
}
