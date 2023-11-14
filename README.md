# URL Shortener

## Overview

Welcome to the URL Shortener project! This simple yet powerful tool allows you to shorten long URLs, making them more manageable and easy to share. The project is built using Node.js and Express for the backend, and MongoDB for the database. For the frontend, server-side rendering is achieved using EJS.

## Features

- **Shorten URLs:** Easily create short versions of long URLs.
- **Custom Short URLs:** Optionally, customize the shortened URL for easy recall.
- **Click Tracking:** Track the number of clicks on each shortened URL.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MohitBhatt07/Url-Shortener.git
   ```

2. Navigate to the project directory:
   ```bash
   cd url-shortener
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Configure the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     PORT=3000
     MONGODB_URI=your-mongodb-uri
     ```

5. Run the application:
   ```bash
   npm start
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to use the URL Shortener.

## Usage

1. Enter a long URL in the provided input field.
2. Optionally, customize the short URL.
3. Click the "Shorten" button.
4. Copy and share the shortened URL.

## Technology Stack

- **Backend:**
  - Node.js
  - Express

- **Database:**
  - MongoDB

- **Frontend:**
  - EJS (Embedded JavaScript)

## Contributing

Feel free to contribute to the project! Whether it's bug fixes, feature enhancements, or documentation improvements, every contribution is welcome. Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to the Node.js, Express, MongoDB, and EJS communities for creating awesome tools and frameworks.

Happy URL Shortening! 🚀
