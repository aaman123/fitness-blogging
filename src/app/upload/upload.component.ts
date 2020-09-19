import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from './dialog/dialog.component'
import { UploadService } from './upload.service'


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(
    public dialog: MatDialog, public uploadService: UploadService
  ) { }

  ngOnInit() {}

  public openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      
    })
  }

}
