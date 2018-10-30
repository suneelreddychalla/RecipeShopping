import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Biryani',
      'Indian',
      'https://www.swatirecipe.com/wp-content/uploads/2018/03/mutton-biryani-recipe.jpg',
      [
        new Ingredients('Chicken', 1),
        new Ingredients('rice', 1),
        new Ingredients('Masala', 1)
      ]),
    new Recipe(
      'Pizza',
      'italian',
      'https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png',
      [
        new Ingredients('bread', 1),
        new Ingredients('cheese', 1),
        new Ingredients('bacon', 1),
      ]),
    new Recipe(
      'Falafal',
      'Meditarian',
      'https://www.washingtonpost.com/rf/image_982w/2010-2019/WashingtonPost/2016/12/21/Food/Images/Falafel-0838.jpg',
      [
        new Ingredients('beans', 1),
        new Ingredients('chickpeas', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredient: Ingredients[]) {
    this.slService.addIngredientsFromRecipe(ingredient);
  }
}
