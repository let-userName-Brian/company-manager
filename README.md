
# Management Dashboard

Hey! This is my first CRUD app built using the NgRx Store for my state management.
I used the MySQL Employees SQL files but converted them to Postgres to better suite
my Tech Stack. This is still a work in progress for some parts and will be worked on 
sporadically.


## Tech Stack

**Client:** Angular, NgRx, RxJS, SASS

**Server:** Node, Express, Postgres


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```
Start Docker and create the Postgres instance
```
docker run -e POSTGRES_USER=docker --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=Batman890 -d postgres
```
Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  cd client
  npm install
  npm start
```

Start the server

```bash
  cd testing-server
  npm install
  npm run start
```

