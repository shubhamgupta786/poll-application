package com.example.voting_app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.voting_app.model.OptionVote;
import com.example.voting_app.model.Poll;
import com.example.voting_app.repositories.PollRepository;


@Service
public class PollService {
	
	
	private final PollRepository pollRepository;
	
	public  PollService(PollRepository pollRepository) {
		this.pollRepository=pollRepository;
	}

	public Poll createPoll(Poll poll) {
		
		return pollRepository.save(poll);
	}
	
	public List<Poll> getAllPolls(){
		return pollRepository.findAll();
	}
	 
	public Optional<Poll> getPollById(Long id){
		return pollRepository.findById(id);
	}

	public void vote(Long pollId, int optionIndex) {
		// TODO Auto-generated method stub
		
		// get Poll from DB
		Poll poll = pollRepository.findById(pollId).
				orElseThrow(()-> new RuntimeException("Poll not Found!"));
		
		// get All Options
		List<OptionVote> options =  poll.getOptions();
		
		// If Index of vote is  not valid throw error
		if (optionIndex<0 || optionIndex>=options.size()) {
			throw new IllegalArgumentException("Invalid Option Index");
			
		}
		
		// get Selected Options
		OptionVote selectedOption = options.get(optionIndex);
		
		// Increment vote for selected options
		selectedOption.setVoteCount(selectedOption.getVoteCount()+1);
		
		// save incremented option into database.
		pollRepository.save(poll);
		
	}
	
}
