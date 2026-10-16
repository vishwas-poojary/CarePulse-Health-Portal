# 🏥 CarePulse Health Portal

[![Astro](https://img.shields.io/badge/Astro-5%2B%20%2F%207.3-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Payload CMS](https://img.shields.io/badge/Payload%20CMS-Headless%20REST%20API-black?style=for-the-badge&logo=payloadcms&logoColor=white)](https://payloadcms.com/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D22.12.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

**CarePulse Health Portal** is an enterprise-grade, high-performance web application designed for multispeciality clinics, healthcare providers, and patients. Built using [Astro](https://astro.build/) for blazingly fast content delivery and coupled with a headless [Payload CMS](https://payloadcms.com/) backend, CarePulse delivers patient-centric healthcare discovery, doctor scheduling enquiries, and curated medical wellness content.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Architecture & Data Flow](#-architecture--data-flow)
- [Repository Structure](#-repository-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Environment Configuration](#-environment-configuration)
- [CMS Integration & API Specifications](#-cms-integration--api-specifications)
- [Available Scripts](#-available-scripts)
- [Production & Deployment](#-production--deployment)
- [License](#-license)

---

## 🌟 Overview

Modern healthcare portals demand high availability, strict accessibility, and instantaneous load times. CarePulse leverages Astro's Islands architecture to serve fast static and server-rendered HTML while integrating dynamically with a headless CMS for content management:

- **Zero JS by default** where possible, keeping the client bundle lightweight and SEO-friendly.
- **Fault-Tolerant Resilience**: Built-in fallbacks allow the frontend to seamlessly render mock data even if the CMS backend is offline.
- **Enterprise Design System**: Tailored medical palette, clear typography, and accessible interactive elements across mobile, tablet, and desktop viewports.

---

## ✨ Key Features

### 👨‍⚕️ Specialist Doctor Directory
- Dynamic listing of clinic doctors, credentials, medical focus, and experience.
- Real-time departmental categorization (Cardiology, Pediatrics, General Medicine, Dental, Orthopedics, Neurology).
- Real-time status indicators (e.g., *Available Today*, verified ratings).

### 📅 Patient Enquiries & Consultations
- Online consultation and appointment request forms.
- Validated inputs for patient contact information, preferred medical department, and clinical details.
- Direct submission pipeline to the CMS backend (`/api/enquiries`) with instant patient feedback.

### 📰 Curated Medical & Wellness Blogs
- Slug-based dynamic routing (`/blogs/[slug]`) for medical articles and preventative healthcare advice.
- Category filtering and structured rich-text formatting with embedded media support.
- Automatic fallback imagery for reliable display under intermittent network conditions.

### 🏢 Clinic Profile & Transparency
- Dedicated **About Us** page with clinic story, core values, mission, vision, and operational metrics (years in service, certified specialists, patient count).
- Comprehensive **Contact Us** page with interactive department selection, operational hours, emergency numbers, and interactive enquiry dispatch.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Astro](https://astro.build/) (`^7.3.8`) | Static Site Generation (SSG) & fast routing |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type-safe data structures and CMS models |
| **Styling** | Vanilla CSS (`global.css`) | Modular, custom design tokens, modern aesthetic, zero framework bloat |
| **Headless CMS** | [Payload CMS](https://payloadcms.com/) | REST API content management for doctors, blogs, and departments |
| **Runtime** | [Node.js](https://nodejs.org/) (`>=22.12.0`) | JavaScript runtime environment |

---

## 📐 Architecture & Data Flow

```mermaid
graph TD
    Client[Browser / Patient Client] -->|HTTP / Astro Pages| AstroApp[CarePulse Astro Application]
    AstroApp -->|Fetches Data with 4s Timeout| CMSLib[src/lib/cms.ts Data Client]
    
    CMSLib -->|REST API Requests| PayloadCMS[Payload CMS Backend]
    
    subgraph PayloadCMS [Headless CMS - Port 3000]
        GlobalAbout[/api/globals/about-us]
        ColDoctors[/api/doctors]
        ColBlogs[/api/blogs]
        ColDept[/api/departments]
        ColEnquiries[/api/enquiries]
    end

    CMSLib -.->|On Timeout or CMS Offline| FallbackStore[(Built-in Fallback Data Store)]
```

---

## 📁 Repository Structure

```text
CarePulse-Health-Portal/
├── public/                     # Static public assets (icons, favicon, logos)
├── src/
│   ├── components/             # Modular Astro UI components
│   │   ├── BlogCard.astro      # Blog article preview card
│   │   ├── DoctorCard.astro    # Doctor profile & availability card
│   │   ├── Footer.astro        # Global site footer with links & emergency contacts
│   │   ├── Navbar.astro        # Responsive navigation with mobile menu
│   │   └── RichText.astro      # Payload CMS Lexical/Slate rich-text renderer
│   ├── layouts/
│   │   └── Layout.astro        # Global HTML shell, SEO metadata, and fonts
│   ├── lib/
│   │   └── cms.ts              # Payload CMS API client, types, & fallback datasets
│   ├── pages/                  # File-based routing engine
│   │   ├── about-us.astro      # About clinic, leadership, mission & vision
│   │   ├── contact-us.astro    # Contact information & patient inquiry form
│   │   ├── index.astro         # Homepage (Hero, Stats, Doctors, Services, Reviews)
│   │   └── blogs/
│   │       ├── index.astro     # Blog articles catalog with category filtering
│   │       └── [slug].astro    # Dynamic single-post article reader
│   └── styles/
│       └── global.css          # Core CSS variables, typography, and utility classes
├── .env.example                # Template for environment variables
├── astro.config.mjs            # Astro configuration
├── package.json                # Project dependencies and script declarations
├── tsconfig.json               # TypeScript configuration
└── AGENTS.md / CLAUDE.md       # AI agent development workflow conventions
```

---

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: `v22.12.0` or higher ([Download Node.js](https://nodejs.org/))
- **npm**: `v10.x` or higher (bundled with Node)
- *(Optional)* A running instance of **Payload CMS** on `http://localhost:3000`

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/vishwas-poojary/CarePulse-Health-Portal.git
cd CarePulse-Health-Portal
```

### 2. Configure Environment Variables
Copy `.env.example` to create your local `.env` file:

```bash
# On Windows (PowerShell):
Copy-Item .env.example .env

# On macOS/Linux:
cp .env.example .env
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Development Server
```bash
npm run dev
```

The application will be live at:
👉 **`http://localhost:4321`**

> **Note for Background Mode:** You can also run the dev server in the background using `npx astro dev --background`. Manage it via `npx astro dev stop`, `npx astro dev status`, or `npx astro dev logs`.

---

## ⚙️ Environment Configuration

Define the following environment variables in your `.env` file:

| Variable | Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| `PUBLIC_CMS_URL` | `string` (URL) | `http://localhost:3000` | The base URL of your Payload CMS backend |

---

## 🔌 CMS Integration & API Specifications

The portal interacts with Payload CMS using standard REST endpoints managed in [`src/lib/cms.ts`](file:///c:/Exelon/CarePulse-Health-Portal/src/lib/cms.ts):

| Endpoint | Method | Description | Fallback Behavior |
| :--- | :---: | :--- | :--- |
| `/api/globals/about-us` | `GET` | Fetches clinic mission, vision, and key metrics | Falls back to `FALLBACK_ABOUT_US` |
| `/api/departments` | `GET` | Retrieves active departments with icon mappings | Falls back to `FALLBACK_DEPARTMENTS` |
| `/api/doctors` | `GET` | Retrieves doctors sorted by display order | Falls back to `DOCTORS_DATA` |
| `/api/blogs` | `GET` | Fetches blog articles filtered by status/category | Falls back to `FALLBACK_BLOGS` |
| `/api/blogs?where[slug][equals]=:slug` | `GET` | Fetches a specific blog post by URL slug | Resolves matching fallback post |
| `/api/enquiries` | `POST` | Submits patient appointment enquiries | Returns error message with hotline notice |

---

## 💻 Available Scripts

Run these scripts from the project root:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local development server at `localhost:4321` |
| `npm run build` | Compiles and builds production-optimized site to `./dist/` |
| `npm run preview` | Starts a local server to preview your `./dist/` production build |
| `npx astro check` | Runs diagnostic and type checks across `.astro` and `.ts` files |

---

## 🚢 Production & Deployment

To build the project for production deployment:

```bash
npm run build
```

The compiled output will be generated in the `./dist/` directory. This static bundle can be deployed to any modern cloud hosting provider:

- **Vercel**: Deploy with zero configuration (`vercel`)
- **Netlify**: Deploy using `netlify deploy` or git integration
- **Cloudflare Pages**: Connect your Git repository and set build command to `npm run build` and output directory to `dist`
- **Docker / Nginx**: Serve static files from `/usr/share/nginx/html`

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
