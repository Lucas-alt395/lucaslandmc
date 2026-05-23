// based on bapi navbar

// navbar.js - defines custom elements for the navigation bars and footer of the BAPI website
// it's pretty simple!

class LLNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="topbar">
            <div class="logo-area">
                <a href="/" style="text-decoration: none;"><h1>Lucasland</h1></a>
                <p class="tagline">the best country</p>
            </div>
            <div class="nav-links">
                <a href="/wetten/index.html" class="light-text">Wetten</a>
                <a href="/bezoek/index.html" class="btn-signup">Bezoek Lucasland</a>
            </div>
        </nav>
        `;
    }
}

class LLSecNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="topbar">
            <div class="logo-area">
                <a href="/" style="text-decoration: none;"><h1>Lucasland</h1></a>
                <p class="tagline">the best country</p>
            </div>
            <div class="nav-links">
                <a href="/" class="light-text">Terug</a>
            </div>
        </nav>
        `;
    }
}

class LLFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="ll-footer">
            <div class="footer-content">
                <p class="footer-logo">Lucasland</p>
                <p>De rest is in het Engels.</p>
                <p class="disclaimer">
                    <strong>Minecraft</strong> is a trademark of Mojang Studios (Microsoft Corporation). 
                    This site is not affiliated with, authorized, or endorsed by Mojang Studios.
                </p>
                <p class="disclaimer">
                    For the icons: thanks and credit to <a href="https://icon-icons.com/authors/20-iconshock" title="Iconshock link" class="light-text">Iconshock</a> and <a href="https://icon-icons.com" title="Iconshock link" class="light-text">icon-icons.com</a> for the icons used on this site. They are not affiliated with BAPI. I accept their license. (<a href="https://creativecommons.org/licenses/by/4.0/" title="CC link" class="light-text">CC-BY-4.0</a>)
                </p>
                <p class="copyright">© 2026 "Lucasland"</p>
            </div>
        </footer>
        `;
    }
}

// Navbar
customElements.define('ll-navbar', LLNavbar);
customElements.define('sec-navbar', LLSecNavbar);

// Footer
customElements.define('ll-footer', LLFooter);


