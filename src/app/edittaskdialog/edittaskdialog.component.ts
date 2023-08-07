import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../Group.service';
import { Custom_datePipe } from '../_pipe/custom_date.pipe';

@Component({
  selector: 'app-edittaskdialog',
  templateUrl: './edittaskdialog.component.html',
  styleUrls: ['./edittaskdialog.component.scss']
})
export class EdittaskdialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<EdittaskdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task }
  ) {}

  onSave() {
    // Save the changes and close the dialog
    this.dialogRef.close(true);
  }

  onCancel() {
    // Close the dialog without saving changes
    this.dialogRef.close(false);
  }
}