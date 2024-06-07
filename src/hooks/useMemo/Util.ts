export interface User {
    id: number;
    name: string;
    completed: boolean;
}

export const createUser = (): User[] => {
    const todos: User[] = [];
    for (let i = 0; i < 30; i++) {
        todos.push({
            id: i,
            name: "User " + (i + 1),
            completed: Math.random() > 0.5
        });
    }
    return todos;
}

export const filterUser = (todos: User[], tab: 'all' | 'active' | 'completed'): User[] => {
    return todos.filter(todo => {
        if (tab === 'all') {
            return true;
        } else if (tab === 'active') {
            return !todo.completed;
        } else if (tab === 'completed') {
            return todo.completed;
        }
    });
}