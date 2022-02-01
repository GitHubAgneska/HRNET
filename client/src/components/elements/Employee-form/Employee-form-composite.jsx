import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { createEmployee } from '../../../features/employee_feature'
import { validate } from "../../../utils/form_validators"

import { employeeFormFields } from '../../../data/employee-form-fields'
import DateInput from '../Form-inputs/DateInput'
import SimpleInput from '../Form-inputs/SimpleInput'
import SelectInput from '../Form-inputs/SelectInput'
import Button from '../Button/Button'

import ModalComp from '../Modal/Modal'
import useModal from '../Modal/useModal'

import { FormWrapper, StyledForm, FieldsWrapper, FormBtnsWrapper } from './Employee-form-style'

const CompositeForm = () => {

    const initialState = {firstName: '', lastName:'', dob:'', startDate:'',  street:'', city:'', zipcode: '', state: { name:'', abbreviation:''}, department:''};
    
    const [ values, setValues ] = useState({ ...initialState})
    const [ touched, setTouched ] = useState({})
    const [ errors, setErrors ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    const [ justCreated, setJustCreated ] = useState({})
    // eslint-disable-next-line no-unused-vars
    const [ existing, setExisting ] = useState({ ...initialState})
    const [ errorCreation, setErrorCreation ] = useState({error: '', firstName: '', lastName:'', department: ''})
    
    const dispatch = useDispatch()
    const history = useHistory()

    const collection = useSelector(initialState => initialState.list.collection)

    const allFieldsOk = // acts on submit disabled/!disabled
        Object.values(touched).every(t => t === true )
        && Object.values(touched).length === Object.values(values).length
        && Object.values(errors).every(t => t === null );

    const formDirty = Object.values(touched).some(t => t === true );

    const [ displayModal, /* setDisplayModal */ ] = useState(false);
    
    const handleInputChange = (fieldName, value) => {
        setValues(currentValues => { currentValues[fieldName] = value; return currentValues; }); // !== setValues({ ...values, [fieldId]: value }); ?
        //setTouched({ ...touched, [fieldId]: true });// === setTouched(touched => { touched[fieldId]= true; return touched; });
        if (fieldName === 'state' || fieldName === 'department') { setTouched({ ...touched, [fieldName]: true }) }
    }

    const handleBlur = (fieldName, value) => {
        // eslint-disable-next-line no-unused-vars
        const { [fieldName]: removedError, ...rest } = errors;
        const error = validate[fieldName](value); // error = is a string message
        setErrors( {...errors, [fieldName]: error }); // !== setErrors({ ...rest, ...(error && { [fieldName]: touched[fieldName] && error }) }); ? 
        setTouched({ ...touched, [fieldName]: true });// === setTouched(touched => { touched[fieldId]= true; return touched; });
    }

    const handleSubmit = async event => {
        event.preventDefault()
        setIsLoading(true)

        const formValidation = Object.keys(values).reduce(
            (acc, key) => {
                const newError = validate[key](values[key]); // = validate[fieldName](fieldValue)
                const newTouched = { [key]: true };
                return { errors: { ...acc.errors, ...(newError && { [key]: newError }) },
                        touched: { ...acc.touched, ...newTouched }
                        }
            },
            { errors: { ...errors }, touched: { ...touched } }
        )
        setErrors(formValidation.errors);
        setTouched(formValidation.touched);
        
        if ( Object.values(formValidation.errors).every(t => t === null ) // all errors  = null
             && Object.values(formValidation.touched).length === Object.values(values).length // all fields were touched
             && Object.values(formValidation.touched).every(t => t === true ) // every touched field is true
            ) {
                let exists = checkExists(values.lastName)
                if (exists) {
                    setExisting({...values})
                    setErrorCreation({error: 'exists', firstName:values.firstName, lastName:values.lastName, department: values.department})
                    // setIsLoading(false)
                    toggleWarningModal()
                }
                else {
                    let state = {} // us-state property should be an object (not possible in select input)
                    state.name = values.state
                    let newEmployee = {...values, state }

                    dispatch(createEmployee(newEmployee))
                        .then(response => setJustCreated({...response.employee}))
                        .then(setIsLoading(false))
                        .then(confirmCreation())
                        .catch(error => setErrorCreation(error))
                }
            }
            setIsLoading(false)
    }

    const checkExists = (requestedLastName) => {
        let exists = collection.filter(employee => employee.lastName.toLowerCase() === requestedLastName.toLowerCase()).length !==0
        return exists
    }
    
    const navigateToList = () => {
        history.push('./employees-list')
    }
    
    // form => user clicks cancel btn: modal confirm action opens
    const handleCancel = event => {
        event.preventDefault()
        toggleConfirmModal()
    }
    
    // cancel form modal : confirm yes (reset form)
    const resetForm = () => { 
        document.getElementById('myform').reset()
        setValues(() => initialState)
        setJustCreated(null)
        setExisting({...initialState})
        setErrorCreation({error: '', firstName: '', lastName:'', department: ''})
        setErrors({})
        setTouched({})
        
    }
    const cancelReset = () => { toggleConfirmModal() }
    const confirmReset = () => { 
        resetForm()
        isModalSuccessShowed? toggleSuccessModal()
        : isModalConfirmShowed? toggleConfirmModal()
        : toggleWarningModal()
    }
    
    // modal successful creation
    const confirmCreation = () => { toggleSuccessModal() }

    const { isShowing: isModalSuccessShowed, toggle: toggleSuccessModal } = useModal();
    let confirmSuccessModal = {
        modalType: 'success',
        message: `New employee successfully created`,
        action: 'Would you like to create another employee?',
        modalBtns: [
            { btntype: 'action', name: 'create', action: () => confirmReset() },
            { btntype: 'cancel', name: 'go to list', action: () => navigateToList() }
        ]
    }
    const { isShowing: isWarningModalShowed, toggle: toggleWarningModal } = useModal();
    let warningModal = {
        modalType: 'warning',
        message: `We found an existing employee with this name:`,
        action: 'Please create a different employee',
        modalBtns: [
            { btntype: 'action', name: 'create', action: () => confirmReset() },
            { btntype: 'cancel', name: 'go to list', action: () => navigateToList() }
        ]
    }
    const { isShowing: isModalConfirmShowed, toggle: toggleConfirmModal } = useModal();
    let modalConfirmReset = {
        modalType: 'confirmResetForm',
        message: `Are you sure you want to`,
        action: 'reset the form?',
        modalBtns: [
            { btntype: 'action', name: 'reset', action: () => confirmReset()  },
            { btntype: 'cancel', name: 'cancel',action: () => cancelReset() }
        ]
    }


    if ( isLoading ) { return ('loading...') }

    return (
        <FormWrapper displayModal={displayModal} >
            <StyledForm id='myform'>
                <FieldsWrapper>
                    { (employeeFormFields).map(i => (
                        
                        (i.fieldType ==='text')?
                            <SimpleInput 
                                key={i._uid}
                                fieldName={i.fieldName}
                                field={i}
                                isAddress={i.isAddress}
                                values={values}
                                handleInputChange={handleInputChange}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                                />
                            
                        : (i.fieldType === 'date') ?
                            <DateInput
                                key={i._uid}
                                fieldName={i.fieldName}
                                field={i}
                                isAddress={i.isAddress}
                                values={values}
                                handleInputChange={handleInputChange}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                                />

                        : (i.fieldType ==='select') ?
                            <SelectInput 
                                key={i._uid}
                                fieldName={i.fieldName}
                                field={i}
                                isAddress={i.isAddress}
                                values={values}
                                handleInputChange={handleInputChange}
                                options={i.options}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                                />

                            :null
                    ))}
                </FieldsWrapper>

                <FormBtnsWrapper style={{width: "60%"}}>
                    <Button btntype="action" btnName="save" handleClick={handleSubmit} disabled={!allFieldsOk} width="40%;"></Button>
                    <Button btntype="cancel" btnName="cancel" handleClick={handleCancel} disabled={!formDirty} width="40%;"></Button>
                </FormBtnsWrapper>

            </StyledForm>

                { justCreated?.firstName && 
                    <ModalComp
                    props={confirmSuccessModal}
                    content={justCreated}
                    isShowing={isModalSuccessShowed}
                    confirmReset={confirmReset}
                    navigateToList={navigateToList}
                    />
                }
                { errorCreation && 
                    <ModalComp
                    props={warningModal}
                    content={errorCreation}
                    isShowing={isWarningModalShowed}
                    confirmReset={confirmReset}
                    navigateToList={navigateToList}
                />
                }
                
                <ModalComp
                    props={modalConfirmReset}
                    isShowing={isModalConfirmShowed}
                    cancelReset={cancelReset}
                    confirmReset={confirmReset}
                />

        </FormWrapper>
    )
}
export default CompositeForm
