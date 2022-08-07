import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Component, OnInit, Inject } from '@angular/core';
import {expand , flyInOut} from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut() ,
      expand()
    ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[]
  errMess: string;

  constructor(private dishService: DishService, @Inject('BaseURL') public BaseURL:any) { }

  ngOnInit(): void {
   // this.dishes = this.dishService.getDishes();
    // this.dishService.getDishes()
    // .subscribe(dishes => this.dishes = dishes);
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes ,
      errmess => this.errMess = <any>errmess);
  }

}
