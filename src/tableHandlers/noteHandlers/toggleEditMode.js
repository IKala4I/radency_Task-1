import {data} from '../../../initialData.js'

export const toggleEditMode = noteId => {
    const editBlock = document.querySelector('.edit-note-form')
    const nameInput = document.getElementById('name')
    if (editBlock.style.display === 'block' && nameInput.placeholder === data.notes[noteId].name)
        editBlock.style.display = 'none'
}