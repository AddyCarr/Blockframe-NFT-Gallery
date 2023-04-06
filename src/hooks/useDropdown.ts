import { useState } from 'react'

const dropdownItems = [
    { label: 'Sort: Newest', id: 'newest' },
    { label: 'Sort: Oldest', id: 'oldest' },
] as const

export type Filters = (typeof dropdownItems)[number]['id']
export type DropdownItems = typeof dropdownItems
export type DropdownItem = DropdownItems[number]

export const useDropdown = () => {
    const [selectedItem, setSelectedItem] = useState<DropdownItem>(
        dropdownItems[0]
    )

    async function handleUpdateDropdownSelection(id: DropdownItem['id']) {
        const found = dropdownItems.find((item) => item.id === id)!
        setSelectedItem(found)
    }

    return [dropdownItems, selectedItem, handleUpdateDropdownSelection] as const
}
