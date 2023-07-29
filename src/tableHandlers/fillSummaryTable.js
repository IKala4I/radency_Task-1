import {getTableHeaderHTML} from './getTableHeaderHTML.js'
import {tableTypes} from '../../helpers/tableTypes.js'
import {iconsPaths} from '../../helpers/iconPaths.js'
import {noteCategories} from '../../helpers/noteCategories.js'

export const fillSummaryTable = (notes, table) => {
    const tableHeader = getTableHeaderHTML(tableTypes.summary)
    const tableRows = getTableRows(notes).join('')
    table.innerHTML = tableHeader + tableRows
}

const getTableRows = notes => {
    const tableRows = []

    Object.values(noteCategories).forEach(category => {
        const filteredNotes = notes.filter(note => note.category === category)
        const activeNotesCount = filteredNotes.filter(note => !note.archived).length
        const archivedNotesCount = filteredNotes.filter(note => note.archived).length
        const summaryRow = createSummaryRow(category, activeNotesCount, archivedNotesCount)
        tableRows.push(summaryRow)
    })

    return tableRows
}


const createSummaryRow = (category, activeNotesCount, archivedNotesCount) => {
    return `<div class="table-row summary-table__table-row">
                <div class="table-icon">
                    <img class="table-icon__img" src='${iconsPaths.get(category)}' alt="cart">
                </div>
                <span class="note-category table-row__span">${category}</span>
                <span class="count-active-notes table-row__span">${activeNotesCount}</span>
                <span class="count-archived-notes table-row__span">${archivedNotesCount}</span>
            </div>`
}
