import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ReusableService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  openSnackBar(mensaje: any, className: string, duration: number | null){
    this._snackBar.open(mensaje, undefined, {
      horizontalPosition: 'end',
      verticalPosition:'top',
      duration: (duration)? duration:5000,
      panelClass: [className]
    })

  }
}
