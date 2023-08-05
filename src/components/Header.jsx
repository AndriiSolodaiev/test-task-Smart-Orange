import logo from "../images/logo.png";
export const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container header-container">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="navigation-list">
            <li>
              <a href="#header" className="navigation-list__link">
                Головна
              </a>
            </li>
            <li>
              <a href="#hero" className="navigation-list__link">
                Галерея
              </a>
            </li>
            <li>
              <a href="#projects" className="navigation-list__link">
                Проекти
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1xgZYMaTHeaOyQ8XtzuYfeR5ciUO_-IyC/view?usp=sharing"
                className="navigation-list__link"
              >
                Сертифікати
              </a>
            </li>
            <li>
              <a href="#footer" className="navigation-list__link">
                Контакти
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
