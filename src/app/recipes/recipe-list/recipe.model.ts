import { Ingredient } from "src/app/shared/ingredient.model";

// Model for what the recipe object looks like
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];
    
    // Constructor allows you to instantiate a recipe with "new" keyword and pass in arguments
    constructor (name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients; 
    }
}