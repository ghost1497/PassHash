import { Component, OnInit, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  private password: string;
  private hash: string;
  private hashPassDialogMessage: string;
  private decryptedPassDialogMessage: string;
  private dialogRef: MatDialogRef<DialogOverview>

  constructor(private matCard: MatCardModule, public dialog: MatDialog) {
    this.ngOnInit();
    this.hashPassDialogMessage = "Your Hashed Password:";
    this.decryptedPassDialogMessage = "Your Decrypted Password:";
  }

  ngOnInit() {
    console.log("Program loaded!")
  }

  hashPassword() {
    console.log(this.password);
    this.dialogRef = this.dialog.open(DialogOverview, {
      height: '400px',
      width: '250px',
      data: { name: this.hashPassDialogMessage, content: this.hash }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  decryptPassword() {
    console.log(this.hash);
    this.dialogRef = this.dialog.open(DialogOverview, {
      height: '400px',
      width: '250px',
      data: { name: this.decryptedPassDialogMessage, content: this.password }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  convertPassToHash() {

  }

  convertHashToPass() {
  }
}



@Component({
  templateUrl: './dialog-overview.html',
  styleUrls: ['./program.component.css']
})
export class DialogOverview implements OnInit {

  private content: any;
  private passOrHash: any;
  constructor(public dialogRef: MatDialogRef<DialogOverview>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.ngOnInit();
    this.content = data.name;
    this.passOrHash = data.content;
  }

  ngOnInit(): void {
    console.log("dialog loaded!");
  }


}
