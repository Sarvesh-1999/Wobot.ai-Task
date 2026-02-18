# Camera Dashboard (React)

A frontend-only Camera Management Dashboard built using React.js.
It allows users to view, search, filter, paginate, toggle status, and delete cameras without any backend dependency.

# Deployed link

- https://wobot-ai-task-plum.vercel.app/

# Features

- Camera listing in tabular format
- Search cameras by name
- Filter cameras by location
- Filter cameras by status (Active / Inactive)
- Client-side pagination
- Toggle camera status (Active ↔ Inactive)
- Delete camera
- Fully frontend filtering & pagination
- Modular CSS for clean UI
- Loader while fetching data

# Tech Stack

- React.js
- JavaScript (ES6+)
- CSS Modules
- Vite (for development server)

# Project Structure

src/
├── api/
│ └── cameraApi.js
│
├── assets/
│ ├── arrow_down.png
│ ├── Location_icon.png
│ ├── rss_feed.png
│ └── search.png
│
├── components/
│ ├── CameraTable/
│ │ ├── CameraTable.jsx
│ │ ├── CameraTable.module.css
│ │ ├── CameraRow.jsx
│ │ └── CameraRow.module.css
│ │
│ ├── FilterComp/
│ │ ├── FilterComp.jsx
│ │ └── FilterComp.module.css
│ │
│ ├── Header/
│ │ ├── Header.jsx
│ │ └── Header.module.css
│ │
│ ├── Loader/
│ │ ├── Loader.jsx
│ │ └── Loader.module.css
│ │
│ ├── Pagination/
│ │ ├── Pagination.jsx
│ │ └── Pagination.module.css
│ │
│ └── SearchBar/
│ ├── SearchBar.jsx
│ └── SearchBar.module.css
│
├── hooks/
│ └── useCameras.js
│
├── pages/
│ ├── Dashboard.jsx
│ └── Dashboard.module.css
│
├── utils/
│ └── constants.js
│
├── App.jsx
├── index.css
└── main.jsx

# Setup Instructions

1. Clone the repository
   git clone [<repository-url>](https://github.com/Sarvesh-1999/Wobot.ai-Task.git)

2. Navigate to the project folder
   cd Wobot.ai-Task

3. Install dependencies
   npm install

4. Start the development server
   npm run dev

5. Open in browser
   http://localhost:5173
