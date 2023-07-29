import {data} from '../../../initialData.js'
import {rerenderApp} from '../../index.js'
import {updateObjectInArray} from '../../helpers/updateObjectInArray.js'

export const archive = (noteId) => {
    data.notes = updateObjectInArray(data.notes, noteId, 'id', {archived: true})
    rerenderApp()
}