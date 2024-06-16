// Define the User interface
export interface User {
    id: number;
    name: string;
    location: string;
    distance: number;
    age: number;
    image: string;  // Image URL as a string
}

// Define the users array with URLs for images
export const users: User[] = [
    {
        id: 1,
        name: 'Anujesh',
        location: 'Lucknow',
        distance: 11,
        age: 21,
        image: 'https://images.unsplash.com/photo-1718227696407-4de5de9c3599?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        name: 'Ansh',
        location: 'Pune',
        distance: 9,
        age: 20,
        image: 'https://images.unsplash.com/photo-1717765697742-6b2f48f4a1fa?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        
    },
    {
        id: 3,
        name: 'MyoNir',
        location: 'California',
        distance: 15,
        age: 15,
        image: 'https://images.unsplash.com/photo-1717738118267-99f7c371127c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        
    }
];
