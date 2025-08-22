import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.html',
  styleUrls: ['./projetos.css'],
  standalone: true
})
export class ProjetosComponent implements AfterViewInit {

  ngAfterViewInit() {
    const elements = document.querySelectorAll<HTMLElement>('.project-card, .skill-card');

    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const animateOnScroll = () => {
      elements.forEach(element => {
        const pos = element.getBoundingClientRect().top;
        if (pos < window.innerHeight / 1.3) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // roda uma vez no load
  }
}

