import { Component, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements AfterViewInit {
  @ViewChild('navbarScroll') navbarScroll!: ElementRef;

  ngAfterViewInit() {
    this.onWindowScroll();
  }

  @HostListener('window:scroll') onWindowScroll() {
    const element = this.navbarScroll.nativeElement;
    const scrolled = window.scrollY > 50;
    if (scrolled) {
      element.classList.add('scrolled');
    } else {
      element.classList.remove('scrolled');
    }
  }
}
