import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [];
  loading = false;
  error: string | null = null;

  constructor(private employeesSvc: EmployeesService, private router: Router) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.loading = true;
    this.error = null;
    this.employeesSvc.list().subscribe({
      next: (data) => { 
        console.log('Empleados recibidos:', data); // Validación directa
        this.employees = data;
        this.loading = false;
       },
      error: (err) => {
        console.error('Error al cargar empleados:', err); // Diagnóstico visual 
        this.error = err?.error?.message || 'Error al cargar'; 
        this.loading = false; 
       }
    });
  }

  newEmployee(): void {
    this.router.navigate(['/employees/new']);
  } //Redirige al formulario de creación

  editEmployee(emp: Employee): void {
    if (!emp._id) return;
    this.router.navigate(['/employees', emp._id, 'edit']);
  } //Redirige al formulario de edición.

  deleteEmployee(emp: Employee): void {
    if (!emp._id) return;
    const ok = confirm('¿Eliminar a ${emp.firstName} ${emp.lastName}?'); // Confirmación de eliminación
    if (!ok) return;
    this.employeesSvc.remove(emp._id).subscribe({
      next: () => this.fetch(),
      error: (err) => {
        console.error('Error al eliminar empleado:', err);  // Diagnóstico visual
        alert(err?.error?.message || 'Error al eliminar');
      }    
    });
  } // Lógica para eliminar un empleado.
}