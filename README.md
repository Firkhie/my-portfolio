# Firdig Alfalakhi — Portfolio

Personal portfolio website showcasing my software engineering experience, technical stack, and featured projects.

**Live site:** [alfalakhi.catco.uno](https://alfalakhi.catco.uno/)

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** Radix UI
- **Contact:** EmailJS
- **Package Manager:** pnpm

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Firkhie/my-portfolio.git
cd my-portfolio
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Environment variables

Copy the example environment file and fill in your EmailJS credentials:

```bash
cp .env.example .env
```

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

### 4. Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
pnpm build
```

---
