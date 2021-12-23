import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe-list/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put(
      'https://ng-course-recipe-book-b2e63-default-rtdb.firebaseio.com/recipes.json', 
      recipes
    )
    .subscribe(response => {
      console.log(response);
    });
  } 

  fetchRecipes() {
    this.http
    .get<Recipe[]>('https://ng-course-recipe-book-b2e63-default-rtdb.firebaseio.com/recipes.json')
    .subscribe(recipes => {
      this.recipesService.setRecipes(recipes);
    });
  }
}