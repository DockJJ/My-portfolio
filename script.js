:root {
    --bg: #07080a; --bg-alt: #0c0d10; --card: #12141a; --line: rgba(125,140,190,.16);
    --text: #f6f3ec; --muted: #9aa0b0; --accent: #3fae8a; --accent-2: #4d6fb3;
    --head: 'Fraunces', Georgia, serif; --body: 'Manrope', system-ui, sans-serif;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 76px; }
body { font-family: var(--body); background: var(--bg); color: var(--text); line-height: 1.65; overflow-x: hidden; }
h1, h2, h3 { font-family: var(--head); line-height: 1.15; letter-spacing: -.01em; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
img { max-width: 100%; height: auto; display: block; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.container { width: 90%; max-width: 1120px; margin: 0 auto; }
.section { padding: 96px 0; }
.alt { background: var(--bg-alt); }
h2 { font-size: clamp(1.8rem, 4vw, 2.6rem); margin-bottom: 1rem; }
.section-intro { color: var(--muted); max-width: 62ch; margin-bottom: 2rem; }

.btn { display: inline-block; padding: .8rem 1.6rem; border-radius: 8px; font-weight: 600; border: 1px solid var(--line); transition: border-color .2s, background .2s; cursor: pointer; font-family: var(--body); font-size: .95rem; color: var(--text); background: transparent; }
.btn:hover { border-color: var(--accent); }
.btn-primary { background: var(--accent); border-color: var(--accent); color: #04120d; }
.btn-primary:hover { background: #55c4a0; }

.navbar { position: fixed; inset: 0 0 auto; z-index: 20; padding: 14px 0; transition: background .3s, border-color .3s; border-bottom: 1px solid transparent; }
.navbar.scrolled { background: rgba(7,8,10,.92); backdrop-filter: blur(12px); border-color: var(--line); }
.nav-content { display: flex; align-items: center; justify-content: space-between; }
.logo { font-family: var(--head); font-size: 1.5rem; font-weight: 700; }
.logo span { color: var(--accent); }
.nav-links { display: flex; align-items: center; gap: 1.8rem; font-size: .92rem; color: var(--muted); }
.nav-links a:hover { color: var(--text); }
.nav-links .btn { color: var(--text); padding: .5rem 1.1rem; }
.menu-btn { display: none; background: none; border: 1px solid var(--line); color: var(--text); padding: .45rem .9rem; border-radius: 8px; font: inherit; cursor: pointer; }

.hero { padding: 140px 0 80px; }
.hero-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 3.5rem; align-items: center; }
.availability { color: var(--accent); font-weight: 600; font-size: .95rem; margin-bottom: 1rem; }
.hero h1 { font-size: clamp(2.3rem, 5.2vw, 3.8rem); margin-bottom: 1.4rem; }
.hero-sub { color: var(--muted); font-size: 1.1rem; max-width: 56ch; margin-bottom: 2rem; }
.hero-ctas { display: flex; flex-wrap: wrap; gap: .9rem; }
.hero-photo img { border-radius: 14px; border: 1px solid var(--line); aspect-ratio: 4/5; object-fit: cover; box-shadow: 18px 18px 0 -2px rgba(63,174,138,.18); }

.stats { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid var(--line); border-radius: 14px; background: var(--card); margin: 1.5rem 0 2rem; }
.stat { padding: 1.8rem 1.4rem; border-right: 1px solid var(--line); }
.stat:last-child { border-right: 0; }
.stat strong { display: block; font-family: var(--head); font-size: clamp(1.7rem, 3.2vw, 2.4rem); color: var(--accent); }
.stat span { color: var(--muted); font-size: .9rem; }
.about { max-width: 70ch; color: var(--muted); font-size: 1.05rem; }

.proof-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
.proof-grid figure { background: var(--card); border: 1px solid var(--line); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; }
.proof-grid .wide { grid-column: 1 / -1; }
.proof-grid img { width: 100%; background: #fff; cursor: zoom-in; }
figcaption { padding: 1rem 1.2rem 1.2rem; color: var(--muted); font-size: .92rem; }

.jobs { display: grid; gap: 2rem; max-width: 800px; margin-top: 1.5rem; }
.jobs article { border-left: 2px solid var(--accent); padding-left: 1.4rem; }
.jobs h3 { font-size: 1.3rem; }
.meta { color: var(--muted); font-size: .9rem; margin: .3rem 0 .8rem; }
.jobs li { position: relative; padding-left: 1.1rem; margin-bottom: .45rem; color: #d6d3cb; }
.jobs li::before { content: ''; position: absolute; left: 0; top: .7em; width: 5px; height: 5px; border-radius: 50%; background: var(--accent-2); }

.skills-grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 4rem; }
dt { font-weight: 700; margin-top: 1.1rem; }
dd { color: var(--muted); max-width: 60ch; }
.edu { color: var(--muted); }
.edu strong { color: var(--text); }

.contact { max-width: 720px; }
.contact p { color: var(--muted); margin-bottom: 2rem; }
.footer { padding: 28px 0; border-top: 1px solid var(--line); color: var(--muted); font-size: .9rem; }

.lightbox { border: 0; background: transparent; max-width: 96vw; max-height: 94vh; margin: auto; }
.lightbox::backdrop { background: rgba(0,0,0,.88); }
.lightbox img { max-width: 96vw; max-height: 86vh; background: #fff; border-radius: 8px; }
.lightbox .close { display: block; margin: 10px auto 0; padding: .5rem 1.4rem; border-radius: 8px; border: 1px solid var(--line); background: var(--card); color: var(--text); font: inherit; cursor: pointer; }

@media (max-width: 860px) {
    .menu-btn { display: block; }
    .nav-links { display: none; position: absolute; top: 100%; left: 0; right: 0; flex-direction: column; align-items: flex-start; gap: 1rem; padding: 1.2rem 5%; background: var(--bg); border-bottom: 1px solid var(--line); }
    .nav-links.active { display: flex; }
    .hero-grid, .skills-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .hero-photo { max-width: 340px; }
    .stats { grid-template-columns: 1fr 1fr; }
    .stat:nth-child(2) { border-right: 0; }
    .stat:nth-child(-n+2) { border-bottom: 1px solid var(--line); }
    .proof-grid { grid-template-columns: 1fr; }
    .section { padding: 72px 0; }
}
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } * { transition: none !important; } }
