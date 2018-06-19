import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent implements OnInit {

  private content: any;
  private passOrHash: any;
  constructor(public dialogRef: MatDialogRef<DialogOverviewComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.content = data.name;
    this.passOrHash = data.content;
  }

  ngOnInit(): void {
    console.log('dialog loaded!');
  }

}
