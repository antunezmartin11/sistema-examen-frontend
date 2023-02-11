import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private login: LoginService) { }
  items: MenuItem[] = [];
  ngOnInit(): void {

    this.items = [
      {
        label:'Administracion',
        icon:'pi pi-fw pi-file',
        items:[
            {
                label:'Registro de Seccion',
                icon:'pi pi-fw pi-plus',
                routerLink:'../admin-alumno'
            },
            {
                label:'Tipo Contrato',
                icon:'pi pi-fw pi-excel',
                routerLink:'../admin-alumno'
            },
            {
                label:'Registro de Area',
                icon:'pi pi-fw pi-external-link'
            }
        ]
      },
      {
          label:'Registro',
          icon:'pi pi-fw pi-file',
          items:[
              {
                  label:'Nuevo Alumno',
                  icon:'pi pi-fw pi-plus',

              },
              {
                  label:'Carga Excel',
                  icon:'pi pi-fw pi-excel',
                  routerLink:'../admin-alumno'
              },
              {
                  separator:true
              },
              {
                  label:'Exportar',
                  icon:'pi pi-fw pi-external-link'
              }
          ]
      },
      {
          label:'Asistencia',
          icon:'pi pi-fw pi-pencil',
          items:[
              {
                  label:'Registro de asistencia',
                  icon:'pi pi-fw pi-align-left'
              }

          ]
      },
      {
          label:'Usuarios',
          icon:'pi pi-fw pi-user',
          items:[
              {
                  label:'Nuevo',
                  icon:'pi pi-fw pi-user-plus',

              },
              {
                  label:'Eliminar',
                  icon:'pi pi-fw pi-user-minus',

              },

          ]
      },
      {
          label:'Reportes',
          icon:'pi pi-fw pi-calendar',
          items:[
              {
                  label:'Reporte de asistencia',
                  icon:'pi pi-fw pi-pencil',
                  items:[
                  {
                      label:'Por grados',
                      icon:'pi pi-fw pi-calendar-plus'
                  },
                  {
                      label:'Por Secciones',
                      icon:'pi pi-fw pi-calendar-minus'
                  },

                  ]
              },
              {
                  label:'Reporte de usuarios',
                  icon:'pi pi-fw pi-calendar-times',
                  items:[
                  {
                      label:'Reporte por alumno',
                      icon:'pi pi-fw pi-calendar-minus'
                  }
                  ]
              }
          ]
      },
      {
          label:'Cerrar',
          icon:'pi pi-fw pi-power-off',
          command:(click) =>{
              this.logout()
          },
      }
  ];
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
