import { Game } from './game.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input()  game: Game;
  @Input() isFullDetails: boolean;
  ngOnInit(): void {
  }

}
