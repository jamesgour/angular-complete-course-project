import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe-list/recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Delicious Shrimp Pasta', 
            'Easy to make!', 
            'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
            [
                new Ingredient('Shrimp', 3),
                new Ingredient('Zucchini Pasta', 1)
            ]),
        
        new Recipe(
            'Beer-Battered Fish', 
            'With a tasty sauce', 
            'https://upload.wikimedia.org/wikipedia/commons/5/57/990402-ians-recipe-01-IMG_4724.jpg',
            [
                new Ingredient('Fish', 1),
                new Ingredient('Sauce', 1)
            ])
      ];
    
    getRecipes() {
        return this.recipes.slice();
    }
}