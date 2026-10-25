import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorClicks } from './contador-clicks';

@Component({
  imports: [RouterOutlet,ContadorClicks],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('s2CarrilC');
}
