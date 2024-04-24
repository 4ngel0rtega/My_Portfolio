import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  texts: string[] = ["Angel Ortega", "Web Developer", "Mobile Developer"];
  currentIndex: number = 0;
  displayedText: string = '';

  ngOnInit(): void {
    this.animateText();
  }

  animateText() {
    const text = this.texts[this.currentIndex];
    let index = 0;
    const interval = setInterval(() => {
      this.displayedText += text[index];
      index++;
      if (index === text.length) {
        clearInterval(interval);
        setTimeout(() => {
          this.displayedText = ''; // Reinicia el texto mostrado
          this.currentIndex = (this.currentIndex + 1) % this.texts.length; // Avanza al siguiente texto
          this.animateText(); // Inicia la animación para el siguiente texto
        }, 2000); // Cambia el tiempo de espera antes de cambiar al siguiente texto si lo deseas
      }
    }, 100); // Cambia la velocidad de escritura ajustando este valor
  }
}
