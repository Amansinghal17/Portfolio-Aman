# Resume Download Feature - Setup Instructions

## Overview
I've added a resume download feature to your portfolio. Users can now download your resume from:
1. **Hero Section** - A "Download Resume" button appears right after the main hero text (desktop and mobile)
2. **Navbar** - A resume download button in the navigation menu (accessible from any page)

## Setup Instructions

### Step 1: Prepare Your Resume
1. Create a **PDF version** of your resume
2. Name it: `Aman_Singhal_cv (3).pdf` (or update the filename in the component)

### Step 2: Add Resume to Project
1. Create a new folder: `public/assets/resume/`
2. Place your resume PDF in: `public/assets/resume/Aman_Singhal_cv (3).pdf`

### Step 3: Update Filename (Optional)
If you want to use a different resume filename:

**In `src/components/ResumeDownload.jsx` (line 9)**:
```javascript
const resumePath = "assets/resume/YOUR_FILENAME.pdf";
link.download = "YOUR_FILENAME.pdf";
```

## Files Modified/Created
- ✅ **Created**: `src/components/ResumeDownload.jsx` - Resume download component
- ✅ **Updated**: `src/components/HeroText.jsx` - Added resume button to hero section
- ✅ **Updated**: `src/sections/Navbar.jsx` - Added resume button to navbar

## Features
- ✨ Click-to-download functionality with download icon
- ✨ Smooth animations using Framer Motion
- ✨ Responsive design (works on desktop and mobile)
- ✨ Accessible button with proper labels
- ✨ Styled to match your portfolio theme (gradient from lavender to purple)

## How It Works
1. When users click the "Resume" button, the browser downloads the PDF file
2. The download is handled client-side using the HTML5 download attribute
3. No server-side processing required

## Testing
After adding your resume file:
1. Run `npm run dev` to start the development server
2. Click the "Resume" button in the hero section or navbar
3. The browser should download your resume
