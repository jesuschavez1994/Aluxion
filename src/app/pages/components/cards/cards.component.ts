import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalInfoComponent } from '../modal-info/modal-info.component';
import { Aluxioners } from '../../../../assets/data/data-aluxioners';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  stop: number;
  name: string;
  array = Aluxioners;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(i: number): void {
    const dialogRef = this.dialog.open(ModalInfoComponent, {
      width: '651px',
      height: '325px',
      data: {stop: i}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
