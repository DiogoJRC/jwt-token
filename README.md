## JWT Token Generator and Validator

This project is a simple application built with Node.js and TypeScript to generate and validate JWT (JSON Web Tokens). It’s ideal for anyone looking to learn about token-based authentication and how to integrate JWTs in a Node.js application with TypeScript.

## Features

- <strong>Generate a JWT token</strong> using a secret key.
- <strong>Validate a JWT token</strong> to verify its authenticity and integrity.
- <strong>Token expiration:</strong> The token has a configurable expiration time

## Installation

Follow these steps to set up the project locally.

#### 1. Clone the repository

```bash
git clone https://github.com/DiogoJRC/jwt-token.git
```

#### 2. Install dependencies

```bash
yarn
```

#### 3. Create your secret key

Create a `.env` file in the root of your project and define your secret key for signing and verifying the JWT token:

```bash
JTW_SECRET=your_secret_key
```

You can replace `your_secret_key` with your actual secret key or a randomly generated one.

#### 4. Run the project

```bash
yarn dev
```
