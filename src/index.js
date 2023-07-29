import {fillTableWithNotes} from './tableHandlers/fillTableWithNotes.js'
import {data} from '../initialData.js'
import {fillSummaryTable} from './tableHandlers/fillSummaryTable.js'
import {renderPage} from './helpers/renderPage.js'

const activeNotesTable = document.querySelector('.active-notes')
const summaryTable = document.querySelector('.summary-table')

export const rerenderApp = (notes = data.notes) => renderPage({
        fillTableWithNotes() {
            fillTableWithNotes(notes.filter(note => !note.archived), activeNotesTable)
        },
        fillSummaryTable() {
            fillSummaryTable(notes, summaryTable)
        }
    }
)

rerenderApp()