import { Component } from '@angular/core';

// Importe TODOS os componentes standalone que você vai usar
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobreComponent } from './sobre/sobre.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    SobreComponent,
    SkillsComponent,
    ProjetosComponent,
    ContatoComponent,
    FooterComponent
  ]
})
export class AppComponent {}

