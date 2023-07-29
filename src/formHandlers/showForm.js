import {createFormHTML} from './createFormHTML.js'
import {formTypes} from '../../helpers/formTypes.js'
import {data} from '../../initialData.js'
import {setHandlerOnSubmitForm} from './setHandlerOnSubmitForm.js'
import {createNote} from './createNote.js'
import {updateNote} from './updateNote.js'

export const showForm = (formType, noteId = null) => {
    const formBlock = document.querySelector('.form-block')
    formBlock.innerHTML = createFormHTML(formType)

    const closeButton = document.querySelector('.form-block__form__close-button')
    const addNoteBlock = document.querySelector('.add-note')

    formBlock.style.display = 'block'
    addNoteBlock.style.display = 'none'

    closeButton.onclick = () => {
        formBlock.style.display = 'none'
        addNoteBlock.style.display = 'flex'
    }

    switch (formType) {
        case formTypes.editNoteForm:
            setHandlerOnSubmitForm(formBlock, addNoteBlock, updateNote, noteId)
            const nameInput = document.getElementById('name')
            nameInput.placeholder = data.notes[noteId].name
            break;
        case formTypes.createNoteForm:
            setHandlerOnSubmitForm(formBlock, addNoteBlock, createNote)
            break;
    }
}