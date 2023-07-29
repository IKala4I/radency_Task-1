import {fillTableWithActiveNotes} from './tableHandlers/fillTableWithActiveNotes.js'
import {data} from '../initialData.js'
import {fillSummaryTable} from './tableHandlers/fillSummaryTable.js'
import {renderPage} from './helpers/renderPage.js'
import {fillTableWithArchivedNotes} from './tableHandlers/fillTableWithArchivedNotes.js'
import {toggleVisibilityArchivedNotes} from './tableHandlers/toggleVisibilityArchivedNotes.js'

const activeNotesTable = document.querySelector('.table-active-notes')
const archivedNotesTable = document.querySelector('.table-archived-notes')
const summaryTable = document.querySelector('.summary-table')

const showArchivedNotesButton = document.querySelector('.show-archived-notes__button')

export const rerenderApp = (notes = data.notes) => renderPage({
        fillTableWithActiveNotes() {
            fillTableWithActiveNotes(notes.filter(note => !note.archived), activeNotesTable)
        },
        fillSummaryTable() {
            fillSummaryTable(notes, summaryTable)
        },
        fillTableWithArchivedNotes() {
            fillTableWithArchivedNotes(notes.filter(note => note.archived), archivedNotesTable)
        },
        setHandlerOnShowArchivedNotesButton() {
            toggleVisibilityArchivedNotes(showArchivedNotesButton)
        }
    }
)

rerenderApp()