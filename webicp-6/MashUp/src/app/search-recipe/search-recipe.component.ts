import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];
  formattedAddress = [];
  currentLat: any;
  currentLong: any;
  geolocationPosition: any;
  
  recepieApi = 'https://api.edamam.com/search?q=';
  recepieAppid = '&app_id=d0c9a5a0';
  recepieKey = '&app_key=428b5bb6d7fc2bb9bd7f89fb967f2212';

  placesApi = 'https://api.foursquare.com/v2/venues/search?';
  clientdId = 'client_id=EVYHOBMFS14YGGCWUCCGNRHYBYDP3OGNF52UFCFUQV4FJJYE';
  clientSecret = '&client_secret=Z54RRZ2RXNHRRAR2Z3LXSML14PNACFROR4KOWVIAGNOWUOCS';
  version = '&v=20210223';
  near = '&near=';
  query = '&query=';
  limit = '&limit=10';
  ll ='&ll'
  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });
  }

  getVenues() {

    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;

    if (this.recipeValue !== null) {
      /**
       * Write code to get recipe
       */
      this._http.get( this.recepieApi + this.recipeValue + this.recepieAppid + this.recepieKey).subscribe((res: any) => {
        console.log("reciepe search object from edamam api");
        console.log(res);
        this.recipeList = Object.keys(res.hits).map(function (k) {
          const i = res.hits[k].recipe;
          return {name: i.label, icon: i.image, url: i.url, serves: i.yield};
        });

      });
    }

    if (this.placeValue != null && this.placeValue !== '' && this.recipeValue != null && this.recipeValue !== '') {
      /**
       * Write code to get place
       */
      this._http.get( this.placesApi  + this.clientdId + this.clientSecret + this.version+ this.limit 
        + this.near + this.placeValue + this.query + this.recipeValue).subscribe((res: any) => {
        console.log(res);
        this.venueList = Object.keys(res.response.venues).map(function (input,k) {
          const i = res.response.venues[k];
          return {name: i.name, location: i.location};
        });
      });
    }
  }
}
