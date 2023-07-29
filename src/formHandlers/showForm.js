import {data} from '../../../initialData.js'
import {rerenderApp} from '../../index.js'

export const showForm = (formType, noteId = null) => {
    const editBlock = document.querySelector('.edit-note-form')
    const closeButton = document.querySelector('.form-block__form__close-button')
    const nameInput = document.getElementById('name')

    const addNoteBlock = document.querySelector('.add-note')

    nameInput.placeholder = data.notes[noteId].name

    editBlock.style.display = 'block'
    addNoteBlock.style.display = 'none'

    closeButton.onclick = () => {
        editBlock.style.display = 'none'
        addNoteBlock.style.display = 'flex'
    }

    setHandlerOnSubmitForm(noteId, editBlock)
}

const setHandlerOnSubmitForm = (noteId, editBlock) => {
    const form = document.querySelector('.edit-note-form__form')
    form.onsubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const dataObject = Object.fromEntries(data.entries())
        editBlock.style.display = 'none'
        form.reset()
        updateNote(noteId, dataObject)
    }
}

const updateNote = (noteId, dataObject) => {
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