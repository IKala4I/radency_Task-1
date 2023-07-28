import {noteCategories} from './helpers/noteCategories.js'

export const notes = [
    {
        id: 1,
        name: 'Shopping list',
        created: 'April 20, 2021',
        category: noteCategories.TASK,
        content: 'Tomatoes, bread',
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