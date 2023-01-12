import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private userService:UserService, private snack:MatSnackBar) { }

  public user = {
    username:'',
    password:'',
    nombre:'',
    apellidos:'',
    email:'',
    telefono:''
  }
  ngOnInit(): void {
  }

  formSubmint(){
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null){
      this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    this.userService.añadirUsuario(this.user).subscribe((data)=>{
      console.log(data)

      Swal.fire('Usuario registrado','Usuario registrado correctamente','success')
    },(error)=>{
      console.log(error)
      this.snack.open('Ocurrio un error en el registro !!','Aceptar',{
        duration: 3000
      })
    })
  }
}
