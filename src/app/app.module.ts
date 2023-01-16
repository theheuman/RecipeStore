import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { LandingComponent } from './pages/landing/landing.component';
import {RecipeDetailsComponent} from "./pages/recipe-details/recipe-details.component";
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { MeasuringUnitsComponent } from './pages/measuring-units/measuring-units.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { TagsComponent } from './pages/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    RecipeListComponent,
    LandingComponent,
    RecipeDetailsComponent,
    IngredientsComponent,
    MeasuringUnitsComponent,
    CategoriesComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
