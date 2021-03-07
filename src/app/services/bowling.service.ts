import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppSettings} from '../settings/AppSettings';

@Injectable({
  providedIn: 'root'
})
export class BowlingService {

  constructor(private http: HttpClient) {
  }


  play(hitPins: number) {
    return this.http.post<number[]>(AppSettings.APP_URL + '/game/play/' + hitPins, null);
  }


  globalScore() {
    return this.http.get<number>(AppSettings.APP_URL + '/game/calculate-global-score');
  }

  intermediateScore(frameIndex: number, game: number[]) {
    return this.http.post<number>(AppSettings.APP_URL + '/game/calculate-intermediate-score/' + frameIndex, game);
  }
}
