import {getTableHeaderHTML} from './getTableHeaderHTML.js'
import {tableTypes} from '../../helpers/tableTypes.js'
import {iconsPaths} from '../../helpers/iconPaths.js'
import {archive} from './noteHandlers/archiveNote.js'
import {unarchive} from './noteHandlers/unarchiveNote.js'
import {remove} from './noteHandlers/removeNote.js'
import {showEditForm} from './noteHandlers/editNote.js'

export const fillTableWithNotes = (notes, table, tableType) => {
    debugger
    const tableHeader = getTableHeaderHTML(tableType)
    const tableRows = getTableRowsNodes(notes, tableType)

    table.innerHTML = tableHeader
    tableRows.forEach(row => table.appendChild(row))
}

const getTableRowsNodes = (notes, tableType) => {
    const tableRows = []

    notes.forEach(note => {
        const noteRow = createNoteRow(note, tableType)
        setEventListeners(note.id, noteRow, tableType)
        tableRows.push(noteRow)
    })

    return tableRows
}


const createNoteRow = (note, tableType) => {
    const dates = getDatesFromContent(note.content)

    const isActiveNotes = tableType === tableTypes.activeNotes

    const div = document.createElement('div');
    div.className = `table-row ${tableType}__table-row`;

    div.innerHTML = `<div class="table-icon">
                    <img class="table-icon__img" src='${iconsPaths.get(note.category)}' alt="cart">
                </div>
                <span class="note-name table-row__span">${note.name}</span>
                <span class="note-created table-row__span">${note.created}</span>
                <span class="note-category table-row__span">${note.category}</span>
                <span class="note-content table-row__span">${note.content}</span>
                <span class="note-dates table-row__span">${dates || ''}</span>
                <div class="tools table-row-tools">
                ${isActiveNotes ? `<span class="table-row-tools__tool">
                        <a class="table-row-tools__tool__a edit">
                            <img class="table-row-tools__tool__img" src="../../images/tools/pencil-tool.svg" alt="edit">
                        </a>
                    </span>` : ''}
                    <span class="table-row-tools__tool">
                        <a class="table-row-tools__tool__a ${isActiveNotes ? 'archive' : 'unarchive'}">
                            <img class="table-row-tools__tool__img" src="../../images/tools/${isActiveNotes ? 'archive' : 'unarchive'}-tool-grey.svg"
                                 alt="${isActiveNotes ? 'archive' : 'unarchive'}">
                        </a>
                    </span>
                    <span class="table-row-tools__tool">
                        <a class="table-row-tools__tool__a remove">
                            <img class="table-row-tools__tool__img" src="../../images/tools/trash-tool-grey.svg"
                                 alt="trash">
                        </a>
                    </span>
                </div>`
    return div
}

const getDatesFromContent = content => {
    const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g
    return content.match(dateRegex)?.join(', ')
}

const setEventListeners = (noteId, div, tableType) => {
    if (tableType === tableTypes.activeNotes) {
        const archiveButton = div.querySelector('.archive')
        archiveButton.addEventListener('click', () => {
            archive(noteId)
        })

        const editButton = div.querySelector('.edit')
        editButton.addEventListener('click', () => {
            showEditForm(noteId, editButton)
        })
    } else {
        const unarchiveButton = div.querySelector('.unarchive')
        unarchiveButton.addEventListener('click', () => {
            unarchive(noteId)
        })
    }

    const removeButton = div.querySelector('.remove')
    removeButton.addEventListener('click', () => {
        remove(noteId)
    })
}