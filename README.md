                                            -------------------  HOW TO RUN  -------------------

Prerequisites
- Docker Desktop (for Windows/Mac) or Docker Engine (for Linux) must be installed and running.
- A command-line interface (like Command Prompt, PowerShell, Git Bash, or a terminal on Linux/Mac).

----------------------------------------------------------------------------------------------------------------------------------------------------------

1. Navigate to the Project Directory:
Open your terminal and change the directory to the root of this project, where the `Dockerfile` files are located.

----------------------------------------------------------------------------------------------------------------------------------------------------------

2. Build the Docker Image:
Run the following command to build the Docker image. This will read the `Dockerfile`, download the necessary dependencies, and package the application.
  docker build -t rarecrew-task .

----------------------------------------------------------------------------------------------------------------------------------------------------------

3. Run the Docker Container:
Once the image is built, run it as a container with the command below.
  docker run -p 8080:80 rarecrew-angular-app

----------------------------------------------------------------------------------------------------------------------------------------------------------

4. Access the Application:
The application is now running! Open your web browser and navigate to:
   http://localhost:8080
