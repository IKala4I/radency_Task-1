import {data} from '../initialData.js'
import {fillSummaryTable} from './tableHandlers/fillSummaryTable.js'
import {renderPage} from './helpers/renderPage.js'
import {toggleVisibilityArchivedNotes} from './tableHandlers/toggleVisibilityArchivedNotes.js'
import {fillTableWithNotes} from './tableHandlers/fillTableWithNotes.js'
import {tableTypes} from '../helpers/tableTypes.js'
import {setHandlerOnAddNoteButton} from './setHandlerOnAddNoteButton.js'

const activeNotesTable = document.querySelector('.table-active-notes')
const archivedNotesTable = document.querySelector('.table-archived-notes')
const summaryTable = document.querySelector('.summary-table')

const showArchivedNotesButton = document.querySelector('.show-archived-notes__button')
const addNoteButton = document.querySelector('.add-note__button')

export const rerenderApp = (notes = data.notes) => renderPage({
        fillTableWithActiveNotes() {
            fillTableWithNotes(notes.filter(note => !note.archived), activeNotesTable, tableTypes.activeNotes)
        },
        fillSummaryTable() {
            fillSummaryTable(notes, summaryTable)
        },
        fillTableWithArchivedNotes() {
            fillTableWithNotes(notes.filter(note => note.archived), archivedNotesTable, tableTypes.archivedNotes)
        },
        setHandlerOnShowArchivedNotesButton() {
            toggleVisibilityArchivedNotes(showArchivedNotesButton)
        },
        setHandlerOnAddNoteButton() {
            setHandlerOnAddNoteButton(addNoteButton)
        }
    }
)

rerenderApp()