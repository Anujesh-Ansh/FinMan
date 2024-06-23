export interface User {
    id: string;
    name: string;
    points: number;
    relationship: 'friend' | 'myself' | null ;
    organisation: 'same' | null;
}

export const users: User[] = [
    { id: '1', name: 'Anujesh', points: 1500, relationship: 'myself', organisation: 'same'},
    { id: '2', name: 'Sakshi', points: 1400, relationship: 'friend', organisation: 'same' },
    { id: '3', name: 'Ansh', points: 1300, relationship: 'myself', organisation: 'same' },
    { id: '4', name: 'Palak', points: 1200, relationship: 'friend', organisation: 'same' },
    { id: '5', name: 'Aryan', points: 1100, relationship: null, organisation: 'same' },
    { id: '6', name: 'Jasmita', points: 1000, relationship: 'friend', organisation: null },
    { id: '7', name: 'Ravi', points: 900, relationship: null, organisation: null },
    { id: '8', name: 'Priya', points: 800, relationship: 'friend', organisation: null },
    { id: '9', name: 'Sita', points: 700, relationship: null, organisation: null },
    { id: '10', name: 'Anjali', points: 600, relationship: 'friend', organisation: null },
];
