import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MaterialModalComponent} from '../material-modal/material-modal.component';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})
export class MypageComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public apiService: ApiService
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MaterialModalComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.sendData(result);
    });
  }

  sendData(data) {
    this.apiService.saveData(data)
      .subscribe(
        value => {
          console.log('OK');
        },
        error => {
          console.log('KO');
        }
      );
  }
}
