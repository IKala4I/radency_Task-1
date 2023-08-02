export const setHandlerOnSubmitForm = (formBlock, addNoteBlock, noteAction, noteId = null) => {
    const form = document.querySelector('.form-block__form')
    form.onsubmit = (event) => {
        event.preventDefault()
        try {
            const data = new FormData(event.target)
            const dataObject = Object.fromEntries(data.entries())
            formBlock.style.display = 'none'
            addNoteBlock.style.display = 'flex'
            form.reset()
            noteAction(dataObject, noteId)
        } catch (error) {
            alert('Oops, something went wrong')
        }
    }
}