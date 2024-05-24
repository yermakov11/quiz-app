export const questions = [
    {
        title: 'React is ... ?',
        variants: ['framework', 'application', 'library'],
        correct: 2,
    },
    {
        title: 'What is JSX?',
        variants: [
            'Syntax for writing XML-like code in JavaScript',
            'Syntactic sugar for JavaScript',
            'A state management tool in React',
            'A special language for styling components'
        ],
        correct: 0,
    },
    {
        title: 'What is state in React?',
        variants: [
            'Functions that return JSX',
            'Objects that contain component styles',
            'Variables that are stored in a component and can change',
            'Methods that are called during component rendering'
        ],
        correct: 2,
    },
    {
        title: 'How to pass data from parent to child component?',
        variants: [
            'Using state',
            'Using useEffect',
            'Using props',
            'Using context'
        ],
        correct: 2,
    },
    {
        title: 'What is the Virtual DOM?',
        variants: [
            'A tool for creating animations in React',
            'An API for working with the real DOM',
            'A copy of the real DOM used for optimizing updates',
            'A data model for describing component state'
        ],
        correct: 2,
    },
    {
        title: 'What is useEffect used for in React?',
        variants: [
            'For managing component state',
            'For creating context',
            'For describing the structure of components',
            'For performing side effects in components'
        ],
        correct: 3,
    },
    {
        title: 'What does the setState method do?',
        variants: [
            'Deletes the component state',
            'Creates a new component',
            'Updates the component state and triggers a re-render',
            'Initializes component props'
        ],
        correct: 2,
    },
    {
        title: 'What are props in React?',
        variants: [
            'Functions defined inside a component',
            'Arguments passed to a component',
            'The internal state of a component',
            'Lifecycle methods of a component'
        ],
        correct: 1,
    },
    {
        title: 'What is a HOC (Higher-Order Component) in React?',
        variants: [
            'A lifecycle method of a component',
            'A state management tool',
            'A function for handling events',
            'A function that takes a component and returns a new component'
        ],
        correct: 3,
    },
    {
        title: 'What is context used for in React?',
        variants: [
            'To create class components',
            'To manage state in functional components',
            'To work with effects',
            'To pass data through the component tree without using props'
        ],
        correct: 3,
    }
];
