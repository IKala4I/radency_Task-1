import {noteCategories} from './helpers/noteCategories.js'

export const notes = [
    {
        id: 1,
        name: 'Dentist',
        created: 'April 20, 2021',
        category: noteCategories.TASK,
        content: 'I\'m gonna have a dentist appointment on the 22/4/2021, I moved it from 24/4/2021',
        dates: '20/4/2021',
        archived: false
    },
    {
        id: 2,
        name: 'The theory of evolution',
        created: 'April 27, 2021',
        category: noteCategories.RANDOM_THOUGHT,
        content: 'The evolution...',
        dates: null,
        archived: true
    },
    {
        id: 3,
        name: 'New Feature',
        created: 'May 05, 2021',
        category: noteCategories.IDEA,
        content: 'Implement new...',
        dates: '3/5/2021, 5/5/2021',
        archived: false
    },
    {
        id: 4,
        name: 'William Gaddis',
        created: 'May 07, 2021',
        category: noteCategories.QUOTE,
        content: 'Power doesn\'t co...',
        dates: null,
        archived: false
    }
]