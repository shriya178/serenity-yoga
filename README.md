Flowra – Yoga Studio Website

A responsive yoga studio landing page built with React, Vite and Tailwind CSS. Icons come from react-icons.

Features
Hero section with a 3-photo fading slideshow
Navbar with hover dropdown menus
Brands strip, "What we offer" cards and About section
Classes, Why Choose Us, Weekly Schedule (day tabs) and Pricing
Testimonials, Blog and Footer with newsletter form
Fully responsive (mobile, tablet, desktop)
Video Explanation

## Project Walkthrough

Watch the full project walkthrough here:
🎥 [Click here to watch the video](https://drive.google.com/file/d/1X6wsOnslcIQLygKDuwcbOke3htcq2yZG/view?usp=sharing)

Tech Stack
Tool	Use
React	UI components
Vite	Fast dev server and build
Tailwind CSS	Styling
react-icons	Icons
Getting Started
1. Install packages
bash
npm install
npm install react-icons
2. Start the project
bash
npm run dev

Open the link shown in the terminal (usually http://localhost:5173).

3. Build for production
bash
npm run build
Folder Structure
serenity-yoga/
├── public/                 ← put your photos here
│   ├── about1.jpg
│   ├── about2.jpg
│   ├── class1.jpg
│   ├── class2.jpg
│   ├── class3.jpg
│   ├── why1.jpg
│   ├── why2.jpg
│   ├── blog1.jpg
│   ├── blog2.jpg
│   ├── blog3.jpg
│   └── blog4.jpg
├── src/
│   ├── assets/images/      ← brand logos (brand-1.png … brand-5.png)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Brands.jsx
│   │   ├── Offer.jsx
│   │   ├── About.jsx
│   │   ├── Classes.jsx
│   │   ├── Why.jsx
│   │   ├── Schedule.jsx
│   │   ├── Pricing.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Blog.jsx
│   │   └── Footer.jsx
│   ├── App.jsx             ← puts all sections together
│   ├── main.jsx
│   └── index.css
└── index.html
Images

Use your own photos or free ones from Pexels or Unsplash.

Hero slideshow: edit the slides list at the top of src/components/Hero.jsx. Use /hero1.jpg, /hero2.jpg, /hero3.jpg after saving them in public/.
Other sections: save the files in public/ with the names shown above.
Brand logos: save in src/assets/images/ as brand-1.png to brand-5.png (they are imported in Brands.jsx).

If an image is missing, a grey box is shown instead, so the page will not break.

Fonts (optional)

Add this inside <head> of index.html:

html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:wght@400;500&display=swap" rel="stylesheet">

Then add this at the bottom of src/index.css:

css
body { font-family: "Inter", sans-serif; }
.font-serif { font-family: "Source Serif 4", serif; }
How to Edit
I want to change…	Open this file
Menu links and dropdown items	Navbar.jsx
Main heading and buttons	Hero.jsx
Slideshow photos	slides list in Hero.jsx
Service cards	offers list in Offer.jsx
Classes	classes list in Classes.jsx
Weekly schedule	classes list in Schedule.jsx
Package names and prices	plans list in Pricing.jsx
Reviews	reviews list in Testimonials.jsx
Blog posts	posts list in Blog.jsx
Contact details	Footer.jsx

To add a new card or item, copy one line inside the list and change the text.

Colors Used
Color	Code
Page background	
#f5f0ed
Card background	
#eee4df
Brown (buttons, accents)	
#8b6450
Dark green (cards, footer)	
#232920
Notes
The Schedule day tabs highlight when clicked, but every day currently shows the same 6 classes.
The Contact and Newsletter forms are for display only and do not send data yet.
Dropdown menus open on hover, so they work on desktop only.
Author

Made by your name here.
