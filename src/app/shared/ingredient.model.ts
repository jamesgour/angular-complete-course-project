export class Ingredient {
  constructor(public name: string, public amount: number) {}
}
// Much faster way of creating a model than with Recipe
// No need to create variables for properties and then assign this.property to constructor
