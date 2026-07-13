# Trishabh Group - Project Reference Guide

This document serves as a complete reference for the Trishabh Group corporate website built in July 2026. It outlines the architecture, tech stack, content management system, and key deployment details.

## 🏗 Tech Stack & Architecture

*   **Framework:** Next.js 16 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Animations:** Framer Motion (for physics-based scroll animations and page transitions)
*   **CMS (Backend):** Sanity (Headless CMS)
*   **Hosting/Deployment:** Vercel (Edge Network)
*   **Version Control:** GitHub

## 🚀 Core Features Built

1.  **Luxury User Interface:** Custom-built UI with a premium dark green (`#14251F`), beige (`#EFECE1`), and gold (`#C09D5B`) color palette. Features smooth micro-animations.
2.  **Dynamic Project Portfolio:** The portfolio categorizes properties automatically (Current, Upcoming, Completed) and generates dynamic individual pages (`/projects/[slug]`) for each property.
3.  **Sanity Studio Integration:** A secure, embedded admin dashboard at `/studio` that allows the client to manage content without code.
4.  **Automated SEO & Performance:** Built-in metadata generation, server-side rendering, and WebP image optimization to rank on Google and load instantly.
5.  **Lead Generation:** Integrated contact and enquiry touchpoints throughout the site.

---

## 📝 Content Management (Sanity CMS)

The website is powered by Sanity. The client can edit content by navigating to:
**`https://trishabhgroup.vercel.app/studio`**

### Managing Projects
In the Studio, under the **"Projects"** tab, you can add or edit real estate properties.
Available fields include:
*   **Title & Slug:** The name of the project and its URL path.
*   **Status:** Dropdown (Current, Upcoming, Completed).
*   **Location & Description:** Text fields for project details.
*   **Visuals:** Main Image upload (automatically optimized).
*   **Configurations & Pricing:** Specs like "2 & 3 BHK" and starting price.

*Note: Whenever content is published in Sanity, the Next.js frontend automatically fetches the new data and updates the live website.*

---

## 🌐 Deployment (Vercel)

The website is deployed via **Vercel** with Continuous Integration (CI/CD) linked to the GitHub repository: `https://github.com/Digvijay1008/trishabh-group-website`

### How to Update the Live Site:
1.  Make changes locally in the code (e.g., in VS Code).
2.  Commit the changes using Git:
    ```bash
    git add .
    git commit -m "Describe your changes"
    git push
    ```
3.  Vercel will automatically detect the push to the `main` branch, run a production build, and deploy the changes live within ~60 seconds.

### Environment Variables
For the site to communicate with Sanity, the following Environment Variables must be present in Vercel and in the local `.env.local` file:
*   `NEXT_PUBLIC_SANITY_PROJECT_ID` (Your unique Sanity ID)
*   `NEXT_PUBLIC_SANITY_DATASET` (Usually "production")

---

## 💰 Business Value Pitch (For Future Clients)

When using this project in your portfolio to secure future ₹75k+ clients, emphasize these points:
*   **Autonomous Control:** "I build custom Dashboards so you can change text and images yourself in 2 minutes without paying developer retainer fees."
*   **Zero-Maintenance Infrastructure:** "Built on Vercel's global edge network (like Nike & Netflix)—it won't crash during heavy ad campaigns and costs $0/month in server fees."
*   **High-End Branding:** "Standard templates look cheap. I use custom Framer Motion animations to make your digital presence feel like a luxury brand."
*   **Built-in SEO Engine:** "The architecture automatically optimizes images and generates SEO metadata to help you rank higher on Google organically."

---
*Developed by Digvijay*
