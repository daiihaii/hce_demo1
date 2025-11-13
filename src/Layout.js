import "./assets/css/main.css";
import anhlogo from "./assets/images/Ten-truong-do-1000x159.png";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Layout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="layout-container">
      {/* Header */}
      <header className="header">
        <div className="header__logo">
          <img src={anhlogo} alt="Logo" className="logoImg" />
        </div>
        <nav className="header__nav">
          <a href="/" className="nav__link">
            Trang Chủ
          </a>
          <a href="/trang1" className="nav__link">
            EGOV
          </a>
          <a href="/admin/products" className="nav__link">
            Quản Trị
          </a>
        </nav>
        <div className="header__actions">
          {user ? (
            <>
              <span className="header__username">👤 {user.username}</span>
              <button className="button button--logout" onClick={handleLogout}>
                Đăng Xuất
              </button>
            </>
          ) : (
            <a href="/login" className="button button--login">
              Đăng Nhập
            </a>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__inner">
          © 2025 – Công Ty … | Mọi quyền được bảo lưu.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
