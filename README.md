# Farhan Arinata — Personal Archive V2

A static personal journal website built with semantic HTML, modern CSS, and vanilla JavaScript.

## Files

- `index.html` — content and structure
- `style.css` — responsive editorial design, animation, mobile layout
- `script.js` — preloader, scroll progress, reveal animations, active navigation, mobile menu, cursor glow, magnetic hover, subtle tilt

## GitHub Pages update

Replace the old files in your existing `farhan-arinata` repository with these three:

- index.html
- style.css
- script.js

Keep them in the repository root. GitHub Pages will redeploy automatically after the commit.

## Spotify

The playlist is embedded in the **About her** section using:

https://open.spotify.com/playlist/4F3lstGyli9H4dXO0U5jp0

## Customizing your writing

Open `index.html` and search for:

- `Selected entries` for Thoughts
- `Dear you` for Letters
- `Songs that remind me of her` for the Spotify section
- `Fragments I didn't want to lose` for Memories

## Adding real photos

In each `.memory-visual` block, replace the placeholder with an image, for example:

```html
<div class="memory-visual">
  <img src="images/photo-01.jpg" alt="A short description">
</div>
```

Then add this CSS:

```css
.memory-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

## Notes

- Mobile-first responsive behavior included.
- `prefers-reduced-motion` is respected.
- No framework is required.
- Google Fonts and the Spotify embed require an internet connection.
