import { Outlet } from 'react-router-dom';
import '../../styles/appLayouts.css';

const appLayout = () => {
  return (
    <>
      <header>
        <h1>Together we will be higher faster</h1>
      </header>
      <main className="template-container">
        <Outlet />
      </main>
      <footer>
        <a
          href="https://lucashenrique1908.github.io/myPortf-lio/"
          id="portfolio"
        >
          WebSite created by: Lucas Souza
        </a>
      </footer>
    </>
  );
};

export default appLayout;
