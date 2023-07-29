import {formTypes} from '../../helpers/formTypes.js'

export const createFormHTML = formType => {
    const isEditForm = formType === formTypes.editNoteForm

    return `<div class="form-block ${formType}">
                <form action="#" class="form-block__form ${formType}__form">
                    <div class="form-block__form__field name-block">
                        <label for="name">${isEditForm ? 'Name: (Optional)' : 'Name:'}</label>
                        <input class="form-block__form__field__item" id="name" name="name" pattern=".{3,}|^$"
                        ${isEditForm ? '' : 'required'}>
                    </div>
                    <div class="form-block__form__field category-block">
                        <label for="category">Category:</label>
                        <input class="form-block__form__field__item" list="category-list" id="category" name="category"
                               placeholder="Choose a category"
                               required>
                        <datalist id="category-list">
                            <option value="Task"></option>
                            <option value="Idea"></option>
                            <option value="Quote"></option>
                            <option value="Random Thought"></option>
                        </datalist>
                    </div>
                    <div class="form-block__form__field content-block">
                        <label for="content">${isEditForm ? 'Content: (Optional)' : 'Content:'}</label>
                        <textarea class="form-block__form__field__item" id="content" name="content" ${isEditForm ? '' : 'required'}></textarea>
                    </div>
                    <div class="buttons">
                        <button class="action__button" type="submit">Save</button>
                        <button class="action__button form-block__form__close-button">Close</button>
                    </div>
                </form>
            </div>`
}