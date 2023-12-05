import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { personaacargoactividadService } from '../../Services/personaacargoactividad.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaACargoActividad } from 'models/Types.js';

@Component({
  selector: 'app-personaacargoactividad-add-edit',
  templateUrl: './personaacargoactividad-add-edit.component.html',
  styleUrls: ['./personaacargoactividad-add-edit.component.css'],
})

export class personaacargoactividadAddEditComponent implements OnInit {
  
  DniPersonaAcargo: number = 0;
  idActividadFk: number = 0;
  

  form: FormGroup;
  id: number;
  operacion: string = 'Agregar ';

  constructor(
    private fb: FormBuilder,
    private personaacargoactividadService: personaacargoactividadService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      DniPersonaAcargo: [null, Validators.required],
      IdActividadFk: [null, Validators.required]
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    if(this.id != 0){
      // Es modificar
      this.operacion = 'Modificar ';
      this.getPersonaACargo(this.id);
    }

  }

  postPersonasAcargoActividad() {
    const nuevaPersonaAcargo: PersonaACargoActividad = {
      DniPersonaAcargo: this.form.value.DniPersonaAcargo,
      IdActividadFk: this.form.value.idActividadFk,
    };

    console.log(this.id);

    if (this.id !== 0) {
      // Es modificar
      this.personaacargoactividadService.updatePersonaAcargo(this.DniPersonaAcargo, nuevaPersonaAcargo).subscribe(() => {
        this.router.navigate(['/personaacargoactividad']);
      })
    } else {
      // Es agregar
      this.personaacargoactividadService.createPersonaAcargo(nuevaPersonaAcargo).subscribe(
        () => {
          // Se puede manejar la respuesta aquí si es necesario
          console.log('Persona a cargo de la actividad creada exitosamente');
  
          // Redirigir al usuario a la página de visualización de las personas a cargo u otra página después de crear la persona a cargo de la actividad
          this.router.navigate(['/personaacargoactividad']);
        },
        (error) => {
          // Manejar errores si es necesario
          console.error('Error al crear esta persona a cargo de la actividad', error);
        }
      );
    }

    
  }

  getPersonaACargo(dni: number) {
    this.personaacargoactividadService.GetPersonaAcargoById(dni).subscribe((data:PersonaACargoActividad) => {
      this.form.setValue({
        DniPersonaAcargo: data.DniPersonaAcargo,
        IdActividadFk: data.IdActividadFk
      })
    })
  }

}
