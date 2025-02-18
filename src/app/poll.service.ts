import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poll } from './poll.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  private baseUrl = 'http://localhost:8080/api/polls';

  constructor(private http:HttpClient) { }

  createPoll(poll:Poll): Observable<Poll>{
   console.log("Sending Poll:", JSON.stringify(poll));
    // this.http.post<Poll>('http://localhost:8080/api/polls', poll).subscribe(
    //   next  => console.log("Poll created successfully!"),
    //   error => console.error("Error creating Poll....", error)
    // );
    

    return this.http.post<Poll>(this.baseUrl, poll);
  }

  getPolls(): Observable<Poll[]>{
    return this.http.get<Poll[]>(this.baseUrl);
  }

  vote(pollId:number, optionId:number): Observable<Poll>{ 
    const Url = `${this.baseUrl}/vote`; 
    return this.http.post<Poll>(Url, {pollId, optionId});
  }
}
