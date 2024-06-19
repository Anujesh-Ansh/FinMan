// Define the User interface
export interface User {
    id: number;
    header: string;
    content: string;
}

// Define the users array with URLs for images
export const users: User[] = [
    {
        id: 1,
        header: 'Anujesh',
        content: 'Lucknow',
    },
    {
        id: 2,
        header: 'Ansh',
        content: 'Pune',
    },
    {
        id: 3,
        header: 'MyoNir',
        content: 'California',   
    }
];
