#obs-spotify

🎵 SPOTIFY NOW PLAYING OVERLAY SETUP (FULL INSTRUCTIONS)

✅ Install Node.js:
- Go to https://nodejs.org and download the “LTS” version.
- Install with default settings (make sure “Add to PATH” is checked).
- Open PowerShell and run:
  node -v
  npm -v
- If both show version numbers, you're ready.

📁 Create Project Folder:
- In terminal:
  mkdir spotify-overlay
  cd spotify-overlay

📦 Initialize Project:
- Run:
  npm init -y

📚 Install Packages:
- Run:
  npm install express socket.io spotify-web-api-node open

🧠 Create spotify.js Server File:
- In your project folder, create a file named spotify.js.
- Paste the full Spotify server code I gave you.
- Replace 'YOUR_CLIENT_ID' and 'YOUR_CLIENT_SECRET' with your Spotify credentials.
- Save the file.

🌐 Create Overlay HTML:
- Inside your project folder, create a folder named public.
- Inside public, create overlay.html.
- Paste the full overlay HTML code I gave you.
- Save the file.

🎯 Spotify Developer Setup:
- Go to https://developer.spotify.com/dashboard/applications
- Create a new app.
- Set Redirect URI to:
  http://127.0.0.1:8888/callback
- Copy Client ID and Client Secret.
- Paste them into spotify.js where indicated.

▶️ Run the Server:
- In PowerShell, inside your project folder, run:
  node spotify.js
- Your browser will open the Spotify login page automatically.
- Log in and authorize.
- The overlay page will open automatically showing current song info.

🖥️ Add Overlay to OBS:
- Open OBS Studio.
- Add a new Browser Source.
- Set URL to:
  http://127.0.0.1:8888/overlay.html
- Adjust width and height to fit your layout.
- Make sure "Shutdown source when not visible" is unchecked for continuous updates.

🛑 To Stop the Server:
- Press Ctrl + C in PowerShell.

DONE! 🎉 Your Spotify Now Playing overlay is ready to stream.

From — Forky999
