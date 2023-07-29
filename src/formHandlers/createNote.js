import {data} from '../../initialData.js'
import {rerenderApp} from '../index.js'

export const createNote = dataObject => {
    data.notes = [...data.notes, {
        ...dataObject,
        id: data.notes.length,
        created: createTodayDate(),
        archived: false
    }]
    rerenderApp()
}

const createTodayDate = () => {
    const today = new Date()

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    const month = months[today.getMonth()] // Отримуємо назву місяця з масиву
    const day = today.getDate() // Отримуємо число місяця
    const year = today.getFullYear() // Отримуємо рік

    return `${month} ${day}, ${year}`
}