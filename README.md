
# Churchday Dashboard

A Next.js frontend application for church management, connecting to a Node.js backend service.

## Backend Service
- **API URL**: [https://churchday-backend.onrender.com](https://churchday-backend.onrender.com/)

## Current Implementation Status

### ✅ Completed Features
- **Landing Page** (`/`) - Welcome page with login/register links
- **Authentication Pages** - Login (`/login`) and Register (`/register`) UI
- **Dashboard Layout** - Navigation with Home, Invoices, Customers, Attendance
- **Invoice Management** - Create and edit forms with customer selection
- **Data Display** - Responsive table component for invoices
- **UI Components** - Reusable buttons, forms, and navigation

### 🚧 In Development
- **Attendance Page** (`/dashboard/attendance`) - Currently a placeholder with TODOs
- **Backend Integration** - Forms are not yet connected to API
- **Authentication Logic** - Login/register forms need API integration

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS** with forms plugin
- **Heroicons** for UI icons
- **Font Awesome** (partially implemented)
- **@vercel/postgres** for database (seeding setup exists)

## Getting Started

### Prerequisites
- Node.js >= 18.17.0
- npm or yarn

### Installation

```bash
# Clone and install
git clone <your-repo>
cd nextjs-churchday-dashboard
npm install

# Start development server
npm run dev
```
Visit http://localhost:3000



churchday, this is the frontend for my backend node mgmt app

explore the node service here: 
- [backend on render](https://churchday-backend.onrender.com/)
