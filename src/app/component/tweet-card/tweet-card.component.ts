import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tweet-card',
	standalone: true,
	imports: [],
	templateUrl: './tweet-card.component.html',
	styleUrl: './tweet-card.component.css'
})
export class TweetCardComponent {


	constructor(public router: Router) { }

	@Input()
	tweet: any;

	@Output()
	ring = new EventEmitter<any>();



	ft_output(tweet: any) {
		this.router.navigate(['/popo', tweet.id]);
		
	}
}
