import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class SeccionService {

  constructor(private httpClient: HttpClient) { }

  private rutaServicio: string = '/seccion'
  private listarSeccion: string = '/listarSeccion'
  private crearSeccion: string = '/Registro-seccion'

  public listarSecciones(){
    return this.httpClient.get(`${baseUrl}${this.rutaServicio}${this.listarSeccion}`);
  }

  public guardarSeccion(request:any){
    return this.httpClient.post(`${baseUrl}${this.rutaServicio}${this.crearSeccion}`,request);
  }
}
