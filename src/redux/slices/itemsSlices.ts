import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
    fetchItemsAction,
    createItemAction,
    updateItemAction,
    deleteItemAction
} from '../actions/itemsActions';

import { ItemsState, ListItem } from '../../types';

const initialState: ItemsState = {
    items: [],
    loading: {
        fetching: false,
        creating: false,
        updating: false,
        deleting: false
    },
    error: null
};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        // Add a reducer to directly update an item in the state
        updateLocalItem: (state, action: PayloadAction<ListItem>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = {
                    ...state.items[index],
                    ...action.payload
                };
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItemsAction.pending, (state) => {
            state.loading.fetching = true;
            state.error = null;
        });
        builder.addCase(fetchItemsAction.fulfilled, (state, action) => {
            state.loading.fetching = false;
            // Sort items in descending order based on ID to show the newest first
            state.items = action.payload.sort((a, b) => (b.id || 0) - (a.id || 0));
        });
        builder.addCase(fetchItemsAction.rejected, (state, action) => {
            state.loading.fetching = false;
            state.error = action.error.message || 'Failed to fetch items';
        });

        builder.addCase(createItemAction.pending, (state) => {
            state.loading.creating = true;
        });
        builder.addCase(createItemAction.fulfilled, (state, action) => {
            state.loading.creating = false;
            // Used unshift function to Add new item to the beginning of the list
            state.items.unshift({
                ...action.payload,
                id: state.items.length + 1 // Generate a unique ID that is the length of the items array + 1
            });
        });
        builder.addCase(createItemAction.rejected, (state, action) => {
            state.loading.creating = false;
            state.error = action.error.message || 'Failed to create item';
        });

        builder.addCase(updateItemAction.pending, (state) => {
            state.loading.updating = true;
        });
        builder.addCase(updateItemAction.fulfilled, (state, action) => {
            state.loading.updating = false;
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        });
        builder.addCase(updateItemAction.rejected, (state, action) => {
            state.loading.updating = false;
            state.error = action.error.message || 'Failed to update item';
        });

        builder.addCase(deleteItemAction.pending, (state) => {
            state.loading.deleting = true;
        });
        builder.addCase(deleteItemAction.fulfilled, (state, action) => {
            state.loading.deleting = false;
            state.items = state.items.filter(item => item.id !== action.payload);
        });
        builder.addCase(deleteItemAction.rejected, (state, action) => {
            state.loading.deleting = false;
            state.error = action.error.message || 'Failed to delete item';
        });
    }
});

export const { updateLocalItem } = itemsSlice.actions;

export default itemsSlice.reducer;