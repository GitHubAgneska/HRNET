import { listState } from '../state/store'
import {
    // PUT REQUEST --
    /*  setEmployee, setFirstName, setLastName,setdob_date, setstart_date, setStreet,
    setCity, setUsState, setZipcode, setDepartment,
    employeeFetching, employeeResolved, employeeRejected, 
    setCollection,
    */
    createEmployeeFetching, createEmployeeResolved, createEmployeeRejected
} from '../state/actions/Actions'
import { changeEntriesAmount } from './list_feature'


/**
 * 
 * @route   POST /
 * @desc    Create an employee
 * @access  Public
 * 
 * @param {object} employee
 * @returns {Promise<object>} response JSON
 */  
// Thunk function : necessary to pass employee object using thunk creator
export function createEmployee(employee) {

   return async function createNewEmployeeThunk (dispatch, getState) { // returns thunk

        const status = listState(getState()).post_status
        if ( status === 'pending' || status === 'updating ') { return }
        dispatch(createEmployeeFetching(employee))

        try {
            const response = await fetch('/api/employees/', {
                method: 'POST',
                withCredentials: false,
                headers: {
                    Accept: "text/html",
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(employee)
            });

            const responseObj = await response.json() // => status / message / body
            
            if ( responseObj === 200) {
                dispatch(createEmployeeResolved(responseObj)) // => set post status to resolved + update collection
                dispatch(changeEntriesAmount(15))
            } else { 
                dispatch(createEmployeeRejected(responseObj.message))
            }
            return responseObj
        }
        catch(error) {
            dispatch(createEmployeeRejected(error))
            return error
        }
    }
}


// GET BY ID REQUEST --
// Thunk function : necessary to pass id  using thunk creator
/* export function getEmployee(id) {
    return async(dispatch, getState) => { // returns thunk
        
        const selectEmployeeById = selectEmployeeState(id)
        const status = selectEmployeeById(getState()).status
        if ( status === 'pending' || status === 'updating' ) { return }

        dispatch(employeeFetching(id))
        try {
            const response = await client.get(`/fakeApi/employee?id=${id}`)
            const data = await response // ! NOT .json()
            console.log('EMPLOYEE WITH ID=', data)
            dispatch(employeeResolved(id, data))
        }
        catch(error) {
            dispatch(employeeRejected(id, error))
        }
    }
} 

function setVoidIfUndefined(draft, id) {
    if (draft[id] === undefined) {
        draft[id] = { status: 'void' }
    }
}*/






