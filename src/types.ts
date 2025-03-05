export type ListItem = {
    id?: number;
    title: string;
    description?: string;
    body?: string;
}


export interface ItemsState {
    items: ListItem[];
    loading: {
        fetching: boolean;
        creating: boolean;
        updating: boolean;
        deleting: boolean;
    };
    error: string | null;
}