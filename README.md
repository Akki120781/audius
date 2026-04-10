# 🎧 Radio Player

A minimal live radio web application built with **Next.js + TailwindCSS**, integrating **Audius**.

This project combines a nostalgic console-style UI with modern React architecture and uses **Supabase** to manage and fetch audio metadata (playlist, categories, streaming URLs).

Music is sourced from:
- 📡 Internet Archive (Public Domain / Creative Commons)
- ☁️ External storage (S3 / CDN)

---

## 🚀 Features

### 🌗 Dark / Light Mode
- Toggle between themes
- Stored in `localStorage`
- Auto-applies on reload

### 🎵 Audio Playback
- HTML5 `<audio>` element
- Play / Pause toggle
- Volume Up / Down
- Mute support
- Animated level meter (UI simulation)

### 📂 Category System
Selectable categories:
- CHILL
- LOFI
- WORK

Categories and playlist data are fetched dynamically from **Supabase (Postgres)**.

---

## 🗄 Backend: Supabase Integration

This project uses **Supabase** for:

- Storing audio metadata (URL, category)
- Managing playlists
- Fetching streaming URLs
- Future support for authentication, favorites, and realtime sync

### Example Data Structure (Supabase Table)

**Table:** `tracks`

| Column     | Type   | Description                    |
|------------|--------|--------------------------------|
| id         | uuid   | Primary key                    |
| category   | text   | chill / retro / lofi / work    |
| song_url   | text   | MP3 streaming URL              |
| is_active  | bool   | Optional: enable/disable track |
| created_at | timestamptz | Auto timestamp            |

The frontend fetches tracks using the Supabase JS SDK.

---

## 🎼 Music Source

The app supports music from:

### 📡 Internet Archive
Search example:
https://archive.org/search?query=lofi+music&and[]=mediatype%3A%22audio%22

You can:
- Stream directly
- Download and host locally
- Store URLs in Supabase database

⚠ Always verify license before commercial usage.

---

## 🛠 Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/radio.git
cd radio
