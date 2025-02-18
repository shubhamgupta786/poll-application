import { Component } from '@angular/core';
import { PollService } from './poll.service';
import { interval } from 'rxjs';
import { NgFor } from '@angular/common';
import { PollComponent } from './poll/poll.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NgFor,PollComponent]
})
export class AppComponent {
  polls: any[] = [];

  // constructor(private pollService: PollService) {}

  // ngOnInit() {
  //   this.fetchPolls();
  //   interval(5000).subscribe(() => this.fetchPolls()); // Auto refresh every 5 sec
  // }

  // fetchPolls() {
  //   this.pollService.getAllPolls().subscribe(data => this.polls = data);
  // }

  // vote(pollId: number, optionId: number) {
  //   this.pollService.vote(pollId, optionId).subscribe(() => this.fetchPolls());
  // }
}
