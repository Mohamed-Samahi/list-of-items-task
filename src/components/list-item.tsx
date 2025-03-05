import React, { useCallback, useMemo } from "react";

import { useModal } from "../context/ModalContext";

import ItemModal from "./modals/item-modal";
import DeleteItemModal from "./modals/delete-item-modal";

import Button from "./ui/button";

import { Calender, Edit, Item, Trash } from "./icons";

interface ListItemProps {
    id: string;
    title: string;
    description?: string;
}

const ListItem: React.FC<ListItemProps> = ({ id, title, description }) => {
    const { openModal } = useModal();

    const handleOpenItemModal = useCallback(() => {
        openModal(
            <ItemModal
                title={title}
                description={description}
                isUpdateModal={true}
            />
        );
    }, [id]);

    const handleDeleteListItem = useCallback(() => {
        openModal(
            <DeleteItemModal
                itemId={id}
                itemTitle={title}
            />
        );
    }, [id]);

    const todaysFormatedDate = useMemo(() => {
        return `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;
    }, [id])

    return (
        <div className="flex items-start w-full gap-3 p-5 overflow-hidden shadow bg-gray-50/95 rounded-xl min-h-fit">
            <Item />
            <div className='flex flex-col items-start justify-between w-full overflow-hidden'>
                <h3 className={`text-lg md:text-xl lg:text-2xl xl:text-3xl text-Brand-700 font-semibold block truncate transition-all`}>
                    {title}
                </h3>
                <p className="truncate xl:text-lg text-Gray-600">
                    {description ?? <>No description!</>}
                </p>
                <div className={`flex flex-row items-center flex-wrap gap-2 transition-all mt-1`}>
                    <span className='flex items-center gap-2 w-fit pr-2 py-[0.125rem] rounded-full text-xs font-medium whitespace-nowrap'>
                        <Calender />
                        {todaysFormatedDate}
                    </span>
                </div>
            </div>
            <div className='flex items-center justify-end gap-1 ml-auto w-fit sm:gap-3'>
                <Button
                    onClick={handleOpenItemModal}
                    className="w-fit !p-2 !bg-transparent"
                >
                    <Edit />
                </Button>
                <Button
                    onClick={handleDeleteListItem}
                    className="w-fit !p-2 !bg-transparent !border-[#b91c1c]"
                >
                    <Trash stroke="#b91c1c" />
                </Button>
            </div>
        </div>
    )
}

export default React.memo(ListItem);