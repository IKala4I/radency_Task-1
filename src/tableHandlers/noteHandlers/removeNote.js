import {data} from '../../../initialData.js'
import {renderApp} from '../../index.js'
import {toggleEditMode} from './toggleEditMode.js'

export const remove = noteId => {
    toggleEditMode(noteId)
    data.notes = data.notes.filter(note => note.id !== noteId)
    renderApp()
}