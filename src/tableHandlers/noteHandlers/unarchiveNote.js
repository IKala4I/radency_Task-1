import {data} from '../../../initialData.js'
import {rerenderApp} from '../../index.js'
import {updateObjectInArray} from './updateObjectInArray.js'

export const unarchive = (noteId) => {
    data.notes = updateObjectInArray(data.notes, noteId, 'id', {archived: false})
    rerenderApp()
}