# 🎮 WhereToWatch

A modern web app to discover where you can stream movies and TV shows. Built with **Next.js**, **Tailwind CSS**, and powered by public APIs like **TMDB** and **OMDB**, this app helps users search for titles, explore trending content, view ratings, and find streaming availability.

---

## 🚀 Features

* 🔍 **Search** for any movie or TV show
* 📈 **Trending**, **Popular**, **Upcoming**, and **Top Rated** content
* 🧠 **Dynamic detail pages** with poster, overview, genre, and release date
* ⭐ **IMDb & Rotten Tomatoes ratings** (via OMDB)
* 📺 **Streaming availability** (via WatchMode or JustWatch API)
* ⚡ Fast client-side rendering with **SWR**
* 📱 Fully responsive UI built with **Tailwind CSS**

---

## 🛠️ Tech Stack

* **Framework**: [Next.js](https://nextjs.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Data Fetching**: [SWR](https://swr.vercel.app/)
* **APIs**:

  * [TMDB API](https://developer.themoviedb.org/) – Movie/TV data
  * [OMDB API](https://www.omdbapi.com/) – IMDb + Rotten Tomatoes ratings
  * [WatchMode API](https://www.watchmode.com/) – Streaming availability

---

## 📂 Folder Structure

```
/components     # UI components (Card, SearchBar, etc.)
/pages          # Next.js routes (Home, Movie detail, etc.)
/lib            # API helpers (TMDB, OMDB functions)
/public         # Static assets
/utils          # Utility functions (fetchers, URL builders, etc.)
```

---

## 🌐 Environment Variables

Create a `.env.local` file in the root:

```env
TMDB_API_KEY=your_tmdb_v3_key
OMDB_API_KEY=your_omdb_key
WATCHMODE_API_KEY=your_watchmode_key
```

---

## 📦 Getting Started

```bash
# Install dependencies
yarn install

# Run dev server
yarn run dev
```

---

## 📸 Screenshots

<img width="1867" height="650" alt="image" src="https://github.com/user-attachments/assets/3969158e-c61d-42dc-87d9-32947a483951" />
<img width="1878" height="548" alt="image" src="https://github.com/user-attachments/assets/76c355bc-71fd-4493-9de1-26f58e6327b6" />
<img width="1877" height="837" alt="image" src="https://github.com/user-attachments/assets/6b7c4f89-e7d7-4bf0-868c-6f2815f91fe0" />




---

## 🤛‍♂️ Author

Developed and maintained by [Nikhil Kumar](https://github.com/nickster716). Contributions and feature suggestions are welcome!
