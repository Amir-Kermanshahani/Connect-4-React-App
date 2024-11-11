# Connect-4 React App

This is a simple Connect-4 game built using React. The app provides a two-player mode where players alternate dropping pieces into the grid, with the objective of connecting four pieces in a row vertically or horizontally.

### Demo

![image](https://github.com/user-attachments/assets/76772fb0-ffd6-4e59-9269-add5eeb368df)

### Features
Interactive Connect-4 game with a 4x4 grid
Two-player mode with alternating turns
Winning streak detection (horizontal and vertical)

### Prerequisites

Ensure you have the following installed on your local machine:

**Node.js** (version 14 or above recommended)

**Git**

## Getting Started
Follow these instructions to set up and run the app locally.

**1. Clone the repository**

`git clone https://github.com/yourusername/connect-4-react.git`

`cd connect-4-react`

**2. Install dependecies**

Navigate into the project folder and install the necessary dependencies using npm:

`npm install`

**3. Run the app in development mode**

To start the app in development mode (with hot-reloading), use:

`npm start`

This will launch the app on http://localhost:3000. Open this URL in your browser to play the game.

## Building the Static Version

To build the app for static hosting (e.g., on GitHub Pages or another static server), follow these steps:

**1. Build the app**

`npm run build`

This will create a `build` directory containing the production-ready files.

**2. Serve the static files (optional)**

To test the build locally, you can use a simple HTTP server. If you have serve installed globally, run:

`npx serve -s build`

This command serves the static files from the build folder and makes the app available at http://localhost:5000.

## Deployment

You can deploy the contents of the `build` folder to any static hosting service.

##Technologies Used

**React** - A JavaScript library for building user interfaces

**CSS** - For styling the app

## License

This project is licensed under the MIT License.



