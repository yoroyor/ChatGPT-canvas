# ChatGPT-canvas
For experiment of ChatGPT canvas

## Steps to Build and Run the Application using Docker and Docker Compose

### Prerequisites
- Docker
- Docker Compose

### Steps

1. **Clone the Repository**
   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Build the Docker Images**
   Navigate to the directory where `docker-compose.yml` is located and run the following command to build the Docker images for both the frontend and backend services:
   ```sh
   docker-compose build
   ```

3. **Run the Containers**
   After building the images, run the containers using:
   ```sh
   docker-compose up
   ```
   This command will start both the frontend React app and the backend FastAPI service.

4. **Access the Application**
   - The frontend will be accessible at [http://localhost:3000](http://localhost:3000)
   - The backend API will be accessible at [http://localhost:8000](http://localhost:8000)

5. **Stop the Containers**
   To stop the running containers, use:
   ```sh
   docker-compose down
   ```

### Additional Notes
- Make sure to replace `YOUR_API_KEY` in `docker-compose.yml` with your actual Alpha Vantage API key before running the application.
