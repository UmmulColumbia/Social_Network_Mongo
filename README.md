# Social_Network_Mongo

## Description

This project is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the server

## Usage

Use Insomnia or another API client to test the routes.

## API Routes

- Users
  - GET `/api/users`
  - GET `/api/users/:userId`
  - POST `/api/users`
  - PUT `/api/users/:userId`
  - DELETE `/api/users/:userId`
  - POST `/api/users/:userId/friends/:friendId`
  - DELETE `/api/users/:userId/friends/:friendId`

- Thoughts
  - GET `/api/thoughts`
  - GET `/api/thoughts/:thoughtId`
  - POST `/api/thoughts`
  - PUT `/api/thoughts/:thoughtId`
  - DELETE `/api/thoughts/:thoughtId`
  - POST `/api/thoughts/:thoughtId/reactions`
  - DELETE `/api/thoughts/:thoughtId/reactions/:reactionId`

## Walkthrough Video

https://drive.google.com/file/d/1FF9ENSOjTXF4NpU2FMaq3IWx8INbYaay/view

https://drive.google.com/file/d/1NDuTMgflKUiL6mAoROhBqYpMqJ63ub6X/view

## License

This project is licensed under the MIT License.

## Author

[Ummul Mukta](https://github.com/github-profile)
