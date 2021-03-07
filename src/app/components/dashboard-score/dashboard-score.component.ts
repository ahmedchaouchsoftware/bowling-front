import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Game} from '../../model/Game';
import {BowlingService} from '../../services/bowling.service';

@Component({
  selector: 'app-dashbord-score',
  templateUrl: './dashbord-score.component.html',
  styleUrls: ['./dashbord-score.component.css']
})
export class DashbordScoreComponent implements OnInit {
  @ViewChild('alert', {static: true}) alert: ElementRef;
  @Input() games: Game[] = [];
  frameScore: number;
  errorMessages: string[] = [];

  constructor(private bowlingService: BowlingService) {
  }

  ngOnInit(): void {
  }

  calculateScore(frameNumber: number) {
    this.bowlingService.scoreGame(frameNumber)
      .subscribe(result => {
        this.frameScore = result;
      }, error => {
        this.errorMessages.push(error.error);
      });
  }

  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }

}
