# 🧱 A-5 Dev Stack Builder Website

A modern and responsive **Dev Stack Builder** web application built with React. The application allows users to explore different development technologies and create their own personalized development stack.

Users can browse technologies, add them to their stack, remove individual technologies, and clear the entire stack. The project also includes responsive design, loading states, duplicate prevention, and toast notifications for a better user experience.

---

## 🌐 Live Site & Repository

🔗 **Live Website:**
https://building-devstack.netlify.app/

🔗 **GitHub Repository:**
https://github.com/sajidraian/dev-stack-builder-a_05

---

## ✨ Key Features

* 🧩 Explore **10+ development technologies**
* 🧰 Add technologies to a personalized **Your Stack**
* 🚫 Prevent duplicate technologies from being added
* ❌ Remove individual technologies from the stack
* 🗑️ Remove all selected technologies at once
* 🔔 Toast notifications for add, duplicate, remove, and remove-all actions
* ⏳ Loading state while fetching technology data
* 📱 Fully responsive design for mobile, tablet, and desktop
* 🎨 Shared **orange → pink → violet gradient** brand theme
* ⚡ Interactive technology cards with hover and selected states
* 🧭 Responsive sticky navigation bar

---

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **React-Toastify**
* **JSON**
* **Vite**

---

# 📋 Project Requirements Implemented

## 🧭 Navbar

The website includes a responsive sticky navigation bar.

### Desktop

* Dev Stack brand/logo
* Home
* Technologies
* Projects
* About
* Contact
* Sign In
* Sign Up

### Mobile

The navigation adapts to smaller screens with:

* Hamburger menu
* Dev Stack branding
* Sign In button
* Sign Up button

The navbar remains visible while scrolling through the website.

---

## 🎯 Hero / Banner Section

The hero section includes:

* A two-tone heading
* Gradient-highlighted text
* Meaningful project description
* **Explore Technologies** button
* **Learn More** button
* Visual/banner content

The primary elements use the project's shared gradient theme.

---

## 📦 JSON Data

Technology information is stored in a separate JSON file rather than being hardcoded inside the React components.

### Data Source

```text
/public/data/technologies.json
```

Each technology contains information such as:

```json
{
  "id": "react",
  "name": "React",
  "category": "Frontend",
  "description": "A declarative, component-based JavaScript library for building modern user interfaces.",
  "icon": "https://icon.icepanel.io/Technology/svg/React.svg",
  "rating": 4.9,
  "difficulty": "Beginner-Friendly",
  "badge": "Popular"
}
```

The application loads the JSON data dynamically and displays it through reusable React components.

---

# 🃏 Technology Cards

Technologies are displayed using responsive cards.

Each card contains:

* 🖼️ Technology icon
* 🏷️ Badge
* 📛 Technology name
* 📝 Description
* 🏷️ Category
* 📊 Difficulty level
* ⭐ Rating
* ➕ Add to Stack button

### Responsive Layout

| Device     | Layout    |
| ---------- | --------- |
| 📱 Mobile  | 1 column  |
| 📲 Tablet  | 2 columns |
| 💻 Desktop | 3 columns |

---

# 🧰 Your Stack

The **Your Stack** section allows users to manage their selected technologies.

It displays:

* Number of selected technologies
* Selected technology icon
* Technology name
* Category
* Remove button
* Remove All button

When no technology has been selected, an empty-state message is displayed.

Example:

```text
Your Stack

No technologies selected yet.
Start building your stack by adding technologies.
```

Once technologies are selected, they appear in the stack panel.

---

# ➕ Add to Stack Functionality

Users can click **Add to Stack** on any technology card.

When a technology is successfully added:

* It appears inside **Your Stack**
* The selected count is updated
* A success toast is displayed
* The card button changes to:

```text
✓ Added to Stack
```

The same technology cannot be added more than once.

If the user tries to add an existing technology again, a warning toast is displayed.

---

# ❌ Remove Functionality

Each selected technology has a remove button.

Clicking the **✕** button removes only that technology from the stack.

The **Remove All** button clears the entire stack.

Toast notifications are displayed for both actions.

---

# 🔔 React-Toastify

The project uses **React-Toastify** to provide feedback for important user actions.

Toast notifications are shown when users:

* ✅ Add a technology
* ⚠️ Try to add a duplicate technology
* ❌ Remove a technology
* 🗑️ Remove all technologies

This makes the interface more interactive and user-friendly.

---

# ⏳ Loading State

The application fetches technology information from the local JSON file.

While the data is being loaded, a loading indicator is displayed.

```text
/public/data/technologies.json
```

Although the JSON file is local and loads quickly, the loading state is implemented as required.

---

# 🎨 Gradient Brand Theme

The project uses a shared:

**Orange → Pink → Violet**

gradient theme.

The gradient is used consistently across major brand elements, including:

* Dev Stack brand
* Hero heading highlight
* Primary buttons
* Selected states
* Important UI elements

Using a shared gradient keeps the visual design consistent throughout the application.

---

# 📱 Responsive Design

The website is designed to work across:

* 📱 Mobile devices
* 📲 Tablets
* 💻 Desktop screens

The layout automatically adjusts depending on the screen size.

Responsive behavior is applied to:

* Navbar
* Hero section
* Technology cards
* Your Stack section
* Buttons
* Footer
* Overall page layout

---

# 🦶 Footer

The footer contains:

* Dev Stack branding
* Short project description
* Social links
* Product links
* Company links
* Legal links
* Copyright information
* Privacy and Terms links

The footer also follows the same visual style as the rest of the website.

---

# 🗂️ Project Structure

```text
dev-stack-builder/
│
├── public/
│   └── data/
│       └── technologies.json
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TechnologyGrid.jsx
│   │   ├── TechnologyCard.jsx
│   │   ├── YourStack.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ How to Run Locally

Follow the steps below to run the project on your computer.

### 1. Clone the Repository

```bash
git clone https://github.com/sajidraian/dev-stack-builder-a_05.git
```

### 2. Navigate to the Project

```bash
cd dev-stack-builder
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The project will start on the local development server provided by Vite.

---

# 🚀 Deployment

The project is deployed using **Netlify**.

🔗 **Live Website:**
https://building-devstack.netlify.app/

The deployed version provides access to the completed Dev Stack Builder application.

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

**JSX** is a syntax that allows us to write HTML-like code inside JavaScript.

It makes React components easier to read and helps us create UI elements in a simple way.

Example:

```jsx
<h1>Dev Stack Builder</h1>
```

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store data that can change inside a component.

For example, the selected technologies in this project are stored using state.

---

## 3. What does the `useState` Hook do, and where did you use it?

`useState` is a React Hook used to store and update changing data.

I used it in `App.jsx` to store the technologies selected by the user.

```jsx
const [stack, setStack] = useState([]);
```

Here, `stack` stores the selected technologies and `setStack` updates the stack.

---

## 4. What does the `useEffect` Hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.

I used it in `TechnologyGrid.jsx` to fetch the technology data from the JSON file when the component loads.

```text
/public/data/technologies.json
```

This allows the technology information to be loaded dynamically instead of hardcoding it inside the component.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

It helps React efficiently determine which items have changed, been added, or been removed.

Example:

```jsx
key={technology.id}
```

The technology's unique `id` is used as the key.

---

## 6. What is conditional rendering?

Conditional rendering means displaying different UI depending on a condition.

For example, in `YourStack.jsx`, the application checks whether the stack is empty.

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  // Display selected technologies
)}
```

If there are no selected technologies, the empty-state message is shown. Otherwise, the selected technologies are displayed.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data and functions to a child component using **props**.

For example, `App.jsx` can pass the selected `stack` and functions such as `onRemove` to `YourStack`.

The child component can then call the function received through props.

This allows the child to trigger an action that updates the parent's state.

---

# 📊 Application Workflow

```text
             ┌─────────────────────┐
             │     User Visits     │
             │       Website       │
             └──────────┬──────────┘
                        ↓
             ┌─────────────────────┐
             │  Load JSON Data     │
             │ technologies.json   │
             └──────────┬──────────┘
                        ↓
             ┌─────────────────────┐
             │ Display Technology  │
             │       Cards         │
             └──────────┬──────────┘
                        ↓
             ┌─────────────────────┐
             │  Add to Your Stack  │
             └──────────┬──────────┘
                        ↓
             ┌─────────────────────┐
             │ Prevent Duplicate   │
             │      Selection      │
             └──────────┬──────────┘
                        ↓
             ┌─────────────────────┐
             │ Manage Your Stack   │
             │ Remove / Remove All │
             └─────────────────────┘
```

---

# 👨‍💻 Developer

### Sajid Al Raian

**GitHub:**
https://github.com/sajidraian

---

# 📄 Project Purpose

This project was created as part of the **Programming Hero A-5 Dev Stack Builder assignment**.

The main purpose of the project is to practice:

* React component-based development
* JSX
* Props
* State management
* `useState`
* `useEffect`
* Conditional rendering
* List rendering with `.map()`
* JSON data fetching
* Responsive web design
* Tailwind CSS
* React-Toastify
* Git and GitHub
* Netlify deployment

---

## ⭐ Project Highlights

> **Build your development stack, one technology at a time.**

A simple, responsive, and interactive platform for exploring technologies and creating a personalized development stack.

---

### 🔗 Important Links

**Live Site:**
https://building-devstack.netlify.app/

**GitHub:**
https://github.com/sajidraian/dev-stack-builder-a_05

---

**Made with ❤️ using React.js**
