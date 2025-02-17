package com.example.voting_app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.voting_app.model.Poll;

public interface PollRepository extends JpaRepository<Poll, Long> {

}
