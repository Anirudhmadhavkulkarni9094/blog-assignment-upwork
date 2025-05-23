
# 📝 Next.js Blog App

A simple blog app built with **Next.js** that demonstrates:

- Static Site Generation with `getStaticProps` and `getStaticPaths`
- Dynamic routing for individual blog posts
- A responsive two-column layout with search and filter sidebar
- Reusable components (`Layout`, `PostCard`, `Header`)
- Fallback loading states for dynamic pages using `fallback: true`
- Styled with **Tailwind CSS**

---

## 🚀 Features

- ✅ Home page displaying the latest blog posts (fetched from JSONPlaceholder)
- ✅ Individual post pages using dynamic routes
- ✅ Client-side search and filter functionality
- ✅ Fallback loading support for dynamic pages
- ✅ Clean and responsive UI with Tailwind CSS

---

## 📁 Project Structure

```

/
├── components/
│   ├── Header.tsx
│   ├── Layout.tsx
│   └── PostCard.tsx
├── pages/
│   ├── blog/
│   │   └── \[id].tsx       # Dynamic post route
│   └── index.tsx          # Home page with search & filters
├── public/
├── styles/
│   └── globals.css
├── tailwind.config.js
├── tsconfig.json
└── README.md

````

---

## 📦 Installation

```bash
git clone https://github.com/Anirudhmadhavkulkarni9094/blog-assignment-upwork.git
cd blog-assignment-upwork
npm install
````

---

## 🛠️ Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🧱 Production Build

```bash
npm run build
npm start
```

---

## 🌐 Data Source

All blog posts are fetched from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts).

---

## ✨ Example

### Home Page:

* Lists the latest 15 blog posts
* Search bar filters results based on title or body text
* Responsive layout with sidebar on desktop

### Blog Post Page:

* Dynamic route: `/blog/[id]`
* Uses `getStaticPaths` and `getStaticProps` for static generation
* `fallback: true` adds support for loading new posts dynamically

---

## 🧩 Technologies Used

* [Next.js](https://nextjs.org)
* [React](https://reactjs.org)
* [Tailwind CSS](https://tailwindcss.com)
* [TypeScript](https://www.typescriptlang.org/)
* [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

## 📄 License

MIT

---

## 🙌 Author

**Anirudh Madhav Kulkarni**
GitHub: [@Anirudhmadhavkulkarni9094](https://github.com/Anirudhmadhavkulkarni9094)

