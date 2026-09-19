# Netlify Deployment Guide (Netlify Par Live Karne Ka Tareeqa)

Aapki website Netlify par live karne ke liye 100% ready hai.

---

## Asaan Tareeqa 1: Netlify Drop (Bagair GitHub ke, 10 Seconds mein Live!)
1. Apne computer par project ka **`dist`** folder locate karein (ya AI Studio se ZIP download karke `dist` folder nikal lein).
2. Browser mein open karein: **[app.netlify.com/drop](https://app.netlify.com/drop)**
3. Netlify par login karein.
4. Apne computer se sirf **`dist`** folder ko drag karke wahan chhor (drop) dein.
5. 5 se 10 seconds mein aapki website live ho jayegi aur aapko live `.netlify.app` link mil jayega!

---

## Tareeqa 2: GitHub se Netlify (Continuous Deployment)
1. AI Studio ke top right menu se **Export to GitHub** karein.
2. [app.netlify.com](https://app.netlify.com) par jayein aur **"Add new site" -> "Import an existing project"** select karein.
3. GitHub select karein aur apna repository pick karein.
4. Netlify khud ba khud settings utha lega (kyun ke humne `netlify.toml` configure kar diya hai):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. **"Deploy site"** par click karein.

---

## File Verification:
- `base: './'` set hai (jis se assets aur data kabhi blank/404 nahi honge).
- `_redirects` aur `netlify.toml` dono shaamil hain (jis se page refresh par koi issue nahi aayega).
