:root{
  --bg:#111;
  --panel:#141214;
  --accent:#FF7900;
  --accent-2:#F4D35E;
  --muted:#9b9b9b;
  --glass: rgba(255,255,255,0.03);
  --radius:12px;
  --fw-sans: 'Poppins', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

/* IMPORTANT: I kept the background exactly as requested (no changes to background color or styles). */

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:var(--fw-sans);
  background:
    radial-gradient(1200px 500px at 10% 10%, rgba(255,121,0,0.03), transparent),
    var(--bg);
  color:#eee;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  transition:background .3s ease;
  overflow-y:scroll;
}

/* container */
.container{max-width:1100px;margin:0 auto;padding:24px}

/* header */
.site-header{position:sticky;top:12px;z-index:40}
.header-inner{
  display:flex;align-items:center;gap:20px;justify-content:space-between;
  background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.15));
  border-radius:14px;padding:14px 20px;border:1px solid rgba(255,255,255,0.03);
  box-shadow:0 4px 20px rgba(0,0,0,0.6), inset 0 -2px 0 rgba(255,121,0,0.06);
}
.brand{display:flex;align-items:center;gap:10px}
.logo{font-weight:800;color:var(--accent);font-size:20px;letter-spacing:1px}
.sub{font-size:11px;color:var(--muted);display:block;margin-top:-6px}

/* nav */
.main-nav{display:flex;gap:18px;flex-wrap:wrap}
.main-nav .nav-link{
  color:#dcdcdc;text-decoration:none;padding:8px 6px;border-radius:6px;font-weight:600;font-size:14px;
  position:relative;
}
.main-nav .nav-link.active{color:var(--accent)}
.main-nav .nav-link.active::after{
  content:"";height:3px;background:var(--accent);position:absolute;left:0;right:0;bottom:-12px;border-radius:4px;
}

/* mobile menu */
.mobile-menu{display:none;background:transparent;border:0;color:#fff;font-size:20px;cursor:pointer}

/* hero */
.hero{position:relative;margin-top:18px;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,0.03);background:var(--panel)}
.hero-img{width:100%;height:420px;object-fit:cover;display:block;filter:contrast(1.05)}
.hero-overlay{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;color:var(--accent-2);text-shadow:0 4px 40px rgba(0,0,0,0.7);padding:20px}
.hero-overlay h1{font-size:40px;margin:0;color:var(--accent);font-weight:800}
.hero-overlay .lead{margin-top:8px;color:#f0dca8;opacity:0.95}
.hero-actions{margin-top:16px;display:flex;gap:12px;justify-content:center}

/* buttons */
.btn{display:inline-block;background:var(--accent);color:#111;padding:10px 18px;border-radius:8px;text-decoration:none;font-weight:700;margin-top:12px;border:0;cursor:pointer}
.btn-outline{background:transparent;color:var(--accent);border:2px solid rgba(255,121,0,0.12);padding:8px 16px}
.btn:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(255,121,0,0.08)}

/* cards and grids */
.cards-row{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.feature-card{background:var(--glass);padding:24px;border-radius:12px;border:1px solid rgba(255,255,255,0.03)}
.feature-card h3{color:var(--accent);margin:0 0 8px 0}
.feature-card p{color:var(--muted)}

.grid{display:grid;gap:16px}
.grid-2{grid-template-columns:repeat(2,1fr)}
.grid-3{grid-template-columns:repeat(3,1fr)}
.grid-4{grid-template-columns:repeat(4,1fr)}
.grid-5{grid-template-columns:repeat(5,1fr)}
.cards-grid{margin-top:18px}

/* character/jutsu card */
.char-card, .jutsu-card, .summary-card{
  background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.08));
  border-radius:12px;padding:14px;border:1px solid rgba(255,255,255,0.03);
  text-align:center;transition:transform .26s cubic-bezier(.2,.9,.3,1), box-shadow .26s ease;
  will-change:transform;
}
.char-card img, .jutsu-card img{width:100%;height:220px;object-fit:cover;border-radius:10px;margin-bottom:12px}
.char-card h3, .jutsu-card h3{color:var(--accent);margin:8px 0 6px 0}
.char-card p, .jutsu-card p{color:var(--muted);margin:0 0 4px 0}
.char-card:hover, .jutsu-card:hover{
  transform:translateY(-10px) scale(1.02);
  box-shadow:0 20px 60px rgba(0,0,0,0.6), 0 6px 24px rgba(255,121,0,0.06);
}

/* summary */
.summary-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:16px 0}
.summary-card{padding:18px}
.summary-card .big{font-size:36px;color:var(--accent);margin:6px 0}
.muted{color:var(--muted)}

/* timeline & lists */
.timeline{display:flex;gap:22px;align-items:flex-start;margin-top:18px}
.timeline-left img{width:320px;border-radius:10px;object-fit:cover}
.timeline-list{list-style:none;padding:0;margin:0;flex:1}

/* gallery specific */
.gallery-grid .char-card{cursor:pointer}
.gallery-grid .char-card img{height:160px}

/* lightbox */
.lightbox{
  display:none; position:fixed;inset:0;background:rgba(0,0,0,0.85);align-items:center;justify-content:center;flex-direction:column;gap:12px;padding:20px;z-index:2000;
}
.lb-close{position:absolute;right:22px;top:22px;background:transparent;border:0;color:#fff;font-size:22px;cursor:pointer}
.lightbox img{max-width:90%;max-height:70%;border-radius:8px}
.lb-caption{color:#f4d35e;margin-top:8px}

/* contact */
.contact-grid{display:grid;grid-template-columns:1fr 380px;gap:18px}
.contact-form{background:var(--glass);padding:20px;border-radius:12px;border:1px solid rgba(255,255,255,0.03)}
.contact-form label{display:block;margin-bottom:12px;font-size:13px;color:var(--muted)}
.contact-form input, .contact-form textarea{
  width:100%;padding:12px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:#eee;font-size:14px
}

/* footer */
.site-footer{margin:24px 0 60px;opacity:0.95}
.footer-inner{display:flex;justify-content:space-between;align-items:center;color:var(--muted);font-size:13px;padding:12px 20px;border-radius:12px;border:1px solid rgba(255,255,255,0.02);background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(0,0,0,0.05))}
.footer-nav a{color:var(--muted);text-decoration:none;margin-left:12px}

/* responsiveness */
@media (max-width:1100px){
  .grid-5{grid-template-columns:repeat(4,1fr)}
  .summary-grid{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:900px){
  .grid-5{grid-template-columns:repeat(3,1fr)}
  .cards-row{grid-template-columns:repeat(2,1fr)}
  .summary-grid{grid-template-columns:repeat(2,1fr)}
  .timeline-left img{width:260px}
  .contact-grid{grid-template-columns:1fr}
}
@media (max-width:600px){
  .grid-5{grid-template-columns:repeat(2,1fr)}
  .cards-row{grid-template-columns:1fr}
  .hero-overlay h1{font-size:28px}
  .grid-3{grid-template-columns:1fr}
  .main-nav{display:none}
  .mobile-menu{display:block}
  .header-inner{padding:12px}
}

/* page transitions */
.page{opacity:0;transform:translateY(8px);transition:opacity .36s ease, transform .36s ease}
.page.is-visible{opacity:1;transform:none}

/* subtle focus states */
a.btn:focus, button:focus, input:focus, textarea:focus {outline:3px solid rgba(244,211,94,0.12);outline-offset:2px}
