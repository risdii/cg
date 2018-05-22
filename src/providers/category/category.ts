import { Injectable } from '@angular/core';

@Injectable()
export class CategoryProvider {
    categories = [
        { name: 'Beverages', image: 'assets/img/beverages2.png' },
        { name: 'Food', image: 'assets/img/food3.png' }, 
        { name: 'Household', image: 'assets/img/household.png' },
        { name: 'Kitchen Essentials', image: 'assets/img/kitchen.png' },
        { name: 'Medicine', image: 'assets/img/meds.png' },
        { name: 'Personal Hygiene', image: 'assets/img/ph.png' },
        { name: 'Stationery', image: 'assets/img/stationery.png' }

    ];

    getCategories() {
        return this.categories;
    }

}

