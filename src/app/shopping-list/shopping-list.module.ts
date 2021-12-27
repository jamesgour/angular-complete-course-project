import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  imports: [RouterModule, CommonModule, FormsModule, ShoppingListRoutingModule],
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  providers: [],
})
export class ShoppingListModule {}
