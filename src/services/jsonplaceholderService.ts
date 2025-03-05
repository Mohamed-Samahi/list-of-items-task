import axios from 'axios';

import { ListItem } from '../types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const jsonPlaceholderService = {
    fetchItems: async () => {
        const response = await axios.get<ListItem[]>(BASE_URL);
        return response.data;
    },

    createItem: async (item: ListItem) => {
        const response = await axios.post<ListItem>(BASE_URL, item);
        return response.data;
    },

    updateItem: async (item: ListItem) => {
        const response = await axios.put<ListItem>(`${BASE_URL}/${item.id}`, item);
        return response.data;
    },

    deleteItem: async (id: number) => {
        await axios.delete(`${BASE_URL}/${id}`);
        return id;
    }
};