import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  data_photo=[];
  constructor(private imageUpload: ImagesService) { }

  ngOnInit(): void {

    this.imageUpload.getPhotos().subscribe(data =>{ 
      for(let i=0 ; i<6; i++){
        this.data_photo.push(data[i]);
      }
    });
  }

}
