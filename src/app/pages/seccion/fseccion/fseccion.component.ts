import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DNuevaSeccionComponent } from '../d-nueva-seccion/d-nueva-seccion.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeccionService } from 'src/app/services/seccion.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fseccion',
  templateUrl: './fseccion.component.html',
  styleUrls: ['./fseccion.component.css']
})
export class FseccionComponent implements OnInit {
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
