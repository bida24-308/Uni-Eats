# ⚡ FreshBite - Quick Start Guide

## 🎯 Getting Started in 30 Seconds

### Option 1: Direct Browser Access (Easiest)
1. Locate the `index.html` file in your project folder
2. Double-click it to open in your default browser
3. Start browsing! 🎉

### Option 2: Local Web Server (Recommended)

#### Windows (PowerShell)
```powershell
# Python 3.x (if installed)
python -m http.server 8000

# Navigate to: http://localhost:8000
```

#### Mac/Linux (Terminal)
```bash
# Python 3.x
python3 -m http.server 8000

# Or Python 2.x
python -m SimpleHTTPServer 8000

# Navigate to: http://localhost:8000
```

#### Node.js (if installed)
```bash
npx http-server
```

## 🗂️ File Structure You're Using

```
Your Project/
├── index.html ..................... HOME PAGE
├── pages/
│   ├── products.html .............. MEALS CATALOG
│   ├── subscription.html .......... PLANS & PRICING
│   ├── about.html ................. COMPANY INFO
│   ├── contact.html ............... CONTACT FORM
│   └── account.html ............... USER DASHBOARD
├── css/
│   └── styles.css ................. ALL STYLING
├── js/
│   ├── main.js .................... CORE FUNCTIONS
│   ├── products.js ................ PRODUCT FEATURES
│   ├── subscription.js ............ BILLING SYSTEM
│   └── account.js ................. ACCOUNT SYSTEM
└── README.md ...................... DOCUMENTATION
```

## 🚀 Features to Try Right Now

### 1️⃣ Browse Products
- Go to "Our Meals" page
- Filter by cuisine, diet, or price
- See 9 different meal options
- ✓ Click "Add to Cart"

### 2️⃣ Choose a Plan
- Go to "Subscription" page
- Toggle Month/Quarter/Year billing
- Watch prices auto-update with discounts
- Click "Choose Plan"

### 3️⃣ Explore Dashboard
- Click "Account" button (top right)
- Browse different tabs:
  - Dashboard (overview)
  - Subscriptions (manage plan)
  - Orders (history)
  - Profile (edit info)
  - Preferences (food likes)
  - Billing (payment)
  - Support (help)

### 4️⃣ Contact Support
- Go to "Contact" page
- Fill out the form
- Send a message (shows success notification)

### 5️⃣ Learn About Company
- Visit "About" page
- See team, values, and impact

## 🔧 Customization Cheat Sheet

### Change Company Name
1. Open `index.html` and `pages/*.html`
2. Find "FreshBite" 
3. Replace with your company name
4. Search & Replace in all files

### Change Colors
1. Open `css/styles.css`
2. Find `:root` at the top
3. Change color hex values:
   ```css
   --primary-color: #FF6B4A;     /* Orange */
   --secondary-color: #4ECDC4;   /* Teal */
   --accent-color: #FFE66D;      /* Yellow */
   ```

### Change Meal Options
1. Open `js/main.js`
2. Find `getMeals()` function
3. Edit meal list with your options

### Change Subscription Prices
1. Open `js/main.js`
2. Find `getPlans()` function
3. Update pricing values

### Change About Info
1. Open `pages/about.html`
2. Edit text, team members, stats

## 📊 Browser Storage Demo

Your website saves data locally. Try this:

### 1. Add to Cart
- Go to Products page
- Add items to cart
- Refresh page - items still there! ✓

### 2. Test Preferences
- Go to Account > Preferences
- Select dietary options
- Refresh page - selections saved! ✓

### 3. View Stored Data
- Press `F12` to open Developer Tools
- Go to Application tab
- Click LocalStorage
- See all saved data (under "freshbite_" keys)

## 💼 For Business Use

### Add More Pages
1. Create new HTML file (e.g., `pages/blog.html`)
2. Copy navbar/footer from existing pages
3. Add to navbar links:
   ```html
   <li><a href="pages/blog.html">Blog</a></li>
   ```

### Add Custom Content
- Update company name, logo, colors
- Add your actual meal images
- Replace placeholder text with real content
- Update contact information

### Deploy to Internet
1. **Netlify** (Free & Easy):
   - Drag & drop folder to netlify.com
   - Your site is live!

2. **GitHub Pages**:
   - Push to GitHub
   - Enable Pages in settings
   - Free hosting!

3. **Web Host**:
   - Upload files via FTP
   - Works on any host

## 🚨 Troubleshooting

### ❌ Pages show "404" or "File not found"
✓ **Solution**: Check file paths match exactly:
  - Make sure spelling matches (case-sensitive)
  - Verify folder structure matches docs
  - Try opening with local server instead

### ❌ Styles look broken
✓ **Solution**: 
  - Press Ctrl+Shift+R to hard refresh
  - Make sure `css/styles.css` exists
  - Check file paths in HTML: `href="css/styles.css"`

### ❌ Buttons don't work
✓ **Solution**:
  - Verify JS files exist in `js/` folder
  - Make sure script tags point to correct files
  - Check browser console (F12) for errors

### ❌ Data doesn't save
✓ **Solution**:
  - Not in private/incognito mode? 
  - Clear browser cache
  - Try different browser
  - Check localStorage is enabled

## 🎓 Learning Opportunities

### Want to Learn?
- **HTML**: Edit any `.html` file to change content
- **CSS**: Open `styles.css` to see how styling works
- **JavaScript**: Check `js/main.js` for interactive features

### Try These:
1. Change hero title in index.html
2. Add new meal to products list
3. Change button colors in CSS
4. Add new team member to about page
5. Create a new subscription plan

## 📱 Mobile Testing

### Test on Mobile Devices
1. Find your computer's IP:
   - Windows: Run `ipconfig`, find IPv4
   - Mac/Linux: Run `ifconfig`

2. On mobile phone:
   - Connect to same WiFi
   - Visit: `http://YOUR-IP:8000`
   - See website on phone! 📱

### Or Use Browser DevTools
1. Open DevTools (F12)
2. Click device/mobile icon
3. Choose device type
4. See how it looks!

## 🔐 Security Note

This is a front-end only website. For production with real data:
- Add backend server (Node.js, Python, etc.)
- Set up database (SQL, MongoDB, etc.)
- Implement user authentication
- Add payment processing (Stripe, PayPal, etc.)
- Use HTTPS encryption

## 📞 Quick Support Commands

```javascript
// Open console (F12) and paste:

// See all saved data
localStorage

// Clear all data
localStorage.clear()

// View cart contents
FreshBite.Cart.items

// Check user preferences
FreshBite.UserPreferences.get()

// View analytics
FreshBite.Storage.get('analytics')
```

## ✅ Checklist - After Installation

- [ ] Can open index.html in browser
- [ ] Navbar appears and looks good
- [ ] Can click products and add to cart
- [ ] Can select subscription plan
- [ ] Account dashboard works
- [ ] Contact form works
- [ ] Mobile view looks good (use F12)
- [ ] All pages load without errors

## 🎉 You're Ready!

Your FreshBite website is complete and ready to:
✓ Be customized with your brand  
✓ Be shared with friends/clients  
✓ Be deployed to the internet  
✓ Be extended with new features  
✓ Be used as a base for learning  

---

**Need help?**
1. Read README.md for detailed docs
2. Check browser console (F12) for errors
3. Verify file structure matches documentation
4. Review source code - it's well-commented!

Happy building! 🍽️✨
