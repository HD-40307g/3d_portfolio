
# Erik Mruz | Portfolio

Welcome to my portfolio repository! This project showcases my skills, projects, and professional experience as a software engineer. Below, you'll find detailed information about the structure, technologies, and features of this portfolio, along with instructions on how to set up the project locally.

---

## **Live Demo**

[Explore the Portfolio Live](https://your-portfolio-site.com)

---

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Folder Structure](#folder-structure)
5. [Installation and Setup](#installation-and-setup)
6. [Usage](#usage)
7. [Project Pages](#project-pages)
8. [Contributing](#contributing)
9. [License](#license)
10. [Acknowledgements](#acknowledgements)

---

## **Project Overview**

This portfolio highlights my journey and expertise as a developer through interactive components, animations, and modern design principles. It features:

- An intuitive user interface with seamless navigation.
- Responsive 3D models powered by **React Three Fiber**.
- Dynamic forms integrated with **EmailJS** for contact submission.
- A music toggle feature to create a unique user experience.

---

## **Features**

### **General**
- Responsive design for all devices.
- Elegant animations and transitions.
- Accessible and SEO-optimized.

### **Pages**
- **Home**: Features 3D models, animations, and an audio player.
- **About**: Provides a detailed look at my skills and experience.
- **Projects**: Showcases selected projects with live links.
- **Contact**: An interactive form to connect with me directly.

### **Additional Features**
- Audio toggle functionality.
- Custom 3D models (Bird, Fox, Island) for added interactivity.
- Form validation with live feedback.

---

## **Tech Stack**

### **Frontend**
- **React.js**: Library for building the user interface.
- **React Router**: Handles routing for different pages.
- **React Three Fiber**: Enables 3D rendering.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### **Backend & APIs**
- **EmailJS**: Third-party service for handling email submissions.

### **Other Tools**
- **Vite**: Fast development environment.
- **React Spring**: For smooth animations.
- **React Icons**: Iconography.

---

## **Folder Structure**

```plaintext
3d_portfolio
├── public               # Static assets (e.g., images, icons)
├── src
│   ├── assets/          # Static assets like images, icons, and audio.
│   ├── components/      # Reusable React components (e.g., Navbar, Footer, Loader).
│   ├── constants/       # Centralized configuration files (e.g., projects.js).
│   ├── hooks/           # Custom hooks (e.g., useAlert).
│   ├── models/          # 3D model definitions (e.g., Fox.js, Island.js).
│   ├── pages/           # Individual pages (Home, About, Projects, Contact).
│   ├── App.jsx          # Main application entry point.
│   ├── main.jsx         # React DOM rendering entry point.
│   └── index.css        # Global styles.
├── eslint.config.js     # Defines rules for code linting
├── index.html           # Main HTML file
├── LICENSE              # Standard MIT License
├── package-lock.json    # Exact dependency versions for install
├── package.json         # Project metadata and dependencies
├── postcss.config.js    # Configures PostCSS for CSS processing
├── README.md            # Project README.md file
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration files
```

---

## **Installation and Setup**

Follow these steps to run the project locally:

### **Prerequisites**

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### **Steps**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/HD-40307g/3d_portfolio.com
   cd portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Environment Variables**:
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open the App**:
   Navigate to [http://localhost:5173](http://localhost:5173) in your browser.

---

## **Usage**

- Navigate through the website using the navbar.
- View the projects page to explore my work.
- Use the contact form to send a message.

---

## **Project Pages**

### **Home**
- Features 3D models (Bird, Island, Sky, and Plane) with dynamic animations.
- Includes an interactive music player with toggle functionality.

### **About**
- Highlights skills and experience with a modern design layout.

### **Projects**
- Displays key projects with descriptions, live links, and open-source repositories.

### **Contact**
- A fully functional form integrated with EmailJS for sending messages.

---

## **Contributing**

Contributions are welcome! Here’s how you can help:

1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes.
4. Push the branch and create a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgements**

- **React Three Fiber** for enabling 3D rendering.
- **Tailwind CSS** for efficient and responsive styling.
- **EmailJS** for email integration.
- Icons by [React Icons](https://react-icons.github.io/react-icons/).

---

Feel free to contact me through the portfolio’s contact form.
