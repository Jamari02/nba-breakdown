# NBA Data API Server

This is a Node.js server that fetches data from the NBA API and stores it in a MongoDB database. It provides routes to access the fetched data.

## Prerequisites

Before running the server, make sure you have the following:

- Node.js installed on your machine
- MongoDB installed and running
- RapidAPI API Key for the NBA API

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd nba-data-api-server
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and add your RapidAPI API Key:

   ```bash
   API_KEY=your-api-key
   ```

## Usage

To start the server, run the following command:

```bash
npm start
```

The server will start running on `http://localhost:4000`. You can change the port by modifying the `PORT` variable in the `.env` file.

## Endpoints

The server provides the following endpoints:

- `/api/team` - Retrieves a list of NBA teams.
- `/api/player` - Retrieves a list of NBA players.
- `/api/standing` - Retrieves NBA team standings.

### Team Endpoints

- `GET /api/team` - Retrieves all NBA teams.
- `GET /api/team/:id` - Retrieves a specific NBA team by ID.
- `POST /api/team` - Creates a new NBA team.
- `PUT /api/team/:id` - Updates a specific NBA team by ID.
- `DELETE /api/team/:id` - Deletes a specific NBA team by ID.

### Player Endpoints

- `GET /api/player` - Retrieves all NBA players.
- `GET /api/player/:id` - Retrieves a specific NBA player by ID.
- `POST /api/player` - Creates a new NBA player.
- `PUT /api/player/:id` - Updates a specific NBA player by ID.
- `DELETE /api/player/:id` - Deletes a specific NBA player by ID.

### Standing Endpoints

- `GET /api/standing` - Retrieves all NBA team standings.
- `POST /api/standing` - Creates a new NBA team standing.
- `DELETE /api/standing/:id` - Deletes a specific NBA team standing by ID.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).