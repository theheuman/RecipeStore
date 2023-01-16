import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";
import {RecipeDetailsComponent} from "./pages/recipe-details/recipe-details.component";
import {IngredientsComponent} from "./pages/ingredients/ingredients.component";
import {MeasuringUnit} from "./enums/MeasuringUnit";
import {MeasuringUnitsComponent} from "./pages/measuring-units/measuring-units.component";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {TagsComponent} from "./pages/tags/tags.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'details/:id',
    component: RecipeDetailsComponent
  },
  {
    path: 'ingredients',
    component: IngredientsComponent
  },
  {
    path: 'measuring-units',
    component: MeasuringUnitsComponent
  },
  {
    path: 'tags',
    component: TagsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
