import React from "react";
import { act, fireEvent, render, screen, cleanup } from '@testing-library/react'
import SearchBox from "./SearchBox";
import { Provider } from 'react-redux'
import { store } from '../../../state/store'


describe('search functionality testing', () => {
    beforeEach(() => { cleanup() }); 
    afterEach(cleanup) // Since not using shallow render => unmount or cleanup after every test is necessary
    
    // UI test: displays correct content
    // --------------
    test('renders all expected elements', () => {
        const { container } = render(<Provider store={store}><SearchBox /></Provider>)
        expect(container.getElementsByTagName('input').length).toBe(1)
        expect(container.getElementsByTagName('svg').length).toBe(2)
    })

    // Behavior tests
    test('at component init, suggestions box should not be visible', () => {
        const { container } = render(<Provider store={store}><SearchBox /></Provider>)
        expect(container.getElementsByTagName('ul').length).toBe(0)
    })



})