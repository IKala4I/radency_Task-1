export const updateObjectInArray = (items, itemId, objKey, newObjProps) => {
    return items.map(item => {
        if (item[objKey] === itemId)
            return {
                ...item,
                ...newObjProps
            }
        return item
    })
}