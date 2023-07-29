import {data} from '../../../initialData.js'
import {rerenderApp} from '../../index.js'

export const archive = (noteId) => {
    data.notes = data.notes.map(note => {
        if (note.id === noteId)
            return {
                ...note,
                archived: true
            }
        return note
    })
    rerenderApp()
}