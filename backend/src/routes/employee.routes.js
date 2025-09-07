import { Router } from 'express';
import {
  getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee
} from '../controllers/employee.controller.js';

const router = Router();

router.get('/', getAllEmployees);
router.get('/:id', getEmployeeById);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;