
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface ISortableTaskItemProps {
    children: React.ReactNode,
    id: string
}

const SortableTaskItem: React.FC<ISortableTaskItemProps> = ( {children, id }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging? 0 : 1
    }
    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {
                children
            }
        </div>
    );
}

export default SortableTaskItem;