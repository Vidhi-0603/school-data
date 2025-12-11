# School Data Management

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Vidhi-0603/school-data)

This is a full-stack web application built with Next.js for managing school records. It allows users to add new school details, including an image, and view a gallery of all submitted schools. The application uses a MySQL database for data persistence and Cloudinary for image storage.

## Features

-   **Add Schools**: A user-friendly form to input school details such as name, address, city, state, contact information, and email.
-   **Image Uploads**: Supports uploading school images, which are hosted on Cloudinary.
-   **Display Schools**: A gallery page that retrieves and displays all school records from the database.
-   **API Endpoints**: Backend API routes for creating and fetching school data.
-   **Dynamic Table Creation**: The application automatically creates the necessary `schools` table in the database if it doesn't already exist.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (with App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Form Management**: [React Hook Form](https://react-hook-form.com/)
-   **Database**: [MySQL](https://www.mysql.com/) (using `mysql2` driver)
-   **Image Storage**: [Cloudinary](https://cloudinary.com/)

## Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

-   Node.js (v18 or later)
-   A running MySQL database instance.
-   A Cloudinary account to obtain API credentials.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Vidhi-0603/school-data.git
    cd school-data
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of the project and add the following variables with your specific credentials:

    ```env
    # MySQL Database Configuration
    MYSQL_HOST=your_mysql_host
    MYSQL_USER=your_mysql_user
    MYSQL_PASSWORD=your_mysql_password
    MYSQL_DATABASE=your_mysql_database
    MYSQL_PORT=3306

    # Cloudinary Configuration
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

The core logic of the application is within the `app/` directory.

-   `app/page.jsx`: The homepage, which contains the form for adding a new school.
-   `app/show-schools/page.jsx`: The page responsible for fetching and displaying the list of all schools.
-   `app/api/`: Contains all backend API logic.
    -   `add-school/route.js`: Handles the POST request for creating a new school. It processes form data, uploads the image to Cloudinary, and inserts the record into the MySQL database.
    -   `get-schools/route.js`: Handles the GET request to fetch all school records from the database.
    -   `db.js`: Manages the MySQL connection pool.
    -   `create-table.js`: Contains the function to conditionally create the `schools` table in the database.

## API Endpoints

The application exposes the following API endpoints:

-   `POST /api/add-school`
    -   **Description**: Adds a new school to the database.
    -   **Request Body**: Expects `multipart/form-data` with the following fields:
        -   `name` (string)
        -   `address` (string)
        -   `city` (string)
        -   `state` (string)
        -   `contact` (string)
        -   `email_id` (string)
        -   `image` (file)
    -   **Response**: Returns a JSON object indicating success or failure.

-   `GET /api/get-schools`
    -   **Description**: Retrieves a list of all schools from the database.
    -   **Response**: Returns a JSON array of school objects.This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
