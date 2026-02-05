export default function Header() {
  return (
    <nav className="navbar navbar-expand bg-body-tertiary fixed-top">
      <div className="container">
        {/* LOGO */}
        <a className="navbar-brand" href="#">
          <img src="/img/dc-logo.png" alt="logo" height="60" />
        </a>

        {/* MENU */}
        <ul className="navbar-nav ms-auto dc-menu">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Characters
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Comics
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              TV
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Games
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Collectibles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Videos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Fans
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Shop
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
