import { Component, OnInit, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import { Hash2passnbackService } from '../hash2passnback.service';

@Component({
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  private password: string;
  private hash: string;
  private hashPassDialogMessage: string;
  private decryptedPassDialogMessage: string;
  private dialogRef: MatDialogRef<DialogOverviewComponent>;

  constructor(private matCard: MatCardModule, public dialog: MatDialog, private h2pnb: Hash2passnbackService) {
    this.hashPassDialogMessage = 'Your Hashed Password:';
    this.decryptedPassDialogMessage = 'Your Decrypted Password:';
  }

  ngOnInit() {
    console.log('Program loaded!');
  }

  hashPassword() {
    console.log('Password: ' + this.password);
    this.hash = this.h2pnb.convertPassToHash(this.password);
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
    console.log('Hash: ' + this.hash);
    this.password = this.h2pnb.convertHashToPass(this.hash);
    this.dialogRef = this.dialog.open(DialogOverviewComponent, {
      height: '400px',
      width: '350px',
      data: { name: this.decryptedPassDialogMessage, content: this.password }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


