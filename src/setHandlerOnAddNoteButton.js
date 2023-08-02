import {showForm} from './formHandlers/showForm.js'
import {formTypes} from './helpers/formTypes.js'

export const setHandlerOnAddNoteButton = button => {
    button.addEventListener('click', () => {
        showForm(formTypes.createNoteForm)
    })
}