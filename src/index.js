import {fillTableWithNotes} from './tableHandlers/fillTableWithNotes.js'
import {notes} from '../initialData.js'
import {fillSummaryTable} from './tableHandlers/fillSummaryTable.js'
import {renderPage} from './helpers/renderPage.js'

const activeNotes = notes.filter(note => !note.archived)
const activeNotesTable = document.querySelector('.active-notes')

const summaryTable = document.querySelector('.summary-table')

renderPage({
        fillTableWithNotes() {
            fillTableWithNotes(activeNotes, activeNotesTable)
        },
        fillSummaryTable() {
            fillSummaryTable(notes, summaryTable)
        }
    }
)