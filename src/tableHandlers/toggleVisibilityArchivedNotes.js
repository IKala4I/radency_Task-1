export const toggleVisibilityArchivedNotes = button => {
    debugger
    const notes = document.querySelector('.archived-notes')
    button.onclick = () => toggleArchived(button, notes)
}

const toggleArchived = (button, notes) => {
    debugger
    if (notes.style.display === 'block') {
        notes.style.display = 'none'
        button.textContent = 'Show archived notes'
    } else {
        notes.style.display = 'block'
        button.textContent = 'Hide archived notes'
    }
}