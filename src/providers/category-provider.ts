import { Injectable } from '@angular/core';

@Injectable()
export class CategoryProvider {
    categories = [
        { name: 'Beverages', image: 'assets/img/beverages.png' },
        { name: 'Food', image: 'assets/img/groceries.png' }, 
        { name: 'Household Products', image: 'assets/img/kids.png' },
        { name: 'Kitchen Essentials', image: 'assets/img/gifts.png' },
        { name: 'Medicine', image: 'assets/img/home.png' },
        { name: 'Personal Hygiene', image: 'assets/img/gifts.png' },
        { name: 'Stationery', image: 'assets/img/sports.png' }
    ];

    getCategories() {
        return this.categories;
    }

}

