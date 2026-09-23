# Contact Form API

A REST API for storing contact form submissions.

## Features

- Contact form data submission to MongoDB via **POST** `/contacts`
- Retrieve all submissions via **GET** `/contacts`
- Schema validation for required fields using **express-validator**
- Automated API testing with **Playwright**
- Continuous Integration via **GitHub Actions**

## Getting Started

**1. Clone the repository:**
```bash
git clone <repo-url>
```
**2. Navigate into the project folder:**
```bash
cd contact-form
```
**3. Install dependencies:**
```bash
npm install
```
**4. Environment Variables:**   
Create a `.env` file at the root.   

**5. Start the server:**
```bash
npm start
```

## Testing
Run the tests:
```bash
npm run test:api
```

## Technologies Used

- Node.js & Express – Backend server
- MongoDB – Database
- express-validator – Schema validation
- Playwright – API testing
- GitHub Actions – CI 
- HTML / CSS / JavaScript – Frontend