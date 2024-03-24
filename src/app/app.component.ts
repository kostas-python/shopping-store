import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';


// import home page components  //

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TopBarComponent, CommonModule,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'shopping-store';
}
