# 📝 Simple Blog Platform (Vue.js + NestJS)


A full-stack **Simple Blog Platform** built using **Vue 3 (Composition API)** for the frontend and **NestJS** for the backend.  
Users can create, view, and delete blog posts in real time using REST APIs.


This project is beginner-friendly and perfect for learning **full-stack development**, **API integration**, and **Vue–Nest communication**.


---


## 🚀 Tech Stack


### Frontend
- Vue.js 3
- Composition API
- Fetch API
- HTML5 / CSS3
- Vite


### Backend
- NestJS
- TypeScript
- REST API
- In-memory data storage (no DB)


---


## 📂 Project Structure


```
simple-blog-platform/
│
├── backend/
│ ├── src/
│ │ ├── posts/
│ │ │ ├── posts.controller.ts
│ │ │ ├── posts.service.ts
│ │ │ └── posts.module.ts
│ │ ├── app.module.ts
│ │ └── main.ts
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── App.vue
│ │ └── main.js
│ └── package.json
│
└── README.md



---


## ⚙️ Installation & Setup


### 1️⃣ Clone the Repository
```bash
git clone https://github.com/kingfillari/-Simple-Blog-Platform-Vue.js-NestJS
cd simple-blog-platform
2️⃣ Backend Setup (NestJS)
cd backend
npm install
npm run start:dev

Backend will run on:

http://localhost:3000
3️⃣ Frontend Setup (Vue.js)
cd frontend
npm install
npm run dev

Frontend will run on:

http://localhost:5173
🔌 API Endpoints
📌 Get All Posts
GET /posts

Response

[
  {
    "id": 1700000000000,
    "title": "My First Post",
    "content": "Hello World"
  }
]
📌 Create a Post
POST /posts

Body

{
  "title": "New Post",
  "content": "Post content here"
}

Validation

Title is required

Content is required

📌 Delete a Post
DELETE /posts/:id
🧠 Features

✅ Create blog posts
✅ View all posts
✅ Delete posts
✅ Frontend & backend validation
✅ Real-time UI update
✅ Clean REST architecture

🎨 Frontend Logic Highlights

Uses Vue ref() for state

Uses fetch() for API calls

Prevents empty submissions

Auto-refreshes posts after creation

if (!title.value.trim() || !content.value.trim()) {
  alert('Title and Content are required!');
  return;
}
🛠 Backend Logic Highlights

In-memory storage using arrays

Auto-generated IDs using Date.now()

Simple and clean service-based architecture

if (!body.title || !body.content) {
  return { error: 'Title and content are required' };
}
🚧 Limitations

No database (data resets on server restart)

No authentication

No update/edit post (yet)

🔮 Future Improvements

Add database (MongoDB / PostgreSQL)

Edit posts

User authentication

Pagination

Admin dashboard

UI styling with Tailwind or Vuetify

📸 Screenshots

Add screenshots of the UI here if needed

👤 Author

Fillimon (KingFillari)
Aspiring CEO (Full-Stack & mobile app developer) & Founder
🌍 Ethiopia

📄 License

This project is open-source and free to use for learning and development.
