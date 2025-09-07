import { Employee } from '../models/employee.model.js';

export async function getAllEmployees(req, res, next) {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.json(employees);
  } catch (err) { next(err); }
}

export async function getEmployeeById(req, res, next) {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    if (!employee) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.json(employee);
  } catch (err) { next(err); }
}

export async function createEmployee(req, res, next) {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (err) { next(err); }
}

export async function updateEmployee(req, res, next) {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!employee) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.json(employee);
  } catch (err) { next(err); }
}

export async function deleteEmployee(req, res, next) {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.json({ message: 'Empleado eliminado' });
  } catch (err) { next(err); }
}