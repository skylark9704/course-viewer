import React from 'react';
import renderer from 'react-test-renderer'
import InputComponent from "../components/common/Input";

// Snapshot Testing
it('renders input', () => {
    const tree = renderer.create(<InputComponent name="input" />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[0].type).toBe('input')
    expect(tree.children[0].props.type).toBe('text')
})