# LinkedIn Portfolio Clone

This is a personal portfolio website designed to mimic the look and feel of a LinkedIn profile. It showcases professional experience, education, projects, and skills in a familiar and engaging format. Use this to impress recruiters and network connections!

## 🚀 Features

*   **Pixel-Perfect Design:** Closely replicates the UI of a LinkedIn profile.
*   **Responsive Layout:** Works seamlessly on desktop and mobile devices.
*   **Dynamic Components:**
    *   **Profile Hero:** Banner, avatar, headlines, and mutual connections.
    *   **Featured Section:** Carousel of highlighted posts/media.
    *   **Activity Feed:** Interactive-style posts with colorful reaction icons.
    *   **Experience & Education:** Detailed timelines of professional history.
    *   **Projects & Volunteering:** Showcases key work and community involvement.
    *   **Skills & Recommendations:** Highlights expertise and testimonials.
    *   **Welcome Popup:** A friendly greeting for first-time visitors ("This is not LinkedIn").
*   **Sidebar:** "People also viewed" section featuring AI industry leaders.

## 🛠️ Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Library:** [React](https://react.dev/)
*   **Styling:** CSS Modules (for scoped, component-level styling)
*   **Language:** TypeScript
*   **Icons:** Inline SVGs and LinkedIn-style iconography

## 📂 Project Structure

```bash
linkedin-portfolio/
├── app/
│   ├── layout.tsx       # Root layout, metadata, fonts
│   ├── page.tsx         # Main homepage assembly
│   └── globals.css      # Global styles and variables
├── components/          # Reusable UI components
│   ├── Header.tsx       # Top navigation bar
│   ├── ProfileHero.tsx  # Main profile card
│   ├── About.tsx        # About section
│   ├── Featured.tsx     # Featured carousel
│   ├── Activity.tsx     # Activity feed
│   ├── Experience.tsx   # Experience list
│   ├── Education.tsx    # Education list
│   ├── Sidebar.tsx      # Right sidebar widget
│   └── WelcomePopup.tsx # Initial popup modal
├── public/
│   └── assets/          # Images, banners, and icons
└── ...config files      # Next.js, TSConfig, etc.
```

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

*   Node.js (v18 or higher)
*   npm (v9 or higher)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/linkedin-portfolio.git
    cd linkedin-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🚀 Deployment

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com/creator/nextjs).

1.  **Push to GitHub:** Ensure your code is pushed to a repository on GitHub.
2.  **Import to Vercel:**
    *   Go to Vercel Dashboard.
    *   Click **"Add New Project"** -> **"Import"**.
    *   Select your `linkedin-portfolio` repository.
3.  **Deploy:**
    *   Keep the default settings (Framework Preset: Next.js).
    *   Click **"Deploy"**.
4.  **Live:** Your portfolio will be live at `https://your-project-name.vercel.app`!

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1.  **Fork** the repository.
2.  **Clone** your fork (`git clone ...`).
3.  **Create a new branch** (`git checkout -b feature/AmazingFeature`).
4.  **Commit your changes** (`git commit -m 'Add some AmazingFeature'`).
5.  **Push to the branch** (`git push origin feature/AmazingFeature`).
6.  **Open a Pull Request**.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
