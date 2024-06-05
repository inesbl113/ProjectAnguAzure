import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, RouterLink, FooterComponent], // ajout de RouterLink et RouterOutlet
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'twitter';
}
