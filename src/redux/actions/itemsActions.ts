import { createAsyncThunk } from '@reduxjs/toolkit';

import { jsonPlaceholderService } from '../../services/jsonplaceholderService';

import { ListItem } from '../../types';

export const fetchItemsAction = createAsyncThunk(
    'items/fetchItems',
    async () => {
        return await jsonPlaceholderService.fetchItems();
    }
);

export const createItemAction = createAsyncThunk(
    'items/createItem',
    async (item: ListItem) => {
        return await jsonPlaceholderService.createItem(item);
    }
);

export const updateItemAction = createAsyncThunk(
    'items/updateItem',
    async (item: ListItem) => {
        return await jsonPlaceholderService.updateItem(item);
    }
);

export const deleteItemAction = createAsyncThunk(
    'items/deleteItem',
    async (id: number) => {
        return await jsonPlaceholderService.deleteItem(id);
    }
);