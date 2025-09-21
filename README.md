React Dashboard Project
A clean, modern, and responsive React dashboard web application built with modular components including charts, stats cards, dark/light theme toggle, sidebar navigation, and notification drawer.

Features
Responsive layout: Works smoothly across desktop, tablet, and mobile views

Modular components: Reusable Cards, Graphs, Sidebar, Header, and Notification Drawer

Dark/Light mode: Toggle UI themes with a simple bulb icon switch

State management: Lightweight React hooks based state management

Realistic dashboard UI: Includes charts for revenue, sales, location, and stats cards showing key metrics

Notification drawer: Slide-in panel for notifications accessible via header icon

Routing: Seamless navigation with React Router (Cover page & Dashboard)

Modern tooling: Built with React, Ant Design, Lucide Icons, and SVG assets for charts

Screenshots
(Insert screenshots or GIFs showcasing the UI, including light and dark modes)

Installation
Clone the repository:

bash
git clone https://github.com/yourusername/react-dashboard.git
cd react-dashboard
Install dependencies:

bash
npm install
Run the development server:

bash
npm start
Open http://localhost:3000 to view in the browser.

Here is an updated README section explaining both the Card and the Assignment button click-to-navigate behavior in your React dashboard project:

***

## Navigation and Click Behavior

This React dashboard project implements multiple navigation flows that enable smooth transitioning between different pages using React Router.

### Card Click Navigation

- The **Card** component on the dashboard is clickable.
- Clicking a Card navigates the user to the **Order Dashboard** page (`/orders` route).
- Navigation is implemented using React Router’s `useNavigate` hook internally within the Card component.
- This allows quick access to detailed order information by clicking Cards visually represented on the dashboard.

### Assignment Button Click Navigation

- On the **Cover Page**, there is an **Assignment** button.
- Clicking this button routes the user to the main **Dashboard** page (`/dashboard` route).
- This is achieved using `useNavigate` in the Cover Page component or by passing navigation callbacks where applicable.
- This design offers a clean entry point for users to start working on the dashboard after visiting the cover page.

### Routes Configured

- `/` - Cover Page (Entry/landing)
- `/dashboard` - Main Dashboard with stats and cards
- `/orders` - Order Dashboard displaying orders list with sortable and styled rows

### Header Controls

- Sidebar toggle button opens and closes the sidebar menu.
- Notification bell opens a slide-in notifications drawer.
- Theme toggle button switches the UI theme between dark and light modes.
- Refresh button reloads the page.

### Usage Notes

- Ensure you are visiting the correct routes to see respective pages.
- Navigation actions are fully client-side SPA transitions for smooth user experience.
- Dark/light themes help users switch between comfortable visual modes.


Folder Structure
text
src/
├── components/         # Reusable UI components like Card, Graphs, etc.
├── Dashboard/          # Main dashboard page and related components
├── assets/             # SVG and image assets
├── App.jsx             # Entry React component with routing and theme management
├── index.js            # React DOM rendering entry point
How To Use
Use the sidebar to navigate different dashboard sections

Toggle sidebar collapse with the menu icon in the header

Switch between light and dark theme by clicking the bulb icon

Click notification bell to open the slide-in notifications drawer

Stats cards display key metrics; charts visualize detailed data

Technologies
React 18+

React Router v6

Ant Design for UI elements & Notifications

Lucide-react icons

Custom SVG charts and assets

CSS-in-JS styling inline for flexibility

Contribution
Contributions and suggestions are welcome! Please open issues or pull requests."# Juspay" 
