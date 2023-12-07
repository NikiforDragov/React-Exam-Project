# React-Exam-Project Fighters 2023

My project from the SoftUni course react 2023

Small website where users can post their favorite fighters. Using React for front-end, soft-uni practice server for backend and React-Bootstrap

## Short info and functionalities:

### Components:

- Every component is in own folder with css module and validation file(if needed).
- Context folder - contains useForm custom hook.
- Context folder - contains authContext. 
- Guards folder - contains two route guards - public and private. 
- Lib folder - contains custom requester.
- Services folder - contains auth and fighter services.

### Guests:

- Have access to the home page, catalog and details and no access to other functionalities. 

### Registered / Logged-in Users can:

- Create posts.
- Edit, delete posts /only if user is the owner of the post/.
- View published posts by all users, like them and search. Also have access to profile page, where users can find their uploaded posts(if any).
 