import {data} from '../../initialData.js'
import {rerenderApp} from '../index.js'

export const setHandlerOnSubmitEditForm = (editBlock, addNoteBlock, noteId) => {
    const form = document.querySelector('.form-block__form')
    form.onsubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const dataObject = Object.fromEntries(data.entries())
        editBlock.style.display = 'none'
        addNoteBlock.style.display = 'flex'
        form.reset()
        updateNote(dataObject, noteId)
    }
}
const updateNote = (dataObject, noteId) => {
    const filteredDataObject = Object
        .entries(dataObject)
        .reduce((acc, [key, value]) => {
            if (value)
                acc[key] = value
            else {
                acc[key] = data.notes[noteId][key]
            }
            return acc
        }, {})

    data.notes = data.notes.map(note => {
        if (note.id === noteId)
            return {
                ...note,
                ...filteredDataObject
            }
        return note
    })
    rerenderApp()
}