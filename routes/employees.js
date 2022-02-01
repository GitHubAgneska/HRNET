const express = require('express')
const router = express.Router()
const Employee = require('../models/Employee')
const employeesController = require('../controllers/employeesController')

/**
 * @route   GET api/employees
 * @desc    Get all employees
 * @access  Public
 */
router.get('/', async (_, res) => {
    try {
        const employees = await Employee.find();
        if (!employees) throw Error('No employees exist');
        res.json(employees);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

/**
 * @route   POST api/employees
 * @desc    Create an employee
 * @access  Public
 */
router.post('/', employeesController.createEmployee)



module.exports = router