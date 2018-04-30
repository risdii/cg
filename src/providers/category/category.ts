import { Injectable } from '@angular/core';

@Injectable()
export class CategoryProvider {
    categories = [
        { name: 'fashion', image: 'assets/img/fashion.png' },
        { name: 'groceries', image: 'assets/img/groceries.png' },
        { name: 'gifts', image: 'assets/img/gifts.png' },
        { name: 'kids', image: 'assets/img/kids.png' },
        { name: 'home', image: 'assets/img/home.png' },
        { name: 'sports', image: 'assets/img/sports.png' }
    ];

    getCategories() {
        return this.categories;
    }

}

