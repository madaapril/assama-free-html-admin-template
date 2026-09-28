<h1 align="center">
  <br>
  🌊 Assama - Free HTML Admin Template
  <br>
</h1>

<h4 align="center">A free, modern, and responsive Bootstrap 5 admin dashboard template with sleek glassmorphism design.</h4>

<p align="center">
  <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white" />
  <img src="https://img.shields.io/badge/jQuery-3.7-0769AD?style=flat-square&logo=jquery&logoColor=white" />
  <img src="https://img.shields.io/badge/Chart.js-4.4-FF6384?style=flat-square&logo=chart.js&logoColor=white" />
  <img src="https://img.shields.io/badge/SweetAlert2-11-EA4C89?style=flat-square" />
  <img src="https://img.shields.io/badge/Price-100%25%20Free-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#pages">Pages</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#structure">Structure</a> •
  <a href="#support">Support</a> •
  <a href="#license">License</a>
</p>

---

## ✨ Features

- 🆓 **100% Free & Open Source** — Free to use for personal and commercial web projects
- 🎨 **Glassmorphism Design** — Modern frosted-glass UI with smooth shadows and blur effects
- 📱 **Fully Responsive** — Mobile-first layout with collapsible sidebar
- 🌈 **Sky Blue Theme** — Carefully curated color palette with gradient accents
- 🔄 **Smooth Animations** — Subtle fade-in transitions and micro-interactions
- 🧩 **Reusable Components** — Consistent `glass-card`, topbar, sidebar patterns
- 📊 **Chart.js Integration** — Horizontal bar chart with dummy data and datalabels
- 🔔 **SweetAlert2** — Toast notifications and confirmation dialogs
- 📋 **DataTables** — Interactive table with search, pagination, and action buttons
- ⚡ **Shared Script** — Common JS logic extracted to `assets/js/script.js`
- 🎯 **Zero Build Tools** — Pure HTML/CSS/JS, no package manager required

---

## 📄 Pages

| Category           | Page           | Path                                 |
| ------------------ | -------------- | ------------------------------------ |
| **Dashboard**      | Main Dashboard | `index.html`                         |
| **Authentication** | Login          | `pages/auth/login.html`              |
| **UI Elements**    | Colors         | `pages/ui_elements/colors.html`      |
| **UI Elements**    | Buttons        | `pages/ui_elements/buttons.html`     |
| **UI Elements**    | Sweet Alert    | `pages/ui_elements/sweet_alert.html` |
| **Data**           | DataTables     | `pages/data/datatables.html`         |
| **Data**           | Chart.js       | `pages/data/chartjs.html`            |
| **Pages**          | Blank Page     | `pages/blank.html`                   |
| **Errors**         | 404 Not Found  | `pages/errors/404.html`              |
| **Errors**         | Maintenance    | `pages/errors/maintenance.html`      |

---

## 🛠 Tech Stack

| Library                                                                     | Version | Purpose                    |
| --------------------------------------------------------------------------- | ------- | -------------------------- |
| [Bootstrap](https://getbootstrap.com/)                                      | 5.3.0   | CSS framework & components |
| [jQuery](https://jquery.com/)                                               | 3.7.1   | DOM manipulation           |
| [Chart.js](https://www.chartjs.org/)                                        | 4.4.2   | Data visualization         |
| [chartjs-plugin-datalabels](https://chartjs-plugin-datalabels.netlify.app/) | 2.x     | Chart data labels          |
| [SweetAlert2](https://sweetalert2.github.io/)                               | 11.x    | Beautiful alert dialogs    |
| [DataTables](https://datatables.net/)                                       | 1.11.4  | Interactive tables         |
| [Select2](https://select2.org/)                                             | 4.1.0   | Enhanced select inputs     |
| [Flatpickr](https://flatpickr.js.org/)                                      | latest  | Date/time picker           |
| [Litepicker](https://litepicker.com/)                                       | latest  | Date range picker          |
| [Font Awesome](https://fontawesome.com/)                                    | 6.4.0   | Icon library               |
| [Remix Icon](https://remixicon.com/)                                        | 4.2.0   | Additional icons           |
| [Google Fonts – Outfit](https://fonts.google.com/specimen/Outfit)           | —       | Typography                 |

> All libraries are loaded via **CDN** — no package manager or build step required.

---

## 🚀 Getting Started

Since this is a pure static HTML template, no installation is needed.

### 1. Clone the repository

```bash
git clone https://github.com/madaapril/assama-free-html-admin-template.git
cd assama-free-html-admin-template
```

### 2. Open in browser

```bash
# Using VS Code Live Server (recommended)
# Right-click index.html → Open with Live Server

# Or open directly
start index.html   # Windows
open index.html    # macOS
```

> **Tip:** Use a local server (e.g., VS Code Live Server) for the best experience.

---

## 📁 Structure

```
assama-free-html-admin-template/
├── index.html                    # Dashboard (main entry point)
├── assets/
│   ├── css/
│   │   └── style.css             # Global styles & glassmorphism theme
│   ├── js/
│   │   └── script.js             # Shared JS (sidebar, tooltips, form loading)
│   └── images/
│       └── favicon.png
├── layouts/
│   ├── default.html              # Base layout structure
│   ├── auth.html                 # Authentication layout
│   └── blank.html                # Blank layout
├── pages/
│   ├── auth/
│   │   └── login.html
│   ├── ui_elements/
│   │   ├── colors.html           # Text, background, border, badge colors
│   │   ├── buttons.html          # Solid, outline, pill, icon, size, group
│   │   └── sweet_alert.html      # Basic alerts, toasts, confirm dialogs
│   ├── data/
│   │   ├── datatables.html       # CRUD table with modal & delete confirm
│   │   └── chartjs.html          # Horizontal bar chart with dummy data
│   ├── errors/
│   │   ├── 404.html
│   │   └── maintenance.html
│   └── blank.html                # Starter template for new pages
└── README.md
```

---

## 🎨 Color Palette

| Name    | Hex       | Usage                         |
| ------- | --------- | ----------------------------- |
| Primary | `#4e73df` | Buttons, links, active states |
| Success | `#1cc88a` | Success states, chart bars    |
| Danger  | `#e74a3b` | Error states, delete actions  |
| Warning | `#f6c23e` | Warning states                |
| Info    | `#36b9cc` | Info states                   |

---

## 📋 Creating a New Page

Use `pages/blank.html` as a starter. It includes:

- ✅ Full sidebar with navigation
- ✅ Topbar with user dropdown
- ✅ Footer
- ✅ All CDN scripts pre-loaded
- ✅ `../../assets/js/script.js` already included

---

## ☕ Support

If you find this template useful and want to support the development, you can buy me a coffee!

<p align="center">
  <a href="https://trakteer.id/madaapril/tip" target="_blank">
    <img src="https://img.shields.io/badge/Support%20Me%20on-Trakteer-%23EE5A24?style=for-the-badge&logo=buymeacoffee&logoColor=white" alt="Support on Trakteer" />
  </a>
</p>

Your support helps me keep building and maintaining open-source projects like this. Thank you! 🙏

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Mohammada Aprilianto**

- Instagram: [@madaapril](https://instagram.com/madaapril)
- Store: [madaapril.myr.id](https://madaapril.myr.id)
- Trakteer: [trakteer.id/madaapril](https://trakteer.id/madaapril/tip)

---

<p align="center">Made with ❤️ by Mohammada Aprilianto</p>
<p align="center">
  <a href="https://trakteer.id/madaapril/tip">☕ Support this project</a>
</p>
