🔗 URL Shortener API

A simple backend service to shorten URLs with expiry and analytics support.
Built using Node.js, Express, and MongoDB.

🚀 Features

🔒 Generate short links for long URLs

✨ Option to provide a custom short code

⏳ Set expiry (validity in minutes)

📊 Track number of clicks

🕵️ Store click details (timestamp, referrer, location placeholder)

🌐 Redirect automatically to the original URL

📂 Project Structure
url-shortener/
┣ src/
┃ ┣ models/
┃ ┃ ┗ Url.js          # Mongoose schema for URLs
┃ ┣ routes/
┃ ┃ ┗ urlRoutes.js    # Routes (shorten + redirect)
┃ ┣ middleware/
┃ ┃ ┗ logger.js       # Logs each request
┃ ┣ server.js         # Entry point
┣ package.json
┗ README.md

🛠️ Installation & Setup
1️⃣ Clone the repo
git clone https://github.com/your-username/url-shortener.git
cd url-shortener

2️⃣ Install dependencies
npm install

3️⃣ Start MongoDB

Make sure MongoDB is running locally:

mongodb://127.0.0.1:27017/urlshortener

4️⃣ Run the server
node src/server.js


✅ Output:

MongoDB connected
Server running on http://localhost:3000

📡 API Endpoints
1. Create Short URL

POST http://localhost:3000/shorturls/

Request Body (JSON):
{
  "url": "https://www.google.com",
  "validity": 10,
  "customCode": "mygoogle"
}

Success Response:
{
  "shortLink": "http://localhost:3000/mygoogle",
  "expiry": "2025-09-08T12:30:00.000Z"
}

2. Redirect to Original URL

GET http://localhost:3000/{shortCode}

👉 Example:
http://localhost:3000/mygoogle → redirects to https://www.google.com

🧰 Tech Stack

⚡ Node.js (runtime)

🚀 Express.js (framework)

🍃 MongoDB + Mongoose (database)

🆔 UUID (unique short code generation)

📜 License

This project is licensed under the MIT License.

💡 Pro Tip: Postman me test karte waqt Headers me sirf Content-Type: application/json set karo. Baaki headers Postman khud bhejta hai