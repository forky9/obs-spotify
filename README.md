# obs-spotify

🎵 SPOTIFY NOW PLAYING OVERLAY SETUP (FULL INSTRUCTIONS)

✅ Install Node.js:
- Go to https://nodejs.org
- Click the green “LTS” button to download.
- Install it with default settings (make sure “Add to PATH” is checked).
- After installing, press the Windows key, type "PowerShell", and open it.
- Type to check versions: node -v  and  npm -v
- If you see version numbers, you’re ready.

📁 Create Your Project Folder:
- Open PowerShell.
- Type: mkdir spotify-overlay
- Then: cd spotify-overlay

📦 Initialize Node.js Project:
- Run: npm init -y
- This creates a package.json with default settings.

📚 Install Required Libraries:
- Run: npm install express socket.io spotify-web-api-node open

🧠 Create Server File (spotify.js):
- Open File Explorer.
- Navigate to your spotify-overlay folder.
- Right-click > New > Text Document.
- Rename it to spotify.js (remove .txt).
- Open spotify.js in Notepad or your code editor.
- Paste the full server code (the one I gave you with Spotify keys).
- IMPORTANT: Replace 'YOUR_CLIENT_ID' and 'YOUR_CLIENT_SECRET' with your Spotify developer app credentials.
- Save and close.

🌐 Create Public Folder & Overlay HTML:
- Inside spotify-overlay, create a folder named 'public'.
- Inside 'public', create a new file overlay.html.
- Open overlay.html and paste the full overlay HTML code I gave you.
- Save and close.

🎯 Setup Spotify Developer App:
- Go to https://developer.spotify.com/dashboard/applications
- Create a new app.
- Set Redirect URI to: http://127.0.0.1:8888/callback
- Copy your Client ID and Client Secret.
- Paste them in spotify.js where indicated.

▶️ Run the Server:
- Back in PowerShell inside spotify-overlay folder, run:
  node spotify.js
- This will auto-open your browser to the Spotify login page.
- Log in and authorize the app.
- Then overlay.html page will open automatically showing the current song.

🧪 Test It:
- Play a song on your Spotify app.
- Your overlay page should update every 10 seconds with song info and cover art.
- Text scrolls if long.
- The overlay page can be captured/added in your streaming software.

🛑 To Stop the Server:
- In PowerShell, press Ctrl + C.

DONE! 🎉 Your Spotify Now Playing overlay is ready to use and stream with.

From — Forky999
