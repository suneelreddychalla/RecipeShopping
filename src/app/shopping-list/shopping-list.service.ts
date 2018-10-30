import {Ingredients} from '../shared/ingredients.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] = [new Ingredients('Rice', 1),
    new Ingredients('chicken', 2)];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientsFromRecipe(ingredients: Ingredients[]) {
  this.ingredients.push(...ingredients);
  this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
