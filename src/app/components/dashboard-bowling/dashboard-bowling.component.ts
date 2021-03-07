import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BowlingService} from '../../services/bowling.service';

@Component({
  selector: 'app-dashboard-bowling',
  templateUrl: './dashboard-bowling.component.html',
  styleUrls: ['./dashboard-bowling.component.css']
})
export class DashboardBowlingComponent implements OnInit {

  @ViewChild('alert', {static: true}) alert: ElementRef;
  @Input() rounds: number[] = [];
  frameScore: number;
  errorMessages: string[] = [];

  constructor(private bowlingService: BowlingService) {
  }

  ngOnInit(): void {
  }

  calculateScoreFrame(frameNumber: number) {
    this.bowlingService.intermediateScore(frameNumber, this.rounds)
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
