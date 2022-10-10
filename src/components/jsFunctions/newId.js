export const newId = (prefix) => {
    return (prefix + Math.floor(Date.now() * Math.random()).toString(36));
}