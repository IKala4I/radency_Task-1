import {fillTableWithActiveNotes} from './tableHandlers/fillTableWithActiveNotes.js'
import {data} from '../initialData.js'
import {fillSummaryTable} from './tableHandlers/fillSummaryTable.js'
import {renderPage} from './helpers/renderPage.js'
import {fillTableWithArchivedNotes} from './tableHandlers/fillTableWithArchivedNotes.js'

const activeNotesTable = document.querySelector('.active-notes')
const archivedNotesTable = document.querySelector('.archived-notes')
const summaryTable = document.querySelector('.summary-table')

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
    }
)

rerenderApp()