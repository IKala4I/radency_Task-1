import {noteCategories} from './helpers/noteCategories.js'

export const data={
    notes: [
        {
            id: 1,
            name: 'Dentist',
            created: 'April 20, 2021',
            category: noteCategories.TASK,
            content: 'I\'m gonna have a dentist appointment on the 22/4/2021, I moved it from 24/4/2021',
            archived: false
        },
        {
            id: 2,
            name: 'The theory of evolution',
            created: 'April 27, 2021',
            category: noteCategories.RANDOM_THOUGHT,
            content: 'The evolution...',
            archived: true
        },
        {
            id: 3,
            name: 'New Feature',
            created: 'May 05, 2021',
            category: noteCategories.IDEA,
            content: 'Implement new feature till 10/6/2021 ',
            archived: false
        },
        {
            id: 4,
            name: 'William Gaddis',
            created: 'May 07, 2021',
            category: noteCategories.QUOTE,
            content: 'Power doesn\'t co...',
            archived: false
        }
    ]
}