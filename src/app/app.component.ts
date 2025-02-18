import { Component } from '@angular/core';
import { ScreamerComponent } from './screamer/screamer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScreamerComponent],  // Подключаем ScreamerComponent
  templateUrl: './app.component.html'
})
export class AppComponent {}
