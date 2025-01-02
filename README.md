Indian Representatives API
This project is a simple Express.js and MongoDB-based API that helps users fetch and update information about Indian public representatives based on their locality. It includes a minimal front-end for interacting with the API and allows both fetching and adding representatives to the database.

Features
Fetch Representatives: Retrieve a list of representatives for a specific locality.
Add Representatives: Add new representatives to an existing locality or create a new locality with representatives.
MongoDB Integration: Data is stored in MongoDB Atlas for scalability and reliability.
RESTful Endpoints: Clean and structured API routes for easy interaction.
Interactive Frontend: A basic web interface for user interaction.
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB Atlas
Frontend: HTML, CSS, JavaScript (basic form-based interaction)
Installation
Clone the Repository


git clone https://github.com/your-username/indian-representatives-api.git  
cd indian-representatives-api  
Install Dependencies


npm install  
Set Up MongoDB Atlas

Create a MongoDB Atlas account and set up a cluster.
Whitelist your IP address.
Create a database named representatives_db with a collection called representatives.
Copy your connection string and replace <username>, <password>, and <cluster-url> with your details.
Create a .env File
Inside the root folder, create a .env file and add:

PORT=3000  
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/representatives_db  
Start the Server

npm start  
Visit http://localhost:3000 to view the application.

API Endpoints
1. Get Representatives by Locality
Endpoint: GET /representatives/:locality
Description: Fetches representatives for the specified locality.
Response Example:

[  
  {  
    "name": "John Doe",  
    "designation": "Mayor",  
    "phone": "123-456-7890",  
    "email": "john.doe@example.com"  
  }  
]  
3. Add Representative
Endpoint: POST /representatives/:locality
Description: Adds a representative to an existing locality or creates a new locality if it doesn’t exist.
Request Body Example:

{  
  "name": "Jane Smith",  
  "designation": "Councillor",  
  "phone": "987-654-3210",  
  "email": "jane.smith@example.com"  
}  
Frontend
A basic web page is included for easy interaction with the API.

Enter a locality name to fetch representatives.
Add representative details to create or update locality data.
The front-end is served from the /public directory.

Notes
Ensure your MongoDB Atlas connection string is correctly configured in the .env file.
Test the API endpoints using tools like Postman or directly via the front-end interface.
License
This project is open-source and available under the MIT License.

Feel free to contribute or report issues! 😊

![Screenshot 2025-01-02 165243](https://github.com/user-attachments/assets/ba797356-afcd-4890-8e31-6f443941f220)


![Screenshot 2025-01-02 165252](https://github.com/user-attachments/assets/a331d929-d708-459d-aa3b-7c1aca811614)
![Screenshot 2025-01-02 165302](https://github.com/user-attachments/assets/d9591846-7477-45a2-93cd-d11ae736d7dd)

![Screenshot 2025-01-02 165316](https://github.com/user-attachments/assets/66307e2c-0b88-4e73-88a1-4e4ec9f32602)
![Screenshot 2025-01-02 165944](https://github.com/user-attachments/assets/ed3c513d-99ea-424b-8d11-95137f088863)

more work can be done on the front end and also more data can be added ,  the main issue the project was targeting was to organize the decentralized information and insufficient updates . More work can has to
be done in this project wherein we can make the project easy to use for non tech users . i have deployed the project using render , you can check it out 
here -
https://my-backend-api-5-y09q.onrender.com

if you have any doubt or issues my mail - volttop7@gmail.com

Have a nice day 
