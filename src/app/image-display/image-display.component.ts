import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {
  imageData = this.imageUpload.imageurl;
  constructor(private imageUpload: ImagesService) {
   }
  ngOnInit(): void {
  }
}

