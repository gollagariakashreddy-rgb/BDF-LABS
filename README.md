Lab 1: Node.js and Express Server
Name: GOLLAGARI AKASH REDDY
Registration Number: 252U1R6080
Section: CSE AIML 2B

Live Link
https://bdf-labs-lnxn.onrender.com Deployed using render platform successfully

Objective
To understand Node.js fundamentals and build a web server using the built-in HTTP module and Express.js.

Technologies Used
Node.js
Express.js
JavaScript
Project Structure
lab-01/
│
├── node_modules/          # Installed dependencies
│
├── screenshots/           # Screenshots of API responses
│   ├── home.png
│   ├── about.png
│   ├── time.png
│   └── 404.png
│
├── .gitignore             # Files ignored by Git
├── http-server.js         # Basic Node.js HTTP server
├── index.js               # Express server and API routes
├── package.json           # Project configuration and dependencies
├── package-lock.json      # Dependency version lock file
└── README.md              # Project documentation
Note: node_modules/ is generated automatically when dependencies are installed using npm install and is not committed to GitHub.

Installation and Execution
Clone the repository.
Navigate to the Lab_1 folder.
Install dependencies:
npm install
Run the Express server:
node index.js
Open http://localhost:3000 in your browser.
Endpoints
Method	Endpoint	Description	Status
GET	/	Welcome message	200
GET	/about	Returns name and section in JSON	200
GET	/time	Returns current date and time	200
GET	/contact	Unknown route response	404
Screenshots
<img width="1920" height="1047" alt="Screenshot 2026-11-01 200415" src="https://github.com/user-attachments/assets/54bfc565-c718-464f-a65a-347cb2957dae" />

Home Route
<img width="1920" height="1050" alt="Screenshot 2026-11-01 200451" src="https://github.com/user-attachments/assets/f7c9a2fa-e5df-4fa4-9109-09aed6f9bbf2" />

Home

About Route
About
<img width="1920" height="1041" alt="Screenshot 2026-11-01 200518" src="https://github.com/user-attachments/assets/c10e8ab3-a6f4-49b5-8c2a-3ef41c170bae" />

Time Route
Time

404 Error
<img width="1920" height="1022" alt="Screenshot 2026-11-01 200634" src="https://github.com/user-attachments/assets/196b007d-b53a-4936-b30c-9ec7c899c76c" />

404

Notes
Implemented a basic HTTP server using Node.js and recreated it using Express.js. Learned routing, handling requests and responses, HTTP status codes, and 404 error handling.
