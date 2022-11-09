import { Component } from '@angular/core';
import {Product} from 'src/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store-components';
  imgParent = "https://picsum.photos/200"
  showImage = true

  onLoaded(img:string): void {
    console.log("loaded parent", img)
  }

  toggleImg() {
    this.showImage = !this.showImage
  }
}
