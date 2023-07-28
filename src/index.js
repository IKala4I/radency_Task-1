import {fillTableWithNotes} from './tableHandlers/fillTableWithNotes.js'
import {notes} from '../initialData.js'

const activeNotes = notes.filter(note => !note.archived)
const activeNotesTable = document.querySelector('.active-notes')

fillTableWithNotes(activeNotes, activeNotesTable)