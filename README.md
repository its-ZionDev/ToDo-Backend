# Todo List Application

## Overview

This is a simple Todo List application built with Node.js and Express. It supports the following features:
- Fetching the list of todos with optional search and filters
- Adding a new todo item
- Updating an existing todo item
- Deleting a todo item
- Marking a todo item as completed

## API Endpoints

- `GET /api/todos`: Retrieve the list of todos with optional search and filters.
- `POST /api/todos`: Add a new todo item.
- `PUT /api/todos/:id`: Update an existing todo item.
- `DELETE /api/todos/:id`: Remove a todo item.
- `PATCH /api/todos/:id/done`: Mark a todo item as completed.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd todo-list-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm start
    ```

4. The server will be running at `http://localhost:3000`.

## Implementation Details

- The application uses the filesystem to store todo items in `data/todos.json`.
- The application keeps track of the last used `id` in `data/lastId.json` to ensure todos have serial IDs.
- The `todoRoutes.js` file defines the API endpoints and handles CRUD operations.
- Error handling and proper status codes are implemented for each endpoint.

## Postman Usage

You can use Postman to test the API endpoints. Follow these steps:

1. **Fetch Todos**
    - **Method**: GET
    - **URL**: `http://localhost:3000/api/todos`
    - **Optional Query Parameters**:
        - `search`: Search term for filtering todos by title or description.
        - `date`: Filter todos by the date of the last update.
    - **Example**:
        ```http
        GET http://localhost:3000/api/todos?search=example&date=2024-07-29
        ```

2. **Add a New Todo**
    - **Method**: POST
    - **URL**: `http://localhost:3000/api/todos`
    - **Body**: (raw JSON)
        ```json
        {
            "title": "New Todo",
            "description": "Todo description"
        }
        ```

3. **Update a Todo**
    - **Method**: PUT
    - **URL**: `http://localhost:3000/api/todos/:id`
    - **Body**: (raw JSON)
        ```json
        {
            "title": "Updated Todo",
            "description": "Updated description"
        }
        ```

4. **Delete a Todo**
    - **Method**: DELETE
    - **URL**: `http://localhost:3000/api/todos/:id`

5. **Mark a Todo as Done**
    - **Method**: PATCH
    - **URL**: `http://localhost:3000/api/todos/:id/done`

## Examples

### Fetch Todos
1. Open Postman.
2. Select `GET` method.
3. Enter `http://localhost:3000/api/todos` in the URL field.
4. Click `Send`.

### Add a New Todo
1. Open Postman.
2. Select `POST` method.
3. Enter `http://localhost:3000/api/todos` in the URL field.
4. Select `Body` tab.
5. Choose `raw` and `JSON` format.
6. Enter the following JSON:
    ```json
    {
        "title": "New Todo",
        "description": "Todo description"
    }
    ```
7. Click `Send`.

### Update a Todo
1. Open Postman.
2. Select `PUT` method.
3. Enter `http://localhost:3000/api/todos/:id` (replace `:id` with the actual todo ID) in the URL field.
4. Select `Body` tab.
5. Choose `raw` and `JSON` format.
6. Enter the following JSON:
    ```json
    {
        "title": "Updated Todo",
        "description": "Updated description"
    }
    ```
7. Click `Send`.

### Delete a Todo
1. Open Postman.
2. Select `DELETE` method.
3. Enter `http://localhost:3000/api/todos/:id` (replace `:id` with the actual todo ID) in the URL field.
4. Click `Send`.

### Mark a Todo as Done
1. Open Postman.
2. Select `PATCH` method.
3. Enter `http://localhost:3000/api/todos/:id/done` (replace `:id` with the actual todo ID) in the URL field.
4. Click `Send`.

## Code Quality

- The code is organized into modules for scalability.
- Proper error handling and status codes are implemented.
- The API routes are clearly defined and separated in
