import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe-list/recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //     new Recipe(
  //         'Delicious Shrimp Pasta',
  //         'Easy to make!',
  //         'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
  //         [
  //             new Ingredient('Shrimp', 3),
  //             new Ingredient('Zucchini Pasta', 1)
  //         ]),

  //     new Recipe(
  //         'Beer-Battered Fish',
  //         'With a tasty sauce',
  //         'https://upload.wikimedia.org/wikipedia/commons/5/57/990402-ians-recipe-01-IMG_4724.jpg',
  //         [
  //             new Ingredient('Fish', 1),
  //             new Ingredient('Sauce', 1)
  //         ])
  //   ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
