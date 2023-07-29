export const renderPage = (actions) => {
    Object.values(actions).forEach(action => action())
}