import {getTableHeader} from './getTableHeader.js'
import {tableTypes} from '../../helpers/tableTypes.js'
import {iconsPaths} from '../../helpers/iconPaths.js'

export const fillTableWithNotes = (notes, table) => {
    const tableHeader = getTableHeader(tableTypes.activeNotes)
    const tableRows = getTableRows(notes).join('')
    table.innerHTML = tableHeader + tableRows
}

const getTableRows = notes => {
    const tableRows = []

    notes.forEach(note => {
        const noteRow = createNoteRow(note)
        tableRows.push(noteRow)
    })

    return tableRows
}


const createNoteRow = note => {
    const dates = getDatesFromContent(note.content)

    return `<div class="table-row active-notes__table-row">
                <div class="table-icon">
                    <img class="table-icon__img" src='${iconsPaths.get(note.category)}' alt="cart">
                </div>
                <span class="note-name table-row__span">${note.name}</span>
                <span class="note-created table-row__span">${note.created}</span>
                <span class="note-category table-row__span">${note.category}</span>
                <span class="note-content table-row__span">${note.content}</span>
                <span class="note-dates table-row__span">${dates || ''}</span>
                <div class="tools table-row-tools">
                    <span class="table-row-tools__tool">
                        <a class="table-row-tools__tool__a">
                            <img class="table-row-tools__tool__img" src="../../images/tools/pencil-tool.svg" alt="edit">
                        </a>
                    </span>
                    <span class="table-row-tools__tool">
                        <a class="table-row-tools__tool__a">
                            <img class="table-row-tools__tool__img" src="../../images/tools/archive-tool-grey.svg"
                                 alt="archive">
                        </a>
                    </span>
                    <span class="table-row-tools__tool">
                        <a class="table-row-tools__tool__a">
                            <img class="table-row-tools__tool__img" src="../../images/tools/trash-tool-grey.svg"
                                 alt="trash">
                        </a>
                    </span>
                </div>
            </div>`
}

const getDatesFromContent = content => {
    const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g
    return content.match(dateRegex)
}