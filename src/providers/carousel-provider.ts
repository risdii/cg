import { Injectable } from '@angular/core';

@Injectable()
export class CarouselProvider {
    slides = [
        { image: 'assets/img/slides/slide1.png' },
        { image: 'assets/img/slides/slide2.png' },
        { image: 'assets/img/slides/slide3.png' },
        { image: 'assets/img/slides/slide4.png' },
        { image: 'assets/img/slides/slide5.png' }
    ];

    getSlides() {
        return this.slides;
    }

}
