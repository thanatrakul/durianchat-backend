# Chat Project

## Overview
The **Chat Project** combines a **Frontend** and **Backend** to deliver a full-stack chat application. It supports real-time communication, notifications, CRM integration, analytics, and customizable workflows.

## Features
1. **Frontend**:
   - Built with React and TailwindCSS.
   - Real-time chat interface.
   - Notifications and workflow builder.

2. **Backend**:
   - Built with Golang.
   - API for chat, analytics, CRM integration, and fraud detection.
   - JWT-based authentication.

3. **Database**:
   - PostgreSQL for structured data storage.

## Prerequisites
- Docker and Docker Compose installed.
- At least 2GB of free memory for the containers.

## Setup Instructions

### 1. Clone the Project
```bash
git clone <repository-url>
cd Chat
```

### 2. Start the Application
Run the following command to start the application:
```bash
docker-compose up --build
```

### 3. Access the Application
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend**: [http://localhost:8080](http://localhost:8080)
- **Database**: PostgreSQL runs on port `5432`.

### 4. Environment Variables
The backend uses the following environment variables:
- `DATABASE_URL`: PostgreSQL connection string.

The frontend uses:
- `REACT_APP_API_URL`: API endpoint for the backend.

### 5. Stopping the Application
To stop the application and remove all containers:
```bash
docker-compose down
```

### 6. Cleaning Up
To remove volumes (such as the database):
```bash
docker-compose down -v
```

## Project Structure
```
Chat/
├── backend/          # Backend source code (Golang)
├── frontend/         # Frontend source code (React)
├── docker-compose.yml # Docker Compose file for orchestration
└── README.md         # Project documentation
```

## License
This project is licensed under the MIT License.