import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RecipeStore';

  constructor(private router: Router) {}

  navigate(page: 'ingredients' | 'categories' | 'tags' | 'measuring-units') {
    this.router.navigateByUrl(page)
  }
}
