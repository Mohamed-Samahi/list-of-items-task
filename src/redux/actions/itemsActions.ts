import { createAsyncThunk } from '@reduxjs/toolkit';

import { jsonPlaceholderService } from '../../services/jsonplaceholderService';

import { ListItem } from '../../types';
import { updateLocalItem } from '../slices/itemsSlices';

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
    async (item: ListItem, { dispatch }) => {
        try {
            // Try to update via API
            const response = await jsonPlaceholderService.updateItem(item);
            return response;
        } catch (error) {
            // If update fails (e.g., item doesn't exist on server)
            // Update locally in Redux state
            dispatch(updateLocalItem(item));
            return item;
        }
    }
);

export const deleteItemAction = createAsyncThunk(
    'items/deleteItem',
    async (id: number) => {
        return await jsonPlaceholderService.deleteItem(id);
    }
);