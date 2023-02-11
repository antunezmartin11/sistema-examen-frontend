import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class GradoService {

  constructor(private httpClient: HttpClient) { }

  private rutaServicio: string = '/grado'
  private listarGrado: string = '/getAll'

  public listarGrados(request:any){
    return this.httpClient.get(`${baseUrl}${this.rutaServicio}${this.listarGrado}`,{headers: request});
  }
}
