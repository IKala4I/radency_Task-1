import {getTableHeaderHTML} from './getTableHeaderHTML.js'
import {tableTypes} from '../../helpers/tableTypes.js'
import {iconsPaths} from '../../helpers/iconPaths.js'
import {unarchive} from './noteHandlers/unarchiveNote.js'

export const fillTableWithArchivedNotes = (notes, table) => {
    const tableHeader = getTableHeaderHTML(tableTypes.archivedNotes)
    const tableRows = getTableRowsNodes(notes)

    table.innerHTML = tableHeader
    tableRows.forEach(row => table.appendChild(row))
}

const getTableRowsNodes = notes => {
    const tableRows = []

    notes.forEach(note => {
        const noteRow = createNoteRow(note)
        tableRows.push(noteRow)
    })

    return tableRows
}


const createNoteRow = note => {
    const dates = getDatesFromContent(note.content)

    const div = document.createElement('div');
    div.className = 'table-row archived-notes__table-row';

    const content = `<div class="table-icon">
                    <img class="table-icon__img" src='${iconsPaths.get(note.category)}' alt="cart">
                </div>
                <span class="note-name table-row__span">${note.name}</span>
                <span class="note-created table-row__span">${note.created}</span>
                <span class="note-category table-row__span">${note.category}</span>
                <span class="note-content table-row__span">${note.content}</span>
                <span class="note-dates table-row__span">${dates || ''}</span>
                <div class="tools table-row-tools">
                    <span class="table-row-tools__tool">
                        <a class="table-row-tools__tool__a unarchive">
                            <img class="table-row-tools__tool__img" src="../../images/tools/unarchive-tool-grey.svg"
                                 alt="archive">
                        </a>
                    </span>
                    <span class="table-row-tools__tool">
                        <a class="table-row-tools__tool__a delete">
                            <img class="table-row-tools__tool__img" src="../../images/tools/trash-tool-grey.svg"
                                 alt="trash">
                        </a>
                    </span>
                </div>`

    div.innerHTML = content

    const unarchiveButton = div.querySelector('.unarchive')
    unarchiveButton.addEventListener('click', () => {
        unarchive(note.id)
    })

    return div
}

const getDatesFromContent = content => {
    const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g
    return content.match(dateRegex)?.join(', ')
}