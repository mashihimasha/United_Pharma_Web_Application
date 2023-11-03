## Project Folder Structure

Below is the folder structure for this project:

src/
|-- assets/
|   |-- images/               # Store images used in your website
|   |-- styles/               # CSS or SCSS files for styling
|-- components/
|   |-- common/               # Reusable components (e.g., Header, Footer)
|   |-- product/              # Components related to displaying products
|   |-- cart/                 # Components related to the shopping cart
|   |-- checkout/             # Components for the checkout process
|   |-- user/                 # Components related to user authentication and profile
|-- pages/
|   |-- Home.js               # Home page component
|   |-- ProductList.js        # Product list page
|   |-- ProductDetail.js      # Product detail page
|   |-- Cart.js               # Shopping cart page
|   |-- Checkout.js           # Checkout page
|   |-- UserProfile.js        # User profile page
|-- context/
|   |-- CartContext.js        # Context for managing shopping cart state
|-- utils/
|   |-- api.js                # API requests and functions
|-- App.js                    # Main application component
|-- index.js                  # Entry point to render the application
|-- routes.js                 # Define application routes (if not using a routing library)
public/
|-- index.html                # HTML template
|-- manifest.json             # Web App Manifest (for Progressive Web App)
|-- favicon.ico               # Favicon (website icon)
|-- assets/                   # Static assets (e.g., images, fonts)

In this structure:
- `src/` contains the source code of the application.
- `components/` stores React components, organized by functionality.
- `pages/` contains individual page components.
- `context/` is for state management context providers.
- `utils/` includes utility functions.
- `public/` contains static assets and the HTML template.


# Coding and Commenting Style Guide

This document outlines the coding and commenting style to be followed by all team members when contributing to this project. Consistent coding practices improve code quality, readability, and collaboration.

## Table of Contents

1. [JavaScript and React Coding Style](#javascript-and-react-coding-style)
2. [File and Folder Naming](#file-and-folder-naming)
3. [Code Formatting](#code-formatting)
4. [Comments and Documentation](#comments-and-documentation)

---

## JavaScript and React Coding Style

- Use [ESLint](https://eslint.org/) for JavaScript linting and follow the provided ESLint configuration in the project.
- Adhere to the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with project-specific modifications, if necessary.
- Use functional components for React when possible.
- Avoid using deprecated or outdated libraries and features.

## File and Folder Naming

- Use meaningful and descriptive names for files and folders.
- Use camelCase for JavaScript and React files (e.g., `myComponent.js`).
- Use kebab-case for CSS and SCSS files (e.g., `my-component.css`).
- Use PascalCase for React component names (e.g., `MyComponent.js`).

## Code Formatting

- Maintain consistent code formatting throughout the project.
- Use 2 spaces for indentation.
- Limit lines to a maximum of 80 characters.
- Use double quotes for strings.
- Avoid trailing white spaces.
- Ensure consistent use of semicolons.

## Comments and Documentation

- Write clear and concise comments to explain complex logic or non-obvious functionality.
- Use JSDoc-style comments for documenting functions and methods.
- Include author names and dates in code comments when necessary.
- Keep comments up-to-date with code changes.

### Example JSDoc Comment:

```javascript
/**
 * Calculate the sum of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function calculateSum(a, b) {
  return a + b;
}
