# 🎥 Lumivo - Real-Time Video Conferencing Platform

<p align="center">
  <b>A modern full-stack video conferencing application built with React, Node.js, Express, MongoDB, WebRTC, and Socket.IO.</b>
</p>

<p align="center">
  Create meetings • Join with custom meeting codes • Video & Audio Calling • Screen Sharing • Live Chat
</p>

---

## 🚀 Live Demo

**Frontend:** https://lumivo-frontend.onrender.com

**Backend:** https://lumivo.onrender.com

---

# 📖 About the Project

Lumivo is a full-stack real-time video conferencing platform that enables users to create and join meetings using custom meeting codes. It provides secure authentication, peer-to-peer video communication, live chat, screen sharing, and meeting history through an intuitive and responsive user interface.

The project demonstrates modern web development practices by integrating WebRTC for peer-to-peer media streaming, Socket.IO for signaling and real-time communication, MongoDB for data persistence, and JWT-based authentication for secure user sessions.

---

# ✨ Features

- 🔐 User Authentication (Register & Login)
- 🎥 Real-Time Video Calling
- 🎤 Audio Controls
- 📹 Camera Controls
- 🖥️ Screen Sharing
- 💬 Live Chat
- 📋 Custom Meeting Codes
- 🕒 Meeting History
- 📱 Responsive Design
- ⚡ Real-Time Communication using Socket.IO
- 🌐 Peer-to-Peer Media Streaming with WebRTC

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- React Router DOM
- Material UI (MUI)
- Axios
- Socket.IO Client
- CSS Modules

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Socket.IO
- JSON Web Token (JWT)
- bcrypt

## Deployment

- Render (Frontend)
- Render (Backend)
- MongoDB Atlas

---

# 🏗 System Architecture

```text
                  React + Vite
                        │
             REST APIs / Authentication
                        │
                        ▼
               Express + Node.js
                        │
         ┌──────────────┴──────────────┐
         │                             │
         ▼                             ▼
   MongoDB Atlas                 Socket.IO Server
                                       │
                                       ▼
                             WebRTC Signaling
                                       │
                                       ▼
                        Peer-to-Peer Video Calls
```

---

# 📂 Project Structure

```text
Lumivo
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── contexts
│   │   ├── pages
│   │   ├── styles
│   │   ├── utils
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/mdqamaraziz/Lumivo.git
```

```bash
cd Lumivo
```

---

## 2. Install Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 3. Install Backend

Open another terminal.

```bash
cd backend
npm install
npm start
```

Backend will run at:

```
http://localhost:8000
```

---

# 🔑 Environment Variables

## Frontend (.env)

```env
VITE_SERVER_URL=http://localhost:8000
```

Production

```env
VITE_SERVER_URL=https://lumivo.onrender.com
```

---

## Backend (.env)

```env
PORT=8000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

---

# 📸 Screenshots

Add screenshots of your application here.

Example:

```
screenshots/
│
├── landing-page.png
├── login.png
├── home.png
├── meeting.png
└── history.png
```

---

# 🔄 Application Workflow

1. User creates an account or logs in.
2. Authentication token is securely stored.
3. User enters a custom meeting code.
4. Meeting history is saved in MongoDB.
5. Users with the same meeting code join the same room.
6. Socket.IO handles signaling.
7. WebRTC establishes peer-to-peer media connections.
8. Participants can:
   - Enable/Disable Camera
   - Mute/Unmute Microphone
   - Share Screen
   - Exchange Chat Messages
   - Leave the Meeting

---

# 📡 API Endpoints

### Authentication

- Register User
- Login User

### User

- Add Meeting History
- Get Meeting History

### Socket Events

- join-call
- signal
- user-joined
- user-left
- chat-message

---

# 🎯 Challenges Solved

- Built peer-to-peer video communication using WebRTC.
- Implemented Socket.IO signaling for connection establishment.
- Developed JWT-based authentication and authorization.
- Persisted meeting history in MongoDB.
- Deployed frontend and backend independently on Render.
- Configured production routing for React applications.
- Managed multiple participants using WebRTC peer connections.

---

# 📚 Key Learnings

- React Context API
- React Router
- WebRTC
- Socket.IO
- REST API Development
- MongoDB & Mongoose
- JWT Authentication
- Full-Stack Deployment
- Production Debugging
- Real-Time Communication

---

# 🔮 Future Improvements

- Waiting Room
- Password-Protected Meetings
- Meeting Scheduling
- Email Invitations
- Recording Meetings
- File Sharing
- Virtual Backgrounds
- Participant Management
- Push Notifications
- Mobile Optimization

---

# 🔒 Security

- Passwords are hashed before being stored.
- Authentication is handled using JWT.
- Sensitive configuration is managed with environment variables.
- Database credentials and secrets are excluded from version control.
- Secure client-server communication through REST APIs and Socket.IO.

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature
```

3. Commit your changes.

```bash
git commit -m "Add your feature"
```

4. Push to your branch.

```bash
git push origin feature/your-feature
```

5. Open a Pull Request.

---

# 👨‍💻 Author

**Md. Qamar Aziz**

GitHub: https://github.com/mdqamaraziz

---

# ⭐ Show Your Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

It motivates me to build and share more open-source projects.

---
