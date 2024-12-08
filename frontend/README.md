# DurianChat Frontend

## Overview
DurianChat is a feature-rich frontend application designed to provide seamless chat, analytics, and management functionalities. This project is built with React, TailwindCSS, and Vite to ensure high performance and responsiveness.

## Features
1. **Real-Time Chat**: Chat with users in real-time using Socket.IO.
2. **Notification System**: Real-time notifications for messages and activities.
3. **Unified Search**: Search chats, knowledge base articles, and files with filters.
4. **Behavioral Insights & Reporting**:
   - Customer Journey Mapping
   - Behavioral Tracking
   - Predictive Analytics
   - User Analytics
5. **Sentiment Dashboard**:
   - Sentiment Analysis (Positive, Neutral, Negative)
   - Feedback Loop
6. **Queue & SLA Dashboard**: Manage chat queues and track SLA performance.
7. **Gamification**: Points and badges to encourage user engagement.
8. **AI-Driven Recommendations**: Suggest products/services based on user behavior.
9. **Backup & Restore**: Data backup and recovery features.
10. **Voice & Video Chat**: Real-time voice and video communication.
11. **Multi-Tenant Support**: Support multiple organizations in a single system.
12. **Social Media Integration**: Connect with Facebook, LINE, and other platforms.
13. **Task Management**: Manage and assign tasks to team members.
14. **Workflow Automation**: Automate workflows to increase efficiency.
15. **Analytics Dashboard**: Visualize key metrics with interactive graphs.
16. **Fraud Detection**: Detect suspicious activities in chat and user interactions.
17. **Personalized Marketing**: Tailored marketing campaigns using analytics.
18. **Knowledge Base**: Centralized FAQs and help articles.
19. **Dynamic Forms**: Customizable forms for customer data collection.
20. **In-App Surveys**: Collect feedback directly in the app.
21. **AI-Based Conflict Detection**: Detect and flag potentially problematic messages.
22. **AI Moderation**: Filter inappropriate messages using AI.
23. **Real-Time Metrics Dashboard**: Monitor system performance and usage.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the frontend directory:
   ```bash
   cd durianchat-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Docker Setup

### Dockerfile
```dockerfile
# Use the official Node.js image
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the application
RUN npm run build

# Use Nginx for serving the built app
FROM nginx:stable-alpine

# Copy built files to Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
```

5. Build and run the Docker container:
   ```bash
   docker build -t durianchat-frontend .
   docker run -p 3000:80 durianchat-frontend
   ```

## Contribution
1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to the branch:
   ```bash
   git commit -m "Add new feature"
   git push origin feature-name
   ```
4. Open a pull request.

## License
This project is licensed under the MIT License.