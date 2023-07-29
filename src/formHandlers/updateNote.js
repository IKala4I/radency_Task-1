import {data} from '../../initialData.js'
import {rerenderApp} from '../index.js'

export const updateNote = (dataObject, noteId) => {
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