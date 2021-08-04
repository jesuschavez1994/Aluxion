import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Aluxioners } from '../../../../assets/data/data-aluxioners';


export interface DialogData {
  stop: number;
}

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnInit {

  aluxioner: any

  constructor( public dialogRef: MatDialogRef<ModalInfoComponent>, 
    @Inject(MAT_DIALOG_DATA) 
    public data: DialogData,
    public router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(Aluxioners[this.data.stop].aluxioner);
    this.aluxioner = Aluxioners[this.data.stop].aluxioner
  }

  closeMoodaL(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action);
  }

  public Home(){
    if( Aluxioners[this.data.stop].id_aluxion_casa ){
      this.closeMoodaL();
      this.router.navigate(['detail', Aluxioners[this.data.stop].id_aluxion_casa ]);
    }else{
      this._snackBar.open('Este Aluxioner no posee una parada en especifico', 'Cerrar', {
        duration: 5000,
      });
    }
  }

  public Work(){
    if( Aluxioners[this.data.stop].id_aluxion_casa ){
      this.closeMoodaL();
      this.router.navigate(['detail', Aluxioners[this.data.stop].id_aluxion_casa ]);
    }else{
      this._snackBar.open('Este Aluxioner no posee una parada en especifico', 'Cerrar', {
        duration: 5000,
      });
    }
  }

}
