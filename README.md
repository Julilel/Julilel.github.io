# Personal Portfolio Website

A clean, modern landing page-style resume website with navigation. Built with HTML and CSS, ready to deploy on GitHub Pages.

## Features

- 📱 Fully responsive design
- 🎨 Modern, clean UI with smooth scrolling
- 🔗 Navigation with social media links
- 💼 Skills showcase section
- 💬 Testimonials section
- 📧 Contact form (requires backend integration for functionality)

## Required Images

Place the following images in the `/images` folder:

- `hero-headshot.webp` - Your profile photo (recommended: 350x350px, circular crop will be applied)
- `testimony-headshot.webp` - Testimonial giver's photo (recommended: 200x200px)
- `html-logo.webp` - HTML logo (30x30px)
- `css-logo.webp` - CSS logo (30x30px)
- `javascript-logo.webp` - JavaScript logo (30x30px)
- `node-logo.webp` - Node.js logo (30x30px)
- `react-logo.webp` - React logo (30x30px)

**Tip:** You can find free technology logos at [Simple Icons](https://simpleicons.org/) or use `.png`/`.jpg` formats instead of `.webp`.

## Customization

Edit `index.html` to customize:

1. **Personal Information:**
   - Line 21: Change "John Doe" to your name
   - Line 26-38: Update GitHub, LinkedIn, and email links
   - Line 48: Update hero greeting and intro text

2. **Skills:**
   - Lines 85-109: Add/remove skill cells as needed

3. **Testimonials:**
   - Lines 116-129: Update testimonial content

4. **Colors:**
   Edit `styles.css` (lines 1-5) to change the color scheme:
   ```css
   --text-color: #1a1c20;
   --link-color: #4a76ee;
   --background-color: #eeeff1;
   ```

## Deploying to GitHub Pages

### Option 1: Deploy from Main Branch

1. **Commit and push your code:**
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Select **/ (root)** folder
   - Click **Save**

3. **Access your site:**
   - Your site will be live at: `https://yourusername.github.io/Personal_Website/`
   - It may take a few minutes to deploy

### Option 2: Custom Domain (Optional)

1. In GitHub Settings → Pages, add your custom domain
2. Create a `CNAME` file in the root with your domain name
3. Update your domain's DNS settings to point to GitHub Pages

## Contact Form Note

⚠️ The contact form in this template is **non-functional** on static hosting. To make it work, you need to:

- Use a service like [Formspree](https://formspree.io/), [Netlify Forms](https://www.netlify.com/products/forms/), or [Web3Forms](https://web3forms.com/)
- Or add a backend API to handle form submissions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

Template based on [notunderctrl/portfolio-website](https://github.com/notunderctrl/portfolio-website)

## License

Free to use for personal and commercial projects.
