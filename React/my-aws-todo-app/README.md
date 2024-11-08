# Getting Started with My AWS Todo App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is a simple to-do list application built with React and integrated with **AWS Simple Notification Service (SNS)** for sending notifications upon adding a new task.

## AWS Integration Details

This app is configured to send notifications to AWS SNS each time a new task is added. The setup involves:

- Configuring AWS SDK in React to communicate with AWS services.
- Setting up an SNS Topic in AWS for notifications.
- Storing AWS credentials securely via environment variables.

## Technologies Used

- **React** - For building the user interface.
- **AWS SNS** - For sending notifications when a new task is added.
- **AWS SDK** - To connect the application to AWS services.
- **Tailwind CSS** - For styling the application.
- **useState** - React hook for managing component state.
- **useRef** - React hook for referencing DOM elements.
- **Environment Variables (.env)** - To securely store sensitive AWS credentials.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload if you make edits.  
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and filenames include hashes.  
Your app is ready for deployment!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you're not satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## AWS SNS Setup Instructions

1. **AWS SNS Topic Creation**:
   - Go to the AWS SNS dashboard and create a new topic (e.g., `TaskUpdates`).
   - Note the **Topic ARN** for later use.

2. **Environment Variables**:
   - In the project root, create a `.env` file to store AWS credentials securely.
   - Add the following lines to `.env`:

     ```plaintext
     REACT_APP_ACCESS_KEY_ID=your_aws_access_key_id
     REACT_APP_SECRET_ACCESS_KEY=your_aws_secret_access_key
     REACT_APP_REGION=your_aws_region # e.g., "eu-north-1"
     REACT_APP_TOPIC_ARN=your_sns_topic_arn
     ```

3. **Run the App**:
   - Start the app with `npm start` and test adding tasks. Notifications should be sent to the SNS topic specified.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved to [Code Splitting Documentation](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved to [Analyzing the Bundle Size Documentation](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved to [Progressive Web App Documentation](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved to [Advanced Configuration Documentation](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved to [Deployment Documentation](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved to [Troubleshooting Documentation](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
