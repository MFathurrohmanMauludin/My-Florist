import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

// class yang menginisiasikan (menetapkan/memasang) komponen-komponen dari Application Shell dan pertama kali dijalankan.
class App {
    // object destructuring ES6
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });

        // kita bisa menginisiasikan komponen lain bila ada
    }

    // me-render halaman berdasarkan URL yang aktif.
    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;
