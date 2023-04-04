import { useState } from 'react'
import { useGetNfts } from './useGetNfts'

const dropdownItems = [
    { label: 'All Images', id: 'all' },
    { label: 'Sort: Newest', id: 'newest' },
    { label: 'Sort: Price', id: 'price' },
    { label: 'Sort: Popularity', id: 'popularity' },
    { label: 'Sort: Collection', id: 'collection' },
]

export type DropdownItems = typeof dropdownItems
export type DropdownItem = DropdownItems[number]

export const useDropdown = () => {
    const [selectedItem, setSelectedItem] = useState<DropdownItem>(
        dropdownItems[0]
    )
    const [isLoading, data, onGetByAddress] = useGetNfts()

    async function handleUpdateDropdownSelection(id: DropdownItem['id']) {
        const found = dropdownItems.find((item) => item.id === id)!
        setSelectedItem(found)
    }

    return [dropdownItems, selectedItem, handleUpdateDropdownSelection] as const
}
