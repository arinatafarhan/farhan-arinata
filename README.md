# Farhan Arinata — Personal Archive (iPhone / flat-root version)

This version does NOT use an `assets` folder. Upload every file directly to the root of your GitHub repository.

Required structure:

farhan-arinata/
├── index.html
├── thoughts.html
├── letters.html
├── letter-september-2-2026.html
├── about-her.html
├── memories.html
├── about.html
├── style.css
├── script.js
├── sprites.svg
├── september-2-2026.jpeg
└── README.md

Important:
- Do not create an `assets` folder for this version.
- `sprites.svg` and `september-2-2026.jpeg` must be beside `index.html`.
- Upload the extracted files, not the ZIP itself.

## Private Message
- `message.html` — private-message form
- `thanks.html` — page shown after successful submission
- Messages are forwarded to `arinatafarhan@gmail.com` using FormSubmit.
- IMPORTANT: after deploying, submit one test message yourself. FormSubmit should send an activation email to that inbox. Confirm it once before expecting normal delivery.

## Added features: Guestbook + 404 + Music
- `guestbook.html` — public guestbook/comments using Utterances.
- `404.html` — custom GitHub Pages 404 with animated pixel cat.
- `script.js` — floating Spotify music drawer on every page.

### Guestbook one-time setup
1. Enable GitHub Issues for `arinatafarhan/farhan-arinata`.
2. Install/authorize the Utterances GitHub App for this repository.
3. Visit the live Guestbook and leave the first comment.

Private Message remains separate.
