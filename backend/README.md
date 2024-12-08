# DurianChat Backend

## Overview
The DurianChat Backend is designed to handle API requests, database operations, and real-time functionalities for the DurianChat application.

## Features
1. **User Management**
   - Registration, Login, Role-based access control.
2. **Real-Time Chat**
   - Chat Room management, message handling via WebSocket.
3. **Notification System**
   - Manage and send notifications to users.
4. **CRM Integration**
   - Connect and sync data with external CRM systems.
5. **Advanced Analytics**
   - Generate metrics for user behavior and system performance.
6. **Customizable Workflows**
   - Allow users to define and manage custom workflows.
7. **Fraud Detection**
   - Detect suspicious activities and provide alerts.

## Requirements
- **Golang** (version 1.20+)
- **PostgreSQL** for database management
- **Redis** for caching
- **Docker** (optional, for containerization)

## Setup
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd durianchat-backend
   ```

2. **Set up environment variables**
   Create a `.env` file in the project root:
   ```
   DATABASE_URL=postgres://username:password@host:port/database
   ```

3. **Run the application**
   ```bash
   go run cmd/main.go
   ```

4. **Using Docker**
   - Build the Docker image:
     ```bash
     docker build -t durianchat-backend .
     ```
   - Run the Docker container:
     ```bash
     docker run -p 8080:8080 durianchat-backend
     ```

## API Endpoints
| Endpoint                | Method | Description              |
|-------------------------|--------|--------------------------|
| `/api/login`            | POST   | User login               |
| `/api/register`         | POST   | User registration        |
| `/api/chat/rooms`       | GET    | Get chat rooms           |
| `/api/notifications`    | GET    | Fetch notifications      |
| `/api/analytics`        | GET    | Retrieve analytics data  |

## Contribution
1. Fork this repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit your changes: `git commit -m "Add a new feature"`.
4. Push the branch: `git push origin feature-branch`.
5. Open a pull request.

## License
This project is licensed under the MIT License.