import {tableTypes} from '../../helpers/tableTypes.js'

export const getTableHeader = typeTable => {
    switch (typeTable) {
        case tableTypes.activeNotes:
            return `<div class="table-header active-notes__table-header active-notes__table-row">
                <div class="table-icon"></div>
                <h4 class="column-header">Name</h4>
                <h4 class="column-header">Created</h4>
                <h4 class="column-header">Category</h4>
                <h4 class="column-header">Content</h4>
                <h4 class="column-header">Dates</h4>
                <div class="tools table-header-tools">
                    <span class="table-header-tools__tool">
                        <img class="table-header-tools__tool__img" src="../../images/tools/archive-tool-white.svg"
                             alt="archive">
                    </span>
                    <span class="table-header-tools__tool">
                        <img class="table-header-tools__tool__img" src="../../images/tools/trash-tool-white.svg" alt="bin">
                    </span>
                </div>
            </div>`
        default:
            return `<div></div>`
    }
}