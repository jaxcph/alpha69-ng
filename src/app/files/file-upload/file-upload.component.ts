import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { UIService } from '../../common/ui.service';
import { AuthService } from '../../auth/auth.service';
import { auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

// https://angularfirebase.com/lessons/firebase-storage-with-angularfire-dropzone-file-uploader/

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit, OnDestroy {


  // @Output() uploadCompleted = new EventEmitter<string>();

  private task: AngularFireUploadTask;
  private ref: AngularFireStorageReference;
  private percentage: Observable<number>;
  private snapshot: Observable<any>;
  private downloadUrl$: Observable<string>;

  public downloadURL: string;

  private isHovering: boolean;
  private getDownloadUrlSub: Subscription;



  constructor(private storage: AngularFireStorage,
    private uiService: UIService,
    private authService: AuthService,
    private db: AngularFirestore,
    private afAuth: AngularFireAuth) { }

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
    this.ref = this.storage.ref(path);
    this.task = this.ref.put(file);
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();


    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {

        if (snap.bytesTransferred === snap.totalBytes) {
         this.downloadUrl$ = this.ref.getDownloadURL();
         this.getDownloadUrlSub = this.ref.getDownloadURL().subscribe( value => {
            this.downloadURL = value;

           // update photoUrl on the users db record, and also on the user record
           // this.db.doc(`members/${this.authService.getUser().uid}`).update({photoUrl: value});

            this.authService.getUser().updateProfile({displayName:null, photoURL: value});

          }, error => {
            this.uiService.showSnackbarError(error);
          });

         this.uiService.showSnackbar(`Picture Uploaded. ${snap.totalBytes} bytes`, null, 3000);
        }
      })
    );

  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  ngOnDestroy(): void {
    if ( this.getDownloadUrlSub ) { this.getDownloadUrlSub.unsubscribe(); }

  }
}
