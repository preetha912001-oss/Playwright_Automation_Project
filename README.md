# Playwright Automation Project

## Project Overview

This repository contains my hands-on automation testing practice using **Playwright with TypeScript**.

The project covers Web UI Automation, Page Object Model (POM), API Automation, reusable helper methods, and test execution using Playwright.

## Technologies Used

- Playwright
- TypeScript
- JavaScript
- Node.js
- Visual Studio Code
- Git and GitHub

## Project Structure

```text
Playwright/
│
├── .github/
│
├── Data/
│
├── Pages/
│
├── helper/
│
├── tests/
│   ├── UI/
│   └── api/
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

## Automation Coverage

### 1. UI Automation

- Web application testing
- Locators and assertions
- Handling alerts and frames
- Form interactions
- Page navigation
- Element visibility and validation
- Browser automation

### 2. Page Object Model (POM)

- Implementing Page Object Model
- Creating reusable page classes and methods
- Separating test logic from page actions
- Managing locators
- Using helper methods for reusable operations

### 3. API Automation

- API testing using Playwright APIRequestContext
- GET, POST, PATCH and DELETE requests
- CRUD operations
- API response validation
- Status code verification
- Request and response handling
- API authentication using tokens

## Browser Support

Playwright supports the following browser engines:

- Chromium
- Firefox
- WebKit

Test execution depends on the browser projects configured in `playwright.config.ts`.

## Installation and Setup

### Prerequisites

- Node.js
- Visual Studio Code
- Git

### Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Navigate to the Project

```bash
cd Playwright
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

Configure the required environment variables and test credentials locally before executing tests.

## Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run UI Tests

```bash
npx playwright test tests/UI
```

### Run API Tests

```bash
npx playwright test tests/api
```

### Run a Specific Test File

```bash
npx playwright test path/to/test.spec.ts
```

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

## HTML Test Reports

Playwright HTML Reporter is configured for test execution.

To view the HTML report:

```bash
npx playwright show-report
```

The report provides test execution results, including passed, failed and skipped tests, along with error details.

## Version Control

Git and GitHub are used for source code management and project version control.

Sensitive information such as passwords, API credentials, access tokens, and authentication storage states are excluded using `.gitignore`.

## Note

This project is developed using Playwright with TypeScript to demonstrate Web UI Automation, Page Object Model (POM), and API Testing. It focuses on building reusable, structured, and maintainable automation test scripts.