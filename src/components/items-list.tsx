import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchItemsAction } from '../redux/actions/itemsActions';

import ListItem from './list-item';

import { ListItem as ListItemType } from '../types';

const ItemsList: React.FC = () => {
    const dispatch = useAppDispatch();
    const { items, loading } = useAppSelector(state => state.items);

    useEffect(() => {
        dispatch(fetchItemsAction());
    }, [dispatch]);

    if (loading.fetching) return <div className='text-lg font-semibold text-Brand-700'>Loading items...</div>;

    return (
        <div className="flex flex-col items-start w-full h-full gap-4 overflow-y-auto">
            {items?.length === 0 ? (
                <div className="w-full text-lg text-left text-Gray-600">
                    No items found.
                </div>
            ) : (
                items?.map((item: ListItemType) => (
                    <ListItem
                        key={item.id}
                        id={item.id!}
                        title={item.title}
                        description={item.body}
                    />
                ))
            )}
        </div>
    );
};

export default ItemsList;