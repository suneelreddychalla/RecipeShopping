import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[] = [new Ingredients('Rice', 1),
  new Ingredients('chicken', 2)];
  constructor() { }

  ngOnInit() {
  }

}
