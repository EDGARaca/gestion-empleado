import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  id: string | null = null;
  loading = false;
  title = 'Nuevo Empleado';

  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName:  ['', [Validators.required, Validators.minLength(2)]],
    email:     ['', [Validators.required, Validators.email]],
    position:  ['', [Validators.required]],
    salary:    [0, [Validators.required, Validators.min(0)]],
    hireDate:  [''],
    isActive:  [true]
  });

  constructor(
    private fb: FormBuilder,
    private employeesSvc: EmployeesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = 'Editar Empleado';
      this.loading = true;
      this.employeesSvc.get(this.id).subscribe({
        next: (e: Employee) => { this.form.patchValue(e); this.loading = false; },
        error: () => { alert('No se pudo cargar el empleado'); this.loading = false; }
      });
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;

    const action$ = this.id
      ? this.employeesSvc.update(this.id, this.form.value as Partial<Employee>)
      : this.employeesSvc.create(this.form.value as Employee);

    action$.pipe(
      switchMap((_) => of(true))
    ).subscribe({
      next: () => { this.loading = false; this.router.navigate(['/employees']); },
      error: (err) => { this.loading = false; alert(err?.error?.message || 'Error guardando'); }
    });
  }

  cancel(): void {
    this.router.navigate(['/employees']);
  }
}