import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ReusableService } from 'src/app/services/reusable.service';
import { SeccionService } from 'src/app/services/seccion.service';

@Component({
  selector: 'app-d-nueva-seccion',
  templateUrl: './d-nueva-seccion.component.html',
  styleUrls: ['./d-nueva-seccion.component.css']
})
export class DNuevaSeccionComponent implements OnInit {
  formSeccion!: FormGroup;
  nombreRequerido: string = "Es un campo obligatorio"
  constructor(
    public _seccionservicio: SeccionService,
    public dialog: MatDialogRef<DNuevaSeccionComponent>,
    private _reusableService: ReusableService
  ) { }

  ngOnInit() {
    this.init()
  }
  init(){
    this.formSeccion = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      abreviatura: new FormControl(null, [Validators.required]),
      enabled: new FormControl(null, [Validators.required])
    });
  }
  guardarRegistro(){
    let form = this.formSeccion
    form.markAllAsTouched()
    if(form.valid){
      let request = {
        nombre: this.formSeccion.controls['nombre'].value,
        abreviatura: this.formSeccion.controls['abreviatura'].value,
        enabled: this.formSeccion.controls['enabled'].value
      }
      this._seccionservicio.guardarSeccion(request).subscribe((data:any)=>{
        console.log(data)
        if(data.mensaje=='Seccion ya existe'){
          let mensaje=data.mensaje
          this._reusableService.openSnackBar(mensaje,'bg-info',null)
          this.dialog.close(true)
        }else if(data.mensaje=='Seccion registrada'){
          let mensaje=data.mensaje
          this._reusableService.openSnackBar(mensaje,'bg-success',null)
          this.dialog.close(true)
        }
      })

    }

  }

}
