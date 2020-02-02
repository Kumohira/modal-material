import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-material-modal',
  templateUrl: './material-modal.component.html',
  styleUrls: ['./material-modal.component.scss']
})
export class MaterialModalComponent implements OnInit {

  dto = {
    attribute: '',
    value: '',
  };

  constructor(
    public dialogRef: MatDialogRef<MaterialModalComponent>
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
