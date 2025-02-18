# Voting App API

Welcome to the Voting App API documentation! This API allows users to create polls, retrieve existing polls, and cast votes on those polls.

## Base URL
http://localhost:8080/api/polls

## Endpoints

### 1. Create a Poll

- **Endpoint:** `POST /api/polls`
- **Description:** Creates a new poll.
- **Request Body:**
{
  
    "question": "new Poll again",
    "options": [
        {
            "optionText": "option 1 new",
            "voteCount": 0
        },
        {
            "optionText": "option 2 new",
            "voteCount": 0
        }
    ]
}

### 2. Get All Polls

- **Endpoint:** `GET /api/polls`
- **Description:** Retrieves a list of all polls.
- **Response:**
- **Status Code:** `200 OK`
- **Body:**


### 3. Get Poll by ID

- **Endpoint:** `GET /api/polls/{id}`
- **Description:** Retrieves a specific poll by its ID.
- **Path Parameters:**
- `id` (Long): The ID of the poll to retrieve.
- **Response:**
- **Status Code:** `200 OK`
  - **Body:**
  ```
  
    "id": 1,
    "question": "new Poll again",
    "options": [
        {
            "optionText": "option 1 new",
            "voteCount": 0
        },
        {
            "optionText": "option 2 new",
            "voteCount": 0
        }
    ]

  ```

 - **Status Code:** `404 Not Found` (if the poll does not exist)

### 4. Vote on a Poll

- **Endpoint:** `POST /api/polls/vote`
- **Description:** Casts a vote for a specific option in a poll.
- **Request Body:**

{
"pollId": 1,
"optionIndex": 0
}

- **Response:**
   - **Status Code:** `204 No Content` (indicates successful vote)
   - Note: No response body.

## Cross-Origin Resource Sharing (CORS)

This API allows requests from the following origin:





## Technologies Used

- Spring Boot
- Java
- Maven
- Angularr

## Getting Started

To run this application:

1. Clone the repository.
2. Navigate to the project directory.
3. Run the application using your preferred method (e.g., using an IDE or command line).
4. Access the API at `http://localhost:8080/api/polls`.

## License

This project is licensed under the MIT License.





# PollingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
