import { Component, OnInit,Inject  } from '@angular/core';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
import {expand, flyInOut} from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInout]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  errMess: string;

  constructor(private leaderService: LeaderService, @Inject('BaseURL') public BaseURL:any) { }


  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders,errmess => this.errMess = errmess);
  }
  
}
