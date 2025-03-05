import { ListItem } from "../types";

export const sortItems = (items: ListItem[], sortOrder: 'asc' | 'desc') => {
    return [...items].sort((a, b) => {
        // Compare titles first
        const titleComparison = a.title.localeCompare(b.title);

        // If titles are the same, compare descriptions
        if (titleComparison === 0) {
            const descA = a.description ?? '';
            const descB = b.description ?? '';
            const descriptionComparison = descA.localeCompare(descB);
            return sortOrder === 'asc' ? descriptionComparison : -descriptionComparison;
        }

        return sortOrder === 'asc' ? titleComparison : -titleComparison;
    });
};