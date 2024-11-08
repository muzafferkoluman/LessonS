# Task Manager Application

This is a simple Task Manager application built with **React** and integrated with **AWS Lambda** and **API Gateway** to handle backend operations. The application allows users to add tasks, which are sent to an AWS Lambda function via API Gateway and stored or processed as needed.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **AWS Lambda**: Serverless compute service to execute backend code for handling task requests.
- **AWS API Gateway**: Used to expose the Lambda function as an HTTP endpoint.
- **Axios**: Library for making HTTP requests from the frontend to the API Gateway endpoint.
- **Node.js**: Runtime environment for the Lambda function.
- **JavaScript (ES6)**: Used throughout the project for both frontend and backend logic.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

To run the application, ensure you have the following installed:

- **Node.js** (v14 or later recommended)
- **npm** (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-manager-app.git
   cd task-manager-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update `App.js` with the correct API Gateway endpoint URL:
   ```javascript
   const apiUrl = 'https://your-api-id.execute-api.region.amazonaws.com/dev/tasks';
   ```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the test runner in interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React and optimizes the build for best performance.

## AWS Setup Guide

### 1. AWS Lambda

- Go to AWS Lambda in your AWS Console.
- Create a new function with **Node.js** as the runtime.
- Add the following handler code:

  ```javascript
  exports.handler = async (event) => {
      const requestBody = JSON.parse(event.body);
      const taskName = requestBody.name;

      return {
          statusCode: 200,
          body: JSON.stringify({ message: `Task ${taskName} added successfully!` }),
      };
  };
  ```

- Save and deploy the function.

### 2. API Gateway

- Go to API Gateway and create a new **HTTP API**.
- Integrate your Lambda function with the API Gateway.
- Enable **CORS** in API Gateway to allow requests from `http://localhost:3000`.
- Deploy the API and note the **Invoke URL**.

### 3. Testing the Lambda Function

Use **Postman** or **curl** to test the endpoint with a POST request:

```bash
curl -X POST https://your-api-id.execute-api.region.amazonaws.com/dev/tasks \
-H "Content-Type: application/json" \
-d '{"name": "Sample Task"}'
```

You should receive a response similar to:
```json
{
  "message": "Task Sample Task added successfully!"
}
```

## How to Use the Application

1. Start the React app by running:
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.
3. Enter a task name and click **Add Task** to submit the task to the backend.

## Additional Configuration and Deployment

For deployment and advanced configuration details, refer to the following resources:

- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [AWS API Gateway Documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
- [React Deployment Guide](https://facebook.github.io/create-react-app/docs/deployment)
