import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BowlingService} from './services/bowling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('alert', {static: true}) alert: ElementRef;
  score: number;
  rounds: number[] = [];
  errorMessages: string[] = [];

  ngOnInit(): void {
  }

  constructor(private bowlingService: BowlingService) {
  }

  play() {
    const hitPins = this.getRandomInt(11);
    this.bowlingService.play(hitPins)
      .subscribe(result => {
        this.rounds = result.filter(score => score !== null);
      }, error => {
        this.errorMessages.push(error.error);
      });
  }

  globalScoreGame() {
    this.bowlingService.globalScore()
      .subscribe(result => {
        this.score = result;
      }, error => {
        this.errorMessages.push(error.error);
      });
  }

  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }

  private getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
