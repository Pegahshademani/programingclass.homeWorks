import {Node} from "./tree.js";

const TREE1 =
    new Node('A', [
        new Node('B', []),
        new Node('C', [
            new Node('X', []),
            new Node('Y', [
                new Node('U', []),
                new Node('V', [])
            ]),
        ]),
        new Node('D', [
            new Node('E', []),
            new Node('F', []),
            new Node('X', []),
        ]),
    ])

test('Contains an item', () => {
    expect(TREE1.contains('B')).toBeTruthy();
    expect(TREE1.contains('A')).toBeTruthy();
})

test('Doesnt contain an item', () => {
    expect(TREE1.contains('Q')).toBeFalsy();
})

test('Finds an item that is in the tree', () => {
    expect(TREE1.find('B')).toStrictEqual(['A', 'B']);
})

test('Return null if not included', () => {
    expect(TREE1.find('Q')).toBeNull();
})

describe('test select', () => {

    test('Select a node at a path', () => {
        expect(TREE1.select(['A', 'C', 'Y', 'U'])).toMatchObject({name: 'U'})
    })

    test('Get null for a path pointing to a node not in the tree', () => {
        expect(TREE1.select(['A', 'C', 'E'])).toBeNull()
    })
})



