````
# Users Repository

This repository contains a simple React application that displays a data table of users. Users can be filtered based on their name, email, role, and phone number upon the login.

## Getting Started

To get started with the application, follow the instructions below:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/ram-kumar-shrestha/users.git
````

2. Navigate to the project directory:

```bash
cd users
```

3. Install the required dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Features

- Login page and authentication.
- Display a data table with user information (name, email, role, phone number).
- Filter users based on their name, email, role, and phone number using the search functionality.
- Filter users by their role using the role filter dropdown.

## Project Structure

The important directories and files are as follows:

- `src/components`: Contains the reusable components used in the application.
- `src/ui` : Has various ui elements.
- `src/data/users.json`: Stores the user data in JSON format.
- `src/App.js`: The main application component that renders all the component based on routing.
- `src/pages/login/index.jsx`: The component which enables users to login and see the users list.
- `src/pages/dashboard/index.jsx`: The compoonent responsible for displaying greeting message along with digital clock.
- `src/pages/users/index.jsx`: The component responsible for displaying the user table and handling search and filter functionality.

## Dependencies

The application uses the following main dependencies:

- React: A JavaScript library for building user interfaces.
- react-dom: Provides DOM-specific methods that can be used at the top level of your app.
- feather-icons-react: A package for icons.
