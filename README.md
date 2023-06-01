# Prac 10.2D

## Node.js Calculator Web App
This repository hosts a Calculator Web App, a cloud-native microservice-based application built with Node.js and Express. The app utilizes MongoDB as its database and is deployed on Google Kubernetes Engine (GKE).

## Overview
The app is a simple calculator with a web-based interface. It can perform basic arithmetic operations and is able to create, read, update, and delete entries in the database.

The architecture of the app consists of three services:

Calculator Frontend: This LoadBalancer service serves the user interface of the calculator. It is responsible for routing user requests to the correct service.

Calculator Backend: This ClusterIP service handles the calculations and interacts with the MongoDB database.

MongoDB Database: This ClusterIP service is the database for the app. It stores all the calculation entries.

While these services can be deployed individually, all of them need to be running for the full functionality of the app.

## Deployment
### To deploy the Node.js Calculator Web App, follow these steps:

#### Open a Command Prompt on your system.
#### Initialize the Google Cloud SDK by running the following command:
gcloud init
#### Install the GCloud Auth Plugin by running the following command:
gcloud components install gke-gcloud-auth-plugin
#### Navigate to the folder where you have all the source code and Dockerfile using the following command:
cd C:\Users\benny\OneDrive\Documents\SIT323
#### Build the Docker image by running the following command:
docker build -t gcr.io/sit323-388410/node-web-app:latest .
#### Push the Docker image to the Google Container Registry (gcr) by running the following command:
docker push gcr.io/sit323-388410/node-web-app:latest
#### Install kubectl if it's not already installed:
gcloud components install kubectl
#### Create the cluster on Google Kubernetes Engine (GKE) by running the following command:
gcloud container clusters create-auto hello-cluster --region=us-west1
#### Connect to the cluster by running the following command:
gcloud container clusters get-credentials hello-cluster --region=us-west1
#### Create the deployment on the cluster by applying the Kubernetes manifests using the following command:
kubectl apply -f kubernetes-manifests
  
These steps will deploy the app and set up the necessary infrastructure on GKE.

Please note that your cloudbuild.yaml file includes steps to update the backend and frontend simultaneously. This is achieved by duplicating the steps and modifying the args accordingly.

## CI/CD Pipeline
The implementation of the CI/CD pipeline for this app had its challenges, particularly related to service account permissions. Ensuring that the service account used by the CI/CD pipeline had the necessary permissions to access resources such as GKE and other services was a crucial step.

The setup initially involved trying a standard cluster, but after facing difficulties, the decision was made to use an Autopilot cluster for deployment. This shift allowed for easier management and reduced the complexities associated with a standard cluster.

While the implementation process required some trial and error, the CI/CD pipeline now provides several benefits to the development and deployment workflow. It enables automated building, testing, and deployment of the application, reducing manual errors and improving overall efficiency.


## Conclusion
The Node.js Calculator Web App is a cloud-native microservice-based application deployed on GKE. With the CI/CD pipeline in place, the app benefits from automated building, testing, and deployment processes. The deployment environment did not require the use of scaffolds. The challenges faced during the implementation of the CI/CD pipeline, including service account permissions and the use of an Autopilot cluster, were overcome to ensure a smooth deployment process.
  
