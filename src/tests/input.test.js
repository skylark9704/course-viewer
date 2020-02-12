import React from 'react';
import renderer from 'react-test-renderer'
import InputComponent from "../components/common/Input";

// Snapshot Testing
const tree = renderer.create(<InputComponent name="input" />).toJSON()
it('renders input', () => {

    expect(tree).toMatchSnapshot()
})

test('should be input', () => {
    expect(tree.children[0].type).toBe('input')
})

test('should be of type "text" ', () => {
    expect(tree.children[0].props.type).toBe('text')
})
