import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  templateUrl: 'template.html'
})
export class BasicPage {
    @ViewChild(Slides) slides: Slides;
    currentIndex: number;

    constructor(){
      this.currentIndex = 0;
    }

    //Dynamically set content of the slide

    sliderData = [
    {
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      image: "assets/img/201626.png",
      color: "#f64c73"
    },
    {
      title: "Lorem Ipsum",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      image: "assets/img/273572.png",
      color:"#20d2bb"
    },
    {
      title: "Lorem Ipsum",
      description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ",
      image: "assets/img/363337.png",
      color: "#3395ff"
    }
  ];
  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex();

    if(this.currentIndex != this.slides.length()){
      //Fetch Slider Data  on every slide change
      //if current index === slides.length-1
      //Navigate
    }


  }
  nextSlide() {
    this.slides.slideNext(500);
    //if current index === slides.length-1
    //Navigate
  }
  prevSlide(){
    this.slides.slidePrev(500);
    // Just to get back to previous slide
    // For skip: Just Navigate to the desired page
  }

}
