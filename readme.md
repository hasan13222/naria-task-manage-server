## Naria Task (Backend)

### [Live URL](https://naria-task-manage-server.vercel.app)

### Follow the below instructions to run the application in your local machine

- First clone the github repository or download the zip file
- run "npm install" command. Thus you can get all the required dependencies required for the application
- create a .env file in the project root directory
- write .env following field as per your choice
  ```
  DB_URL="<MongoDB URL>"
  PORT=5000
  NODE_ENV=""
  SALT=12
  ACCESS_TOKEN_SECRET=""
  REFRESH_TOKEN_SECRET=""
  ACCESS_TOKEN_EXPIRES=""
  REFRESH_TOKEN_EXPIRES=""
  SMTP_PASSWORD="<smtp password for nodemailer. it is got from gmail>"
  CLIENT_URL="<client react url of local machine by running npm run dev>"
  ```
- then run "npm run dev" command to run the application as development mode in your machine

### API Endpoints:

## **User Routes**:

1.  **Sign Up** - **Route**: /auth/register (POST) 

    - **Request Body**:

            ```json
            {
            "name": "jamil",
            "email": "jamil8305@gmail.com",
            "password": "123456",
            "phone": "01849727154",
            "address": "Sobhanbag, Dhaka."
            }
            ```

        - **Response**:

            ```json
            {
              "success": true,
              "statusCode": 201,
              "message": "User registered successfully",
              "data": {
                "_id": "60d9c4e4f3b4b544b8b8d1f5",
                "name": "jamil",
                "email": "jamil8305@gmail.com",
                "phone": "01849727154",
                "address": "Sobhanbag, Dhaka.",
                "createdAt": "2024-06-10T13:26:51.289Z",
                "updatedAt": "2024-06-10T13:26:51.289Z",
                "__v": 0
              }
            }

            ```


2.  **Login** - **Route**: /auth/login (POST) 

    - **Request Body**:

            ```json
            {
            "email": "jamil8305@gmail.com",
            "password": "1234567"
            }
            ```

        - **Response**:

            ```json
            {
            "success": true,
            "statusCode": 200,
            "message": "User Logged In successfully",
            "data": {
                "user": {
                    "_id": "67a78cd3ee86364e4b9d613e",
                    "name": "jamil hasan",
                    "email": "jamil8305@gmail.com",
                    "password": "$2b$12$F6ftRoUqMvXRU9bdRsHb1.j45XF65LYt.KJQ.HIr1LU.pOcxOYvsu",
                    "phone": "01712454540",
                    "address": "Sobhanbag, Shere Bangla Nagar, Dhaka.",
                    "createdAt": "2025-02-08T16:56:51.724Z",
                    "updatedAt": "2025-02-09T15:40:58.453Z",
                    "__v": 0,
                    "profile_picture": "https://i.ibb.co/0RQLZybX/fp-jamil.jpg"
                },
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbWlsODMwNUBnbWFpbC5jb20iLCJ1c2VySWQiOiI2N2E3OGNkM2VlODYzNjRlNGI5ZDYxM2UiLCJpYXQiOjE3MzkyMDQ3MTQsImV4cCI6MTc0MTc5NjcxNH0.ezAWzTkcuiy9NvEF5oXRzkrcdtNX-Qd3bkYvC4lXu34",
                "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbWlsODMwNUBnbWFpbC5jb20iLCJ1c2VySWQiOiI2N2E3OGNkM2VlODYzNjRlNGI5ZDYxM2UiLCJpYXQiOjE3MzkyMDQ3MTQsImV4cCI6MTc0Njk4MDcxNH0.UOA5meMHnxSW7b-sEUvrDRewBpvQgJCa94s4qJ50Fi8"
            },
            "meta": null
            }

            ```

3.  **Get Profile** - **Route**: /auth/profile (GET) 

    - **Request Body**:

            ```json
            
            ```

        - **Response**:

            ```json
            {
            "success": true,
            "statusCode": 200,
            "message": "Profile Information Retrieved Successfully",
            "data": {
                "_id": "67a78cd3ee86364e4b9d613e",
                "name": "jamil hasan",
                "email": "jamil8305@gmail.com",
                "phone": "01712454540",
                "address": "Sobhanbag, Shere Bangla Nagar, Dhaka.",
                "createdAt": "2025-02-08T16:56:51.724Z",
                "updatedAt": "2025-02-09T15:40:58.453Z",
                "__v": 0,
                "profile_picture": "https://i.ibb.co/0RQLZybX/fp-jamil.jpg"
            },
            "meta": null
            }
            ```
4.  **PUT Profile** - **Route**: /auth/profile (PUT) -

     **Request Body**:

            ```json
            {
            "name": "jamil hasan",
            "phone": "012525252525",
            "address": "Sobhanbag, Shere Bangla Nagar, Dhaka.",
            "profile_picture": "https://i.ibb.co.com/pvR1Zsm/jamil.jpg"
            }
            ```

        - **Response**:

            ```json
            {
            "success": true,
            "statusCode": 200,
            "message": "Profile Information Retrieved Successfully",
            "data": {
                "_id": "67a78cd3ee86364e4b9d613e",
                "name": "jamil hasan",
                "email": "jamil8305@gmail.com",
                "phone": "01712454540",
                "address": "Sobhanbag, Shere Bangla Nagar, Dhaka.",
                "createdAt": "2025-02-08T16:56:51.724Z",
                "updatedAt": "2025-02-09T15:40:58.453Z",
                "__v": 0,
                "profile_picture": "https://i.ibb.co/0RQLZybX/fp-jamil.jpg"
            },
            "meta": null
            }

            ```

5.  **Forgot Password** - **Route**: /auth/forgot-password (POST) 

    - **Request Body**:

            ```json
            {
            "email": "jamil8305@gmail.com",
            }
            ```

        - **Response**:

            ```json
            {
              "success": true,
              "statusCode": 200,
              "message": "Reset Link sent to email successfully",
              "data": null,
            }

            ```

6.  **Reset Password** - **Route**: /auth/reset-password (POST) 

    - **Request Body**:

            ```json
            {
            "newPassword": "1234567"
            }
            ```

        - **Response**:

            ```json
            {
              "success": true,
              "statusCode": 200,
              "message": "Password reset successfully",
              "data": {
                "_id": "60d9c4e4f3b4b544b8b8d1f5",
                "name": "jamil",
                "email": "jamil8305@gmail.com",
                "phone": "01849727154",
                "address": "Sobhanbag, Dhaka.",
                "createdAt": "2024-06-10T13:26:51.289Z",
                "updatedAt": "2024-06-10T13:26:51.289Z",
                "__v": 0
              }
            }

            ```


## **Tasks Routes**:

1.  **Create Task** - **Route**: /tasks (POST) 

   - **Headers** 
    ```
    Authorization: 'Bearer token'
    ```
    - **Request Body**:

            ```json
            {
            "title": "task title 2",
            "description": "I go to x office at 12:00am",
            "due_date": "02-09-2025",
            "status": "todo",
            "userId": "67a78cd3ee86364e4b9d613e"
            }
            ```

        - **Response**:

            ```json
            {
            "success": true,
            "statusCode": 201,
            "message": "Task created successfully",
            "data": {
                "userId": "67a78cd3ee86364e4b9d613e",
                "title": "task title 2",
                "description": "I go to x office at 12:00am",
                "due_date": "02-09-2025",
                "status": "todo",
                "_id": "67aa2ae2cbd914381899314b",
                "createdAt": "2025-02-10T16:35:46.873Z",
                "updatedAt": "2025-02-10T16:35:46.873Z",
                "__v": 0
            },
            "meta": null
            }

            ```
2.  **my Tasks** - **Route**: /tasks (GET) 

   - **Headers** 
    ```
    Authorization: 'Bearer token'
    ```
    - **Request Body**:

            ```json
            
            ```

        - **Response**:

            ```json
            {
            "success": true,
            "statusCode": 200,
            "message": "Task retrieved successfully.",
            "data": [
                {
                    "_id": "67aa2ae2cbd914381899314b",
                    "userId": "67a78cd3ee86364e4b9d613e",
                    "title": "task title 2",
                    "description": "I go to x office at 12:00am",
                    "due_date": "02-09-2025",
                    "status": "todo",
                    "createdAt": "2025-02-10T16:35:46.873Z",
                    "updatedAt": "2025-02-10T16:35:46.873Z",
                    "__v": 0
                },
            ]
            }

            ```
3.  **get single task** - **Route**: /tasks/:id (GET) 

   - **Headers** 
    ```
    Authorization: 'Bearer token'
    ```
    - **Request Body**:

            ```json
            
            ```

        - **Response**:

            ```json
            {
            "success": true,
            "statusCode": 200,
            "message": "Task retrieved successfully",
            "data": {
                "_id": "67aa2ae2cbd914381899314b",
                "userId": "67a78cd3ee86364e4b9d613e",
                "title": "task title 2",
                "description": "I go to x office at 12:00am",
                "due_date": "02-09-2025",
                "status": "todo",
                "createdAt": "2025-02-10T16:35:46.873Z",
                "updatedAt": "2025-02-10T16:35:46.873Z",
                "__v": 0
            },
            "meta": null
            }

            ```
4.  **update single task** - **Route**: /tasks/:id (PUT) 

   - **Headers** 
    ```
    Authorization: 'Bearer token'
    ```
    - **Request Body**:

            ```json
            {
                "status": "ongoin"
            }
            ```

        - **Response**:

            ```json
            {
                "success": true,
                "statusCode": 200,
                "message": "Task updated successfully",
                "data": {
                    "_id": "67aa2ae2cbd914381899314b",
                    "userId": "67a78cd3ee86364e4b9d613e",
                    "title": "task title 2",
                    "description": "I go to x office at 12:00am",
                    "due_date": "02-09-2025",
                    "status": "ongoing",
                    "createdAt": "2025-02-10T16:35:46.873Z",
                    "updatedAt": "2025-02-10T16:44:14.771Z",
                    "__v": 0
                },
                "meta": null
            }

            ```
5.  **delete single task** - **Route**: /tasks/:id (DELETE) 

   - **Headers** 
    ```
    Authorization: 'Bearer token'
    ```
    - **Request Body**:

            ```json
            
            ```

        - **Response**:

            ```json
            {
                "success": true,
                "statusCode": 200,
                "message": "Task deleted successfully",
                "data": {
                    "_id": "67aa2ae2cbd914381899314b",
                    "userId": "67a78cd3ee86364e4b9d613e",
                    "title": "task title 2",
                    "description": "I go to x office at 12:00am",
                    "due_date": "02-09-2025",
                    "status": "ongoing",
                    "createdAt": "2025-02-10T16:35:46.873Z",
                    "updatedAt": "2025-02-10T16:44:14.771Z",
                    "__v": 0
                },
                "meta": null
            }

            ```

### Security Measures

To Store password, password is hashed by bcrypt. for secure endpoint token is stored in client cookie. Token is
created by jwt.
