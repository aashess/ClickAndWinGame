---

# Click and Win Game 🎮

Welcome to the **Click and Win Game**! This is a simple yet engaging React-based game where users click buttons to increase or decrease a counter and try to match a randomly generated number to win.

---

## Table of Contents
1. [Features](#features)
2. [How to Play](#how-to-play)
3. [Installation](#installation)
4. [Project Structure](#project-structure)
5. [Technologies Used](#technologies-used)
6. [Contributing](#contributing)
7. [License](#license)

---

## Features ✨

### 1. Interactive Gameplay
Users can click buttons to:
- **Increase** the counter.
- **Decrease** the counter.
- **Reset** the counter to zero.
- **Submit** their current count to check if it matches the randomly generated number.

### 2. Random Number Generation
- A random number between 0 and 10 is generated when the game starts or resets.
- Users must match their counter to this number to win.

### 3. Win/Loss Alerts
- If the user’s counter matches the random number, they receive a **"You WON"** alert.
- If the counter does not match, they receive a **"YOU Loss"** alert.

### 4. Dynamic UI
- The game features a clean and centered user interface with styled buttons and a responsive design.

### 5. React-Powered
- Built using **React** for a smooth and efficient user experience.
- Uses **React Hooks** (`useState` and `useEffect`) for state management and side effects.

---

## How to Play 🕹️

1. **Start the Game**:
   - The game starts with a counter set to `0` and a randomly generated number between `0` and `10`.

2. **Use the Buttons**:
   - **Next**: Increases the counter by `1`.
   - **Decrease**: Decreases the counter by `1`.
   - **Reset**: Resets the counter to `0` and generates a new random number.
   - **Submit**: Checks if the current counter matches the random number.

3. **Win the Game**:
   - Match the counter to the random number and receive a **"You WON"** alert.

---

## Installation 🛠️

Follow these steps to set up the project locally:

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (Node Package Manager)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/aashess/ClickAndWinGame.git
   cd ClickAndWinGame
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Project**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   - Visit `http://localhost:5173` to play the game.

---

## Project Structure 📂

Here’s an overview of the project structure:

```
ClickAndWinGame/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

### Key Files
- **`App.jsx`**: The main React component containing the game logic and UI.
- **`App.css`**: Styles for the game.
- **`main.jsx`**: Entry point for the React app.
- **`index.html`**: HTML file where the React app is mounted.

---

## Technologies Used 💻

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **CSS**: For styling the game.
- **JavaScript**: For game logic and interactivity.

---

## Contributing 🤝

Contributions are welcome! If you’d like to contribute to this project, follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit Your Changes**:
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push to the Branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request**.

---

## License 📄

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments 🙏

- **React**: For providing a powerful framework for building user interfaces.
- **Vite**: For making the development process fast and efficient.
- **You**: For playing the game! 😊

---

Enjoy the game, and feel free to reach out if you have any questions or suggestions! 🚀

---