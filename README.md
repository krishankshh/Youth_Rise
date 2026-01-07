# Youth Rise India - NGO Website

A modern, responsive website for Youth Rise India built with React + Vite. This website showcases our mission to empower the next generation through education, mentorship, and youth leadership programs.

## 🌟 Features

- **Modern Design**: Vibrant, youth-focused design based on brand moodboard
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **6 Core Pages**: Home, About, Programs, Get Involved, Donate, Contact
- **Web3Forms Integration**: Volunteer registration and contact forms
- **Donation System**: QR code-based donation with UPI support
- **Social Integration**: WhatsApp community and Instagram links
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility

## 🎨 Design System

The design follows the Youth Rise India brand colors:
- **Primary Blue**: #1e5aa8
- **Primary Orange**: #f47920
- **Accent Teal**: #2a9d8f
- **Accent Green**: #6a994e
- **Accent Yellow**: #f9a825

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Web3Forms

To enable the contact and volunteer registration forms:

1. Go to [Web3Forms](https://web3forms.com/)
2. Create a free account and get your Access Key
3. Update the following files with your Access Key:
   - `src/pages/GetInvolved.jsx` (line 30)
   - `src/pages/Contact.jsx` (line 29)
   
Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key.

### 3. Add Your Donation QR Code (Optional)

1. Save your UPI payment QR code as `public/qr-code.png`
2. Update the UPI ID in `src/pages/Donate.jsx` (line 96)
3. The QR code will automatically display when users click "Show Payment QR Code"

### 4. Update Social Media Links

Update the following placeholder links with your actual URLs:

**Instagram**:
- `src/components/Footer.jsx` (line 35)
- `src/pages/Contact.jsx` (lines 66, 113)

**WhatsApp Community**:
- `src/components/Footer.jsx` (line 44)
- `src/pages/Contact.jsx` (lines 57, 122)

**Email**:
- `src/components/Footer.jsx` (line 68)
- `src/pages/Contact.jsx` (line 48)

### 5. Run Development Server

```bash
npm run dev
```

The website will open at `http://localhost:5173`

### 6. Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 📁 Project Structure

```
Youth_Rise/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── GetInvolved.jsx
│   │   ├── Donate.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles & design system
├── logo/               # Logo assets
├── moodboard.png       # Design reference
├── package.json
└── vite.config.js
```

## 🎯 Pages Overview

### Home
- Hero section with call-to-action
- Mission & Vision cards
- Impact statistics
- Key themes showcase
- Latest updates section

### About
- Organization story
- Mission & Vision statements
- Core values
- Call-to-action

### Programs
- Featured Gujarat program
- Impact statistics
- Program features and outcomes
- Focus areas

### Get Involved
- Volunteer opportunities
- Registration form (Web3Forms)
- Areas of interest selection

### Donate
- Donation impact breakdown
- UPI QR code display
- Transparency section
- Alternative support options

### Contact
- Contact information
- Social media links
- Contact form (Web3Forms)
- Multiple contact methods

## 🛠️ Customization

### Updating Content

All content is in the JSX files under `src/pages/`. You can easily edit:
- Text content
- Statistics and numbers
- Impact stories
- Program details

### Styling

The design system is defined in `src/index.css` with CSS custom properties (variables). You can customize:
- Colors
- Spacing
- Typography
- Border radius
- Shadows
- Transitions

### Adding Photos

When you're ready to add photos from your Gujarat program:

1. Create a `/public/images/` folder
2. Add your photos
3. Update `src/pages/Programs.jsx` to display them in the gallery placeholder section

## 📱 Social Media Setup

Make sure to update these links with your actual social media URLs:
- Instagram: `@youthriseindia` (update in Footer and Contact)
- WhatsApp: Community link (update in Footer and Contact)

## 🌐 Deployment

### Netlify (Recommended for frontend)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Other Hosting

Build the project and upload the `dist/` folder to any static hosting service.

## 📝 TODO

- [ ] Replace Web3Forms access keys with your actual keys
- [ ] Add your donation QR code image
- [ ] Update social media links
- [ ] Add Gujarat program photos
- [ ] Update contact email address
- [ ] Test all forms before deployment
- [ ] Add Google Analytics (optional)

## 🤝 Contributing

This website is built for Youth Rise India. For modifications or suggestions, please contact the development team.

## 📄 License

© 2026 Youth Rise India. All rights reserved.

---

**Built with ❤️ for empowering the next generation**
