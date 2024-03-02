import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Property } from 'src/app/interface/property';
import { PropertyService } from 'src/app/services/property.service';
import { environment } from 'src/environment/environment';
import * as alertify from 'alertifyjs';
import { Photo } from 'src/app/interface/photo';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.scss']
})
export class PhotoEditorComponent implements OnInit {
  @Input() property!: Property;
  @Output() mainPhotoChangedEvent = new EventEmitter<string>();
  uploader!: FileUploader;
  hasBaseDropZoneOver!: boolean;
  baseUrl = environment.baseUrl;
  maxAllowedFileSize=1*1024*1024;
  response!: string;
  constructor(private propertyService: PropertyService) {
  }

  ngOnInit(): void {
    alertify.set('notifier','position', 'top-right');
  }
  ngOnChanges(): void {
    if (this.property) {
      this.initializeFileUploader();
    }
  }
  public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

  initializeFileUploader() {
      this.uploader = new FileUploader({
          url: this.baseUrl +'property/add/photo/'+ String(this.property.id),
          authToken: 'Bearer '+ localStorage.getItem('token'),
          isHTML5: true,
          allowedFileType: ['image'],
          removeAfterUpload: true,
          autoUpload: true,
          maxFileSize:this.maxAllowedFileSize
      });
      console.log("uploader",this.uploader)
      this.uploader.onAfterAddingFile = (file) => {
          file.withCredentials = false;
      };

      this.uploader.onSuccessItem = (item, response, status, headers) => {
          if (response) {
              const photo = JSON.parse(response);
              // @ts-ignore: Object is possibly 'null'.
              this.property.photos.push(photo);
          }
      };

      this.uploader.onErrorItem = (item, response, status, headers) => {
          let errorMessage = 'Some unknown error occured';
          if (status===401) {
              errorMessage ='Your session has expired, login again';
          }

          if (response) {
              errorMessage = response;
          }

          alertify.error(errorMessage);
      };
  }
  mainPhotoChanged(url: string){
    this.mainPhotoChangedEvent.emit(url);
  }
  setPrimaryPhoto(propertyId: number, photo: Photo) {
    this.propertyService.setPrimaryPhoto(propertyId,photo.publicId).subscribe(()=>{
        this.mainPhotoChanged(photo.imageUrl);
        // @ts-ignore: Object is possibly 'null'.
        this.property.photos.forEach(p => {
            if (p.isPrimary) {p.isPrimary = false;}
            if (p.publicId === photo.publicId) {p.isPrimary = true;}
        });
    });
}

deletePhoto(propertyId: number, photo: Photo) {
    this.propertyService.deletePhoto(propertyId,photo.publicId).subscribe(()=>{
      // @ts-ignore: Object is possibly 'null'.
        this.property.photos = this.property.photos.filter(p =>
            p.publicId !== photo.publicId);
    });
}
}
