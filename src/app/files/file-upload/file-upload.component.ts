import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { UIService } from '../../common/ui.service';
import { AuthService } from '../../auth/auth.service';
import { auth } from 'firebase';

// https://angularfirebase.com/lessons/firebase-storage-with-angularfire-dropzone-file-uploader/

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  // @Output() uploadCompleted = new EventEmitter<string>();

  private task: AngularFireUploadTask;
  private ref: AngularFireStorageReference;
  private percentage: Observable<number>;
  private snapshot: Observable<any>;
  private downloadURL: Observable<string>;

  private isHovering: boolean;




  constructor(private storage: AngularFireStorage, private uiService: UIService, private authService: AuthService) { }

  ngOnInit() {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      this.uiService.showSnackbar('unsupported file type', null, 3000);
      console.error('unsupported file type :( ');
      return;
    }

    const path = `images/profile/${new Date().getTime()}_${file.name}`;
    const customMetadata = {app: 'alpha69-ng'};

    this.ref = this.storage.ref(path);
    this.task = this.ref.put(file);

    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
         this.downloadURL = this.ref.getDownloadURL();
         this.uiService.showSnackbar(`Picture Uploaded. ${snap.totalBytes} bytes`, null, 3000);
         console.log(this.authService.getUser());
        }
      })
    );

  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
