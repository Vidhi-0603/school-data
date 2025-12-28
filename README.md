# School Data Project

## Features
- **Add School**: Users can add new schools to the database.
- **Show Schools**: Users can view a list of all schools stored in the database.
- **API Integration**: The project includes API routes for adding and retrieving school data.

## Technologies Used
- **Frontend**: Next.js, React
- **Backend**: Node.js, Express
- **Database**: MySQL (or any other database you choose)

# School Data Management

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
    -   **Response**: Returns a JSON array of school objects.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/Vidhi-0603/school-data.git
   cd school-data
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the database and create the necessary tables.
4. Run the application:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints
- **GET /api/get-schools**: Retrieve a list of all schools.
- **POST /api/add-school**: Add a new school to the database.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
