# To-Do List App

A simple and interactive To-Do List application built using **React.js**. This app allows users to add, edit, delete, and mark tasks as completed. Tasks are stored in **local storage**, ensuring data persistence across sessions.

## Features
✅ Add new tasks with descriptions  
✅ Mark tasks as completed or move them back to the pending list  
✅ Edit task names and descriptions  
✅ Delete tasks permanently  
✅ Data persistence using **local storage**  
✅ Responsive and user-friendly UI  

## Tech Stack
- **React.js** – Frontend framework
- **CSS** – Styling
- **Local Storage** – Data persistence

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   ```
2. Navigate to the project folder:
   ```bash
   cd todo-list-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm start
   ```


## Folder Structure
```
📂 todo-list-app
┣ 📂 public
┃ ┣ 🖼️ vite.svg
┃ ┗ 🖼️ 4877010.jpg
┣ 📂 src
┃ ┣ 📂 assets
┃ ┃ ┗ 🎨 react.svg
┃ ┣ 📂 components
┃ ┃ ┣ 🏗️ Header.jsx
┃ ┃ ┣ 📝 TaskInput.jsx
┃ ┃ ┗ ✅ TaskItem.jsx
┃ ┣ 📂 styles
┃ ┃ ┗ 🎨 styles.css
┃ ┣ 🎨 App.css
┃ ┣ ⚛️ App.jsx
┃ ┣ 🎨 index.css
┃ ┗ 🚀 main.jsx
┣ 🚫 .gitignore
┣ 📜 README.md
┣ 🔧 eslint.config.js
┣ 📄 index.html
┣ 📦 package-lock.json
┣ 📦 package.json
┗ ⚙️ vite.config.js
```

## How to Use
1. **Add a Task**: Enter a task name and description, then click "Add Task".
2. **Mark as Completed**: Click the "Mark as Completed" button to move a task to the completed section.
3. **Edit a Task**: Click "Edit", modify the details, and save the changes.
4. **Delete a Task**: Click "Delete" to remove a task permanently.
5. **Toggle Between Tasks**: Switch between **Current Tasks** and **Completed Tasks**.

## Future Enhancements
- ✅ Dark mode support
- ✅ Drag and drop task reordering
- ✅ Due date reminders
