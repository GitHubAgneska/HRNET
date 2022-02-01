import { validate } from "./form_validators";
import { act, fireEvent, render, screen, cleanup } from '@testing-library/react'
import SimpleInput from "../components/elements/Form-inputs/SimpleInput";
import { employeeFormFields } from '../data/employee-form-fields'
import CompositeForm from "../components/elements/Employee-form/Employee-form-composite";
import { Provider } from 'react-redux'
import { store } from '../state/store'

const userMock = { 
    firstName: 'Lester',
    lastName :'Nygaard',
    dob_date: '1964-11-11',
    start_date: '2004-11-11',
    street: '613 Willow Creek Drive',
    city: 'Bemidji',
    state: 'Minnesota',
    zipcode: '56601',
    department: 'Sales'
}

describe('form validators testing', () => {
    beforeEach(() => { cleanup() });

    test('firstName & lastName validation', () => {

        const { container } = render(<Provider store={store}><CompositeForm /></Provider>)
        const itemField = container.querySelector('input', { name: 'firstName' })

        fireEvent.input(itemField, {target: { value: 'Le99er'}, bubbles:true})
        let errors = validate.firstName(itemField.value)
        expect(errors).toBe('firstName should only contain characters')

        fireEvent.input(itemField, {target: { value: '  '}, bubbles:true})
        errors = validate.firstName(itemField.value)
        expect(errors).toBe('firstName needs to be at least three characters')

        fireEvent.input(itemField, {target: { value: 'Le'}, bubbles:true})
        errors = validate.firstName(itemField.value)
        expect(errors).toBe('firstName needs to be at least three characters')


        cleanup()
    })
})