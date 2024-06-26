export type BookDTO = {
    title: string;
    url: string;
    detail: string;
    review: string;
};

export type Book = {
    id: string;
    title: string;
    url: string;
    detail: string;
    review: string;
    reviewer: string;
    isMine: boolean;
};
