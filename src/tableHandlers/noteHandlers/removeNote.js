import {data} from '../../../initialData.js'
import {rerenderApp} from '../../index.js'

export const remove = (noteId) => {
    data.notes = data.notes.filter(note => note.id !== noteId)
    rerenderApp()
}