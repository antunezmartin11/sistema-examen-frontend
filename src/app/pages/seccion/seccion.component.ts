import { HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Observable } from 'rxjs';
import { SeccionService } from 'src/app/services/seccion.service';
import { DNuevaSeccionComponent } from './d-nueva-seccion/d-nueva-seccion.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'enabled', 'abreviatura','opciones'];
  dataSource: MatTableDataSource<any>=new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  headers = new HttpHeaders();
  listaGrados!: Observable<any>

  constructor(
    private _seccionService: SeccionService,
    public dialog: MatDialog
    ) {}
  ngOnInit(): void {
    this.obtenerListarSeccion()
  }
  obtenerListarSeccion(){

    this._seccionService.listarSecciones().subscribe(
      {
        next:(data:any)=>{
          console.log(data)
          this.dataSource.data=data.data
        }
      }
    )
   }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  crearSeccion(){

    let dialogRef = this.dialog.open(DNuevaSeccionComponent, {
      height: '400px',
      width: '600px',
    }).afterClosed().subscribe(data=>{
      if(data){
        this.obtenerListarSeccion()
      }
    });
  }
}
