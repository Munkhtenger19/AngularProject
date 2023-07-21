import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-group-dialog',
  templateUrl: './new-group-dialog.component.html',
  styleUrls: ['./new-group-dialog.component.scss']
})
export class NewGroupDialogComponent {
  name!: string;

  constructor(public dialogRef: MatDialogRef<NewGroupDialogComponent>) {}

  onSave() {
    // Save the name of the new group and close the dialog
    this.dialogRef.close(this.name);
  }

  onCancel() {
    // Close the dialog without saving the name of the new group
    this.dialogRef.close(null);
  }
}
