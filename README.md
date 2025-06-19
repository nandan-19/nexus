# Nexus AI - Frontend Competition Entry

## 🚀 Project Overview

This project serves as the frontend entry for the ongoing competition, showcasing a cutting-edge SAAS website for **Nexus AI** – a revolutionary CLI-based AI agent designed to empower developers. Built with Next.js, TypeScript, and Tailwind CSS, this website is crafted to demonstrate a high number of features and dynamic elements inspired directly from the provided video assets.

**Nexus AI** aims to integrate seamlessly into developer workflows (VSCode, Neovim) by offering multi-LLM support (Ollama, Google Flash, Mistral) and leveraging a custom Model Context Protocol (MCP) for intelligent, context-aware AI assistance directly from the command line.

## ✨ Features Implemented (Mimicking Video Assets)

The following sections highlight the features implemented to meet the competition's requirements, with direct inspiration from `homepage.mp4` and `customer-section.mp4`.

### 1. **Hero Section** (Inspired by `homepage.mp4` - Prominent Headline & CTAs)
* **Catchy Headline:** "Empower Your Development with Nexus AI: The CLI-Based AI Agent for VSCode & Neovim."
* **Compelling Subtitle:** Highlights multi-LLM support and Model Context Protocol (MCP).
* **Dual Call-to-Action (CTA) Buttons:** "Start Your Free Trial" (Primary) and "See How It Works" (Secondary).
* **Dynamic Background:** Subtle abstract shapes with animations to give a modern and engaging feel.

### 2. **Trust & Social Proof Bar** (Inspired by `homepage.mp4` - Top Rating Display)
* A visually prominent bar at the top of the page showcasing hypothetical high ratings from developer communities (e.g., DevTools Forum, GitHub, Product Hunt).
* Utilizes the `RatingStars` component for clear visual feedback.

### 3. **Customer Logo Carousel** (Inspired by `customer-section.mp4` - Scrolling Logos)
* A dedicated section titled "Used By Leading Innovators."
* Features a horizontally auto-scrolling carousel of placeholder client logos, creating a continuous loop to emphasize widespread adoption.
* Includes a "Meet our customers" call to action.

### 4. **Interactive Homepage Display** (Inspired by `homepage.mp4` - Dynamic Data Visualizations)
This section is designed to mimic the interactive data pop-ups and changing content seen in the `homepage.mp4` video.
* **Conceptual Dashboard:** A main visual area representing a dashboard.
* **Hover-Activated Panels:** Transparent "hotspots" are overlaid on the dashboard. Hovering over these areas triggers the display of different informational panels, simulating dynamic data interaction.
* **Varied Data Visualizations:** Showcases different types of content:
    * **Expenses Breakdown:** Placeholder for a donut chart.
    * **Total Income & Growth:** Placeholder for a bar chart.
    * **User Comments/Activity:** A pop-up for a sample user comment with a reply action.
    * **Share Options:** A panel demonstrating "Send to" functionality with various options (PDF, WhatsApp, Slack, etc.).
    * **Recent Invoices:** Placeholder for an invoice table view.
    * **Multi-Branch Support:** Illustrates global operations with different branch locations.
    * **Financial Health Score:** A prominent display of a performance metric.
* **Smooth Transitions:** Panels appear with a subtle fade-in animation.

## 🛠️ Tech Stack

* **Frontend Framework:** [Next.js](https://nextjs.org/) (React Framework for Production)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Type-safe JavaScript)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS Framework)

## 🎯 Competition Alignment

This project meticulously analyzes and integrates visual and functional cues from the provided video assets. The modular component-based architecture ensures reusability and maintainability, allowing for the maximum number of features to be incorporated efficiently. The interactive elements, dynamic content, and attention to UI/UX details directly address the competition's emphasis on feature density and visual fidelity.

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

* Node.js (v18.x or later recommended)
* npm or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nandan-19/nexus.gut
    cd 
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To run the project in development mode:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application. The page will hot-reload as you make changes.

## 📂 Project Structure (High-Level)

```
.
├── components/          # Reusable UI components (Button, Icon, TrustBar, HeroSection, etc.)
├── pages/               # Next.js pages (e.g., index.tsx for the landing page)
├── public/              # Static assets (images, fonts)
├── styles/              # Global styles or base Tailwind configurations
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── next.config.js       # Next.js configuration
└── README.md            # You are here!
```

## 🤝 Contributing

Contributions are welcome! Please follow standard GitHub flow:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature`).
6.  Open a Pull Request.

 
**Nexus AI - Empowering Developers, One Command at a Time.**
