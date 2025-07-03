const express = require('express');
const path = require('path');
const SpotifyWebApi = require('spotify-web-api-node');
const socketIO = require('socket.io');
const http = require('http');
const open = (...args) => import('open').then(({ default: open }) => open(...args));

const app = express();
const PORT = 8888;

app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);
const io = socketIO(server);

const spotifyApi = new SpotifyWebApi({
  clientId: '8812d0ae342c4e19900c81684719bdab',
  clientSecret: '8ea24c0c7bb542cd903851dca2ad51ac',
  redirectUri: `http://127.0.0.1:${PORT}/callback`,
});

let lastTrack = '';

app.get('/login', (req, res) => {
  const scopes = ['user-read-playback-state', 'user-read-currently-playing'];
  const authUrl = spotifyApi.createAuthorizeURL(scopes, 'state');
  res.redirect(authUrl);
});

app.get('/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    spotifyApi.setAccessToken(data.body['access_token']);
    spotifyApi.setRefreshToken(data.body['refresh_token']);
    res.send('✅ Spotify connected. You can close this tab.');
    pollSong();
  } catch (err) {
    console.error('Error getting tokens:', err);
    res.send('❌ Error during authentication.');
  }
});

async function pollSong() {
  setInterval(async () => {
    try {
      const playback = await spotifyApi.getMyCurrentPlaybackState();
      const item = playback.body?.item;
      if (item) {
        const song = `${item.name} - ${item.artists.map(a => a.name).join(', ')}`;
        const coverUrl = item.album.images[0]?.url || '';
        if (song !== lastTrack) {
          lastTrack = song;
          io.emit('song', { song, coverUrl });
          console.log('🎶 Now playing:', song);
        }
      } else {
        console.log('No active playback detected');
      }
    } catch (err) {
      console.log('Error fetching song:', err.message);
    }
  }, 10000);
}

server.listen(PORT, async () => {
  console.log(`🎧 Spotify app running on http://127.0.0.1:${PORT}/login`);
  await open(`http://127.0.0.1:${PORT}/login`);
  setTimeout(() => {
    open(`http://127.0.0.1:${PORT}/overlay.html`);
  }, 2000);
});
