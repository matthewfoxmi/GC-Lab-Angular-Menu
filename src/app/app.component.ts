import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menu';
  
menu:MenuItem[] = 
[
  {Item: "Chicken Fingers", Category: "Dinner", Price: 11.99},
  {Item: "Pizza", Category: "Dinner", Price: 11.99},
  {Item: "Wings", Category: "Sides", Price: 8.99},
  {Item: "Breadsticks", Category: "Sides", Price: 4.99},
  {Item: "Ceasar Salad", Category: "Salads", Price: 5.99},
  {Item: "Cinnamon Roll", Category: "Dessert", Price: 8.99}
];
}
