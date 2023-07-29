import {data} from '../../../initialData.js'
import {formTypes} from '../../../helpers/formTypes.js'

export const toggleEditMode = noteId => {
    const editFormSelector = `.${formTypes.editNoteForm}`
    const form = document.querySelector(editFormSelector)
    if (form) {
        const formBlock = document.querySelector('.form-block')
        const nameInput = document.getElementById('name')
        if (nameInput.placeholder === data.notes[noteId].name)
            formBlock.style.display = 'none'
    }
}