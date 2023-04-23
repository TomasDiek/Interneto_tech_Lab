import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/interface/property';
import { PropertyService } from 'src/app/services/property.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { YawinCalculatorService } from 'src/app/services/yawin-calculator.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.scss'],
})
export class ViewComponentComponent implements OnInit {
  public propertyId!:number;
  public mainPhotoUrl: string = '';
  property = new Property();
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];
  mapUrl!: SafeResourceUrl;
  private googleMapsApiKey= environment.googleMapsApiKey;
  loanAmount: number =0;
  interestRate: number=0
  term: number=0;
  totalPayment!: number;
  totalInterest!: number;
  
  constructor(private yawinCalculator:YawinCalculatorService,private sanitizer: DomSanitizer,private route:ActivatedRoute, private router:Router, private propertyService:PropertyService){}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
        this.propertyService.getProperty(this.propertyId).subscribe(
          // @ts-ignore: Object is possibly 'null'.
          (data: Property) => {
            this.property = data;
            // @ts-ignore: Object is possibly 'null'.
            this.property.age = this.propertyService.getPropertyAge(this.property.estPossessionOn);
            this.galleryImages = this.getPropertyPhotos();
            const url = `https://www.google.com/maps/embed/v1/place?q=${this.property.address},${this.property.city}&key=${this.googleMapsApiKey}`;
            this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
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
  }
    changePrimaryPhoto(mainPhotoUrl: string) {
      this.mainPhotoUrl = mainPhotoUrl;
    }
    getPropertyPhotos(): NgxGalleryImage[] {
      const photoUrls: NgxGalleryImage[] = [];
      for (const photo of this.property.photos ?? []) {
          if(photo.isPrimary)
          {
              this.mainPhotoUrl = photo.imageUrl;
          }
          else{
              photoUrls.push(
                  {
                      small: photo.imageUrl,
                      medium: photo.imageUrl,
                      big: photo.imageUrl
                  }
              );}
      }
      return photoUrls;
  }

  calculateLoan() {
    this.yawinCalculator.calculateLoan(this.loanAmount, this.interestRate, this.term)
      .subscribe(data => {
        this.totalInterest = data.totalInterestPayable;
        this.totalPayment = data.totalPayment;
      });
  }
  }

