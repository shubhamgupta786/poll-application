import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Poll } from '../poll.models';

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.scss'
})


export class PollComponent implements OnInit {
  newPoll: Poll={//id: 0,
    question: '', options: [{optionText: '', voteCount: 0},{optionText: '', voteCount: 0}], 
  };
  polls: any[] = [];
  constructor(private pollService: PollService) {}

  ngOnInit(): void {
   this.loadPolls();
  }

   vote(pollId: number, optionIndex: number) {
    this.pollService.vote(pollId, optionIndex).subscribe(
      {next:() => {
        const poll =this.polls.find(poll => poll.id === pollId);
        if(poll){
          poll.options[optionIndex].voteCount++;
        }
      },
      error: (err) => {
        console.error("Error voting Poll....",err);
      }

      });
  }
    removeOption(index: number){
    this.newPoll.options.splice(index, 1);
    }
  loadPolls(){
    this.pollService.getPolls().subscribe({
      next: (data) => {
        console.log("Polls fetched successfully....",data);
        this.polls = data;
      },
      error: (err) => {
        console.error("Error fetching Polls....",err);
      }
    });
  }
    addOptions(){
    this.newPoll.options.push({optionText: '', voteCount: 0});
    }
  createPoll(){
    this.pollService.createPoll(this.newPoll).subscribe({ 
        next: (createPoll)=>{
          this.polls.push(createPoll);
          this.resetPoll();
        },
        error: (err) => {
          console.error("Error creating Poll....",err);
        }


    })
  }
  resetPoll(){
    this.newPoll={
     // id: 0,
      question: '', 
      options: [{optionText: '', voteCount: 0},{optionText: '', voteCount: 0}], 
      
  
    }
  }

  trackByIndex(index: number): any {
  return index;
  }
}
