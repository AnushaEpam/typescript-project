// using literal types
type Operation = 'add' | 'remove' | 'update';

//  using union types
type Item = string | number | { custom: string };

// a generic interface for operations
interface OperationDetails<T> {
    operation: Operation;
    items: T[];
}

// A generic function that can perform operations on items
function manageItems<T extends Item>(details: OperationDetails<T>): T[] | string {
    switch (details.operation) {
        case 'add':
            console.log("Adding items:", details.items);
            return details.items; 
        case 'remove':
            console.log("Removing items:", details.items);
            return details.items; 
        case 'update':
            console.log("Updating items:", details.items);
            return details.items; 
        default:
            return "Invalid operation"; 
    }
}

// usage of the function
const operation1: OperationDetails<string> = {
    operation: 'add',
    items: ['item1', 'item2']
};

const operation2: OperationDetails<{ custom: string }> = {
    operation: 'update',
    items: [{ custom: 'customData1' }]
};

const result1 = manageItems(operation1);
const result2 = manageItems(operation2);

console.log(result1); 
console.log(result2); 
