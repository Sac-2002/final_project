# 🚀 Final DevOps Project – CI/CD Pipeline using GitHub Actions & Docker

This project is built as part of my DevOps internship at **Elevate Labs**.  
It demonstrates a complete **CI/CD pipeline** using **GitHub Actions**, **Docker**, and **DockerHub**, without using any cloud platform.

---



## 📌 Objective

- Automate the build and deployment process of a Node.js application
- Use GitHub Actions for CI/CD
- Build a Docker image and push it to DockerHub
- Run the app locally using Docker

---




## 🛠 Tools Used

- GitHub & GitHub Actions
- Docker & DockerHub
- Node.js
- Visual Studio Code

---

## 📁 Project Structure
final-devops-project/ ├── index.js ├── package.json ├── Dockerfile └── .github/ └── workflows/ └── ci-cd.yml





## ⚙️ CI/CD Pipeline Steps

1. On every push to the `main` branch:
   - GitHub Actions triggers the workflow
   - Code is checked out
   - Docker image is built
   - Docker image is pushed to DockerHub

2. Image can be pulled and run locally:
   ```bash
   docker pull sac2002/devops-final:latest
   docker run -p 3000:3000 sac2002/devops-final

After running the container:
🚀 Hello from CI/CD Pipeline!!





🔐 Security
DockerHub credentials are stored securely using GitHub Secrets

DOCKER_USERNAME
DOCKER_PASSWORD (Access Token)




✅ Conclusion
Through this project, I learned how to:

Build a CI/CD pipeline from scratch

Work with Docker images & containers

Use GitHub Actions for automation

Securely manage credentials

Deploy and test an app like a real DevOps engineer




🙌 Credits
Thanks to Elevate Labs for the internship experience that inspired this project.
Built with passion and learning by Sachin Suresh More ✨