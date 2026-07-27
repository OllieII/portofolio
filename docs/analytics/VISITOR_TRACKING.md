# Visitor Tracking Setup

## Google Analytics (Recommended)

### Steps to Enable:

1. **Get your Google Analytics Measurement ID:**
   - Go to https://analytics.google.com/
   - Create a new GA4 property (or use existing one)
   - Get your Measurement ID (looks like `G-XXXXXXXXXX`)

2. **Add your Measurement ID:**
   - Open `src/analytics.js`
   - Replace `'G-XXXXXXXXXX'` with your actual Measurement ID

3. **Deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

### What Gets Tracked:
- ✅ Page views (every route change)
- ✅ Visitor demographics and location
- ✅ Device and browser information
- ✅ Traffic sources (where visitors come from)
- ✅ Session duration and bounce rate

### Track Custom Events:

You can track specific interactions like project views:

```javascript
import { logEvent } from './analytics';

// Example: Track when someone views a project
logEvent('Project', 'View', 'Library of Meialia');

// Example: Track when someone clicks email
logEvent('Contact', 'Click', 'Email');
```

---

## Alternative Options:

### 1. Simple Counter (No Setup Required)
Use a simple badge service:
- Add to your README: `![Visitors](https://visitor-badge.laobi.icu/badge?page_id=ollieii.portofolio)`
- Shows basic visitor count

### 2. Microsoft Clarity (Free, Easy)
- Visual heatmaps and session recordings
- No coding required after adding script
- Great for UX insights

### 3. Plausible Analytics (Privacy-Focused)
- GDPR compliant
- Simple, lightweight
- Paid service

---

## Current Status:
✅ Google Analytics installed
⚠️ Need to add your Measurement ID to `src/analytics.js`
