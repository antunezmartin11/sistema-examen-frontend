import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GradoService } from 'src/app/services/grado.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  headers = new HttpHeaders();
  listaGrados!: Observable<any>
  constructor(
    private _gradoService: GradoService
  ) { }

  ngOnInit(): void {
    this.obtenerListarGrados()
   }
   obtenerToken(){


   }
   obtenerListarGrados(){
    let token:any = localStorage.getItem('token')
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Authorization", token);
    this._gradoService.listarGrados(this.headers).subscribe(
      {
        next:(data:any)=>{
          console.log(data)
        }
      }
    )
   }

}
