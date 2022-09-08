export let updateObjectInArray = (items, itemId, objPropName, newObjPropName) => {
    return items.map(u => {
        if (u[objPropName] === items) {
            return {...u, ...newObjPropName}
        }
        return u;
    })
}