import { Component, OnInit, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import { AES, enc } from 'crypto-ts';

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
  private dialogRef: MatDialogRef<DialogOverviewComponent>;

  constructor(private matCard: MatCardModule, public dialog: MatDialog) {
    this.hashPassDialogMessage = "Your Hashed Password:";
    this.decryptedPassDialogMessage = "Your Decrypted Password:";
  }

  ngOnInit() {
    console.log("Program loaded!")
  }

  hashPassword() {
    console.log("Password: " + this.password);
    this.convertPassToHash();
    this.dialogRef = this.dialog.open(DialogOverviewComponent, {
      height: '400px',
      width: '350px',
      data: { name: this.hashPassDialogMessage, content: this.hash }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  decryptPassword() {
    console.log("Hash: " + this.hash);
    this.convertHashToPass();
    this.dialogRef = this.dialog.open(DialogOverviewComponent, {
      height: '400px',
      width: '350px',
      data: { name: this.decryptedPassDialogMessage, content: this.password }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  convertPassToHash() {
      this.hash = AES.encrypt("430Fdo345", "haha").toString();
      console.log("Hashed Pass: " + this.hash);
  }

  convertHashToPass() {
      this.password = AES.decrypt(this.hash, "haha").toString(enc.Utf8);
      
      console.log("Original Pass: " + this.hash);
  }
}


