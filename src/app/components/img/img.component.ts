import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnDestroy {
  img: string = "";

  @Input('img') set changeImage(newImage: string){
    this.img = newImage
    console.log("change just img: ", this.img)
    // code
  }
  @Output() loaded = new EventEmitter<string>();

  imageDefault = "../../../assets/default.jpg";
  counter = 0;
  counterFn: number | undefined;
  constructor() { }

  ngOnInit(): void {
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
    }, 1000)
  }

  ngOnDestroy() {
    window.clearInterval(this.counterFn)
  }

  imgErr() : void {
    this.img = this.imageDefault
  }

  imgLoaded() : void {
    this.loaded.emit(this.img);
  }
}
