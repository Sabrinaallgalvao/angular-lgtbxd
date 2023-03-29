import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SabrinaTimerComponent } from './sabrina-timer/sabrina-timer.component';
import { SabrinaSimpleintComponent } from './sabrina-simpleint/sabrina-simpleint.component';
import { SabrinaRandomComponent } from './sabrina-random/sabrina-random.component';
import { SabrinaCompoundintComponent } from './sabrina-compoundint/sabrina-compoundint.component';
import { SabrinaHeaderComponent } from './sabrina-header/sabrina-header.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, 
    SabrinaTimerComponent, 
    SabrinaSimpleintComponent, 
    SabrinaRandomComponent, 
    SabrinaCompoundintComponent, 
    SabrinaHeaderComponent],
  templateUrl: 'main.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
