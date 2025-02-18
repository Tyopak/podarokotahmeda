import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-screamer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screamer.component.html',
  styleUrls: ['./screamer.component.css']
})
export class ScreamerComponent {
  showScreamer = false;
  flashing = false;

  triggerScreamer() {
    this.showScreamer = true;
    this.flashing = true; // Включаем моргание

    // Запускаем звук
    const audio = new Audio('/screamer1.mp3');
    audio.play();

    // Выключаем моргание через 0.5 секунды
    setTimeout(() => {
      this.flashing = false;
    }, 5000);

    // Убираем скример через 3 секунды
    setTimeout(() => {
      this.showScreamer = false;
    }, 2500);
  }
}
