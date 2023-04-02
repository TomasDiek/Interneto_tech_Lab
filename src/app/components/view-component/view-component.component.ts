import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/interface/property';
import { PropertyService } from 'src/app/services/property.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.scss']
})
export class ViewComponentComponent implements OnInit {
  public propertyId!:number;
  property = new Property();
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];

  constructor(private route:ActivatedRoute, private router:Router, private propertyService:PropertyService){}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
        this.propertyService.getProperty(this.propertyId).subscribe(
          // @ts-ignore: Object is possibly 'null'.
          (data: Property) => {
            this.property = data;
          }, error=> this.router.navigate(['entry/buy'])
        );
      }
    );
    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview:true
      },
    ];

    this.galleryImages = [
      {
        small: '../../assets/images/interior1.jpg',
        medium: '../../assets/images/interior1.jpg',
        big: '../../assets/images/interior1.jpg'
      },
      {
        small: '../../assets/images/interior2.jpg',
        medium: '../../assets/images/interior2.jpg',
        big: '../../assets/images/interior2.jpg'
      },
      {
        small: '../../assets/images/interior3.jpg',
        medium: '../../assets/images/interior3.jpg',
        big: '../../assets/images/interior3.jpg'
      },
      {
        small: '../../assets/images/interior4.jpg',
        medium: '../../assets/images/interior4.jpg',
        big: '../../assets/images/interior4.jpg'
      },
    ];
  }
}
