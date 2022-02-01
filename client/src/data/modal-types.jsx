let employeeFirstName = '', employeeLastName = '', employee = {};

export const modalTypes = [
    {
        type: 'cancelEmployeeCreation',
        context: 'form fields are dirty, cancellation needs confirmation',
        body : {
            header: 'Are you sure you want to close the form ?',
            content: `All data for ${employeeFirstName} ${employeeLastName} will be lost`,
            actions: [
                {
                    btnName: 'yes',
                    actions: [
                        {
                            type: 'closeModal',
                            component: 'modal' 
                        },
                        {
                            type: 'resetForm',
                            component: 'employee-form' 
                        }
                    ]
                },
                {
                    btnName: 'no',
                    actions: [
                        {
                            type: 'closeModal',
                            component: 'modal' 
                        }
                    ]
                }
            ]
        }
    },
    {
        type: 'employeeSuccessfullyCreated',
        context: 'employee was just created, client now waits for user to click ok to make api post request',
        header: 'A new amployee was successfully created',
        content: `${employee}`,
        actions: [
            {
                btnName: 'close',
                actions: [
                    {
                        type: 'closeModal',
                        component: 'modal'
                    },
                    {
                        type: 'resetForm',
                        component: 'employee-form'
                    },
                    {
                        type: 'postRequest(employee)',
                        component: 'employee-form'
                    },
                    {
                        type: 'navigateToEmployeesList',
                        component: 'CreateEmployee'
                    },

                ]
            },
            {
                btnName: 'modify employee',
                actions: [
                    {
                        type: 'closeModal',
                        component: 'modal'
                    }
                ]
            }
        ]
    }
]