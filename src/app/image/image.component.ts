import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
    Link =[];
    loading: boolean = false; // Flag variable
    file: File = null;
    title: string;
    

    obj={
      "title":'',
      "image1":'',
      "thumbnail":''
    }

  // selectedFile: File;
  constructor(private imageUpload: ImagesService, private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  onFileSelected(event){
    this.file = event.target.files[0];
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.Link.push(reader.result);
    };
    
  }

  onUpload(){

    this.obj.title = this.title;
    this.obj.image1 = this.Link[0];
    this.obj.thumbnail = this.Link[1];
    console.log(this.obj.title);

    this.imageUpload.imageurl = this.Link;

    this.imageUpload.upload(this.obj)
    .subscribe((res) => {
      console.log(res);
    })
    console.log("Images are Uploaded!!!!!!")
  }
}
