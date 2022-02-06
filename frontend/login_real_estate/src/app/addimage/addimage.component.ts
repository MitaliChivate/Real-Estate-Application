import { Component, OnInit } from '@angular/core';
import { ImageserviceService } from '../iservices/imageservice.service';
import { HttpEventType, HttpResponse, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.css']
})
export class AddimageComponent implements OnInit {

  public imagePath;
  imgURL: any;
  url :String;
  public message: string;

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  date : Date;
  
  constructor(public uploadService : ImageserviceService,private route : Router) { }
   
  ngOnInit() {
  }


    // gets calles as soon as a file is selected
    selectFile(event) {
      this.selectedFiles = event.target.files;
     this.preview(this.selectedFiles);
   }
 
   // list of files selected
   preview(files){
     if (files.length === 0)
       return;
 
     // loop around to work on all files
     var mimeType = files[0].type;
     if (mimeType.match(/image\/*/) == null) {
       this.message = "Only images are supported.";
       return;
     }
 
     // reads the content of file, so that it can be used for preview
     // without saving it to angular application folder
     var reader = new FileReader();
     this.imagePath = files;
     // reading file contents for preview
     reader.readAsDataURL(files[0]);
     // when images is loaded call the callback function
     reader.onload = (_event) => {
       this.imgURL = reader.result;
     }
   }
 
   saveProduct(txtName:HTMLInputElement, txtCategory:HTMLInputElement, txtCost:HTMLInputElement):void{
     
     this.progress.percentage = 0;
     this.currentFileUpload = this.selectedFiles.item(0);
    
     this.date = new Date();
     let dateString = `_${this.date.getTime()}_${this.date.getDate()}_${this.date.getFullYear()}`
     if (this.currentFileUpload.type == 'image/png') {
       this.url = `${dateString}.png`;
     }
     if (this.currentFileUpload.type == 'image/jpeg' || this.currentFileUpload.type == 'image/jpg') {
       this.url = `${dateString}.jpeg`;
     }
     console.log(this.url)
     
     this.uploadService.pushFileToStorage(this.currentFileUpload, this.url).subscribe((event:HttpEvent<{}>) => {
       // data is still being uploaded (returning progress)
       if (event.type === HttpEventType.UploadProgress) {
         // event.total : Total size to be uploaded
         // event.loaded : how much has been uploaded
         this.progress.percentage = Math.round(100 * event.loaded / event.total);
       } else if (event instanceof HttpResponse) {
         // checking if event object is no more an event but the response object
         console.log('File is completely uploaded!');
       }
     });
     this.selectedFiles = undefined;
     // this.reload();
     // reset the form
     txtName.value = "";
     txtCategory.value = "";
     txtCost.value = "";
     this.imgURL="";

     this.route.navigate(['postproperty']);
 
 }

}
