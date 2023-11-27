###### <div align=center>[UKR](README.md)</div>

# <div align=center> "Your Pet"</div>

### <div align=center>This repository contains the derivative code of the backend part of the "Your Pet" service.</div>

#### ""Your Pet" is a web service designed to help find new homes for any beloved pets. The main page can be found here. [Your Pet](https://pavelpereverzev1.github.io/yourPets-project-front/). The backend part handles requests, user registration and authentication, as well as interacts with the database and cloud storage to store and retrieve data about animals.

---

### <div align=center>Used technologies and libraries:</div>

- `Node.js`: A platform for executing JavaScript code on the server.
- `Express.js`: A web framework for building web applications.
- `MongoDB`: Document-oriented database for storing information about animals and users.
- `Mongoose`: Object-Document Mapper (ODM) package for simplifying interaction with MongoDB.
- `JSON Web Token (JWT)`: A standard for creating user access tokens.
- `swagger-ui-express`: UI for API documentation for convenient viewing and testing of the API.
- `bcrypt`: Hashing passwords to ensure user security.
- `cloudinary`: Management of multimedia resources in cloud storage.
- `cors`: Configuring Same-Origin Policy for secure access to server resources from the browser.
- `cross-env`: Convenient environment variable setup independent of the platform.
- `date-fns`: Utilities for working with dates and times in JavaScript.
- `dotenv`: Loading environment variables from a .env file to store confidential information.
- `joi`: Data validation to ensure the accuracy of entered information.
- `morgan`: Logging HTTP requests for server activity analysis.
- `multer`: Processing forms and file uploads on the server.

---

### <div align=center>Project structure:</div>

- `server.js`: Main server file.
- `routes/`: Directory containing route definitions for API endpoints.
- `controllers/`: Directory containing controllers for handling requests.
- `models/`: Directory containing Mongoose models for the database.
- `middlewares/`: Directory containing middleware functions for data processing.
- `helpers/` : Directory with additional utility functions.

---

### <div align=center>API documentation. (Swagger)</div>

###### <div align=center>The complete description of the backend part, done using Swagger, can be viewed at the following address: [API DOCS](https://yourpets-project-backend.onrender.com/api-docs/).</div>

---
