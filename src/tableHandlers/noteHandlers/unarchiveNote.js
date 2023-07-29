import {data} from '../../../initialData.js'
import {rerenderApp} from '../../index.js'

export const unarchive = (noteId) => {
    data.notes = data.notes.map(note => {
        if (note.id === noteId)
            return {
                ...note,
                archived: false
            }
        return note
    })
    rerenderApp()
}