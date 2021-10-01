import { Recipe } from "./recipe-list/recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Simply A Test', 
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
        new Recipe('Another Test Recipe', 'Another Test', 
        'https://upload.wikimedia.org/wikipedia/commons/5/57/990402-ians-recipe-01-IMG_4724.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}