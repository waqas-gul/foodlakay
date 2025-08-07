# 🍽️ FoodLakay - Next.js Food Commerce Platform

[![Next.js](https://img.shields.io/badge/Next.js-14-%23000000)](https://nextjs.org/) 
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-%23316192)](https://www.postgresql.org/)
[![Responsive](https://img.shields.io/badge/Responsive-Design-%2342b983)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

## 🖥️ Key Screens

<div align="center">
  <h3>1. Homepage</h3>
  <img src="/1920 - HOME.png" alt="FoodLakay Home" width="90%">
  <p>Featured meal kits, seasonal promotions, and chef recommendations</p>
</div>

<div align="center">
  <h3>2. Add-to-Cart Flow</h3>
  <img src="/1920 - STORE.png" alt="Cart Interaction" width="60%">
  <p>Real-time cart updates with ingredient customization options</p>
</div>

<div align="center">
  <h3>3. Mobile Experience</h3>
  <img src="/1921 - HOME.png" alt="Mobile View" width="30%">
  <p>Optimized for on-the-go ordering with touch-friendly UI</p>
</div>

## ✨ Core Features

- **Chef-Curated Meal Kits**  
  Pre-portioned ingredients with restaurant recipes

- **Smart Cart System**  
  - Auto-add essential ingredients  
  - Portion size adjustments  
  - Scheduled delivery options

- **Cross-Platform**  
  Seamless experience from desktop to mobile

## 🛠 Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | Next.js 14 (App Router) |
| **Styling** | Tailwind CSS + CSS Modules |
| **State** | Zustand (Cart management) |
| **Database** | PostgreSQL (Vercel Storage) |
| **Payments** | Stripe Elements |

## 🚀 Run Locally

```bash
# Clone with sample data
git clone --branch starter-kit https://github.com/foodlakay/foodlakay.git

# Install dependencies
npm install

# Start dev server
npm run dev
