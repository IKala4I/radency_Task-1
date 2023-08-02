import {noteCategories} from './src/helpers/noteCategories.js'

export const data={
    notes: [
        {
            id: 0,
            name: 'Dentist',
            created: 'April 20, 2021',
            category: noteCategories.TASK,
            content: 'I\'m gonna have a dentist appointment on the 22/4/2021, I moved it from 24/4/2021',
            archived: false
        },
        {
            id: 1,
            name: 'The theory of evolution',
            created: 'April 27, 2021',
            category: noteCategories.RANDOM_THOUGHT,
            content: 'The evolution...',
            archived: true
        },
        {
            id: 2,
            name: 'New Feature',
            created: 'May 05, 2021',
            category: noteCategories.IDEA,
            content: 'Implement new feature till 10/6/2021 ',
            archived: false
        },
        {
            id: 3,
            name: 'William Gaddis',
            created: 'May 07, 2021',
            category: noteCategories.QUOTE,
            content: 'Power doesn\'t co...',
            archived: false
        },
        {
            id: 4,
            name: 'Create notes',
            created: 'July 27, 2023',
            category: noteCategories.TASK,
            content: 'Create notes until 30/7/2023',
            archived: true
        },
        {
            id: 5,
            name: 'English',
            created: 'July 29, 2023',
            category: noteCategories.RANDOM_THOUGHT,
            content: 'I shouldn\'t forget about English',
            archived: false
        },
        {
            id: 6,
            name: 'Bruce Lee',
            created: 'July 20, 2023',
            category: noteCategories.QUOTE,
            content: 'It is the life of perfection which seems to be incomplete, and of fullness which seems to be empty.',
            archived: false
        }
    ]
}