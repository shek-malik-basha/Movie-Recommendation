# 🎬 Movie Recommendation App

A modern movie discovery application built with React, Vite, Appwrite, and TMDB API. Users can browse popular movies, search for specific titles, and view trending searches powered by Appwrite.

## 🚀 Features

* Search movies in real time
* Browse popular movies
* Trending movies section
* Appwrite backend integration
* Responsive user interface
* Fast performance with Vite
* Modern React Hooks implementation

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS

### Backend

* Appwrite

### API

* TMDB (The Movie Database)

## 📂 Project Structure

```text
src/
├── components/
│   ├── MovieCard.jsx
│   ├── Search.jsx
│   └── Spinner.jsx
├── assets/
├── App.jsx
├── appwrite.js
├── main.jsx
└── index.css

public/
├── hero.png
├── hero-bg.png
├── search.svg
├── star.svg
└── no-movie.png
```

## ⚙️ Environment Variables

Create a `.env.local` file in the project root and add:

```env
VITE_TMDB_API_KEY=YOUR_TMDB_READ_ACCESS_TOKEN
VITE_APPWRITE_ENDPOINT=YOUR_APPWRITE_ENDPOINT
VITE_APPWRITE_PROJECT_ID=YOUR_PROJECT_ID
VITE_APPWRITE_DATABASE_ID=YOUR_DATABASE_ID
VITE_APPWRITE_COLLECTION_ID=YOUR_COLLECTION_ID
```

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/shek-malik-basha/Movie-Recommendation.git
```

Navigate to the project folder:

```bash
cd movie-recommendation
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## 🌐 API Reference

This project uses The Movie Database (TMDB) API for movie information and Appwrite for storing trending search data.


## 👨‍💻 Author

**Shek Malik Basha**

GitHub: https://github.com/shek-malik-basha
