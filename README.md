# 🏥 CarePulse Health Portal

> Multispeciality Clinic & Doctor Portal with **Payload CMS 3.x (MongoDB & Cloudflare R2)** and **Astro Frontend**.

---

## 🚀 Quick Start (One Command)

From the project root (`c:\Exelon\CarePulse-Health-Portal`):

```bash
# 1. Run both CMS and Astro Frontend concurrently
npm run dev
```

This will launch:
- 🩺 **Astro Website (Frontend):** [http://localhost:4321](http://localhost:4321)
- ⚙️ **Payload CMS (Admin & REST API):** [http://localhost:3000](http://localhost:3000)
- 🔑 **Payload Admin Panel:** [http://localhost:3000/admin](http://localhost:3000/admin)

---

## 💻 Running Services Individually

### 1. Payload CMS Backend (`carepulse-cms-admin`)
```bash
# Run only CMS from root
npm run dev:cms

# Or navigate to folder:
cd carepulse-cms-admin
npm run dev
```
- Admin URL: `http://localhost:3000/admin`
- REST APIs:
  - `GET http://localhost:3000/api/blogs`
  - `GET http://localhost:3000/api/globals/about-us`
  - `POST http://localhost:3000/api/enquiries`

### 2. Astro Frontend (`carepulse-website`)
```bash
# Run only Astro website from root
npm run dev:website

# Or navigate to folder:
cd carepulse-website
npm run dev
```
- Website URL: `http://localhost:4321`
- Pages:
  - `/` — Homepage (Hero, Live Stats, Specialties, Doctors)
  - `/blogs` — Health Tips directory with category filters
  - `/blogs/[slug]` — Doctor-authored article detail page
  - `/about-us` — Clinic story, mission, vision, and doctor profiles
  - `/contact-us` — Interactive appointment booking form

---

## 🛠️ Additional Useful Commands

```bash
# Re-seed doctor-themed blogs, about-us stats, and sample enquiries
npm run seed

# Run CSpell spell check
npm run lint:spell

# Build the Astro website for production
npm run build
```

---

## 📦 Architecture & Technologies
- **Backend:** Payload CMS 3.x, Next.js 16 (Turbopack), MongoDB Atlas (`@payloadcms/db-mongodb`), Cloudflare R2 (`@payloadcms/storage-s3`)
- **Frontend:** Astro 5.x / 7.x, Lexical RichText AST renderer, Vanilla CSS design tokens
- **DevOps:** GitHub Actions CI/CD (`.github/workflows/ci.yml`), Husky Git Hooks (`pre-commit`, `pre-push`), CSpell
