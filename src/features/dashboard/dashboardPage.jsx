import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../app/Providers/authContext';
import { Link } from 'react-router-dom';
import '../../styles/dashboard.css';

const dashboardPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };
  return (
    <>
      <header className="header-container">
        <div className="meeting-container">
          <button onClick={handleLogout} id="logout-btn">
            Logout
          </button>
          <h2>Welcome in your dashoard</h2>
          <input type="search" name="search" id="search" placeholder="Search" />
         <a href="https://lucashenrique1908.github.io/myPortf-lio/" id='portfolio'>
           Lucas Souza
         </a>
        </div>
      </header>
      <main className="main-container">
        <div className="template-dashboard">
          <Link to={'/overviewGraphicPage'} className='link-pages'>
            <section className="overview-section">
              <h3 className="description">Overview Graphic Page</h3>
            </section>
          </Link>
          <Link to={'/performance'} className='link-pages'>
            <aside className="performace-container">
              <h3 className="description">Performance Graphic Page</h3>
            </aside>
          </Link>
          <Link to={'/socialtraffic'} className='link-pages'>
            <section className="Social-trafic-container">
              <h3 className="description">Social Traffic Graphic Page</h3>
            </section>
          </Link>
        </div>
        <div className="follow-up-container">
          <Link to={'/newuser'} className='link-pages'>
            <div className="template-folow-up" id="new-user">
              <h3 className="description">New Users Graphic Page</h3>
            </div>
          </Link>
          <Link to={'/salespage'} className='link-pages'>
            <div className="template-folow-up" id="sales">
              <h3 className="description">Sales Graphic Page</h3>
            </div>
          </Link>
          <Link to={'/trafficpage'} className='link-pages'>
            <div className="template-folow-up" id="trafic">
              <h3 className="description">Traffic Graphic Page</h3>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default dashboardPage;
