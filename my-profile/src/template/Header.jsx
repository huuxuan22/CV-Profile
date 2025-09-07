import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  // Theo dõi scroll để cập nhật active item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'blog', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveItem(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (item) => {
    return activeItem === item;
  };

  // CSS styles dưới dạng JavaScript object
  const styles = `
    /* Hiệu ứng cho logo */
    .logo-text {
      position: relative;
      display: inline-block;
      transition: all 0.3s ease;
    }

    .logo-text::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 50%;
      background-color: #3b82f6;
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    .logo:hover .logo-text::after {
      width: 100%;
    }

    /* Hiệu ứng cho menu desktop */
    .nav-item {
      position: relative;
      padding: 0.5rem 0;
      color: #374151;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .nav-item::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 50%;
      background-color: #3b82f6;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform: translateX(-50%);
    }

    .nav-item:hover {
      color: #3b82f6;
    }

    .nav-item:hover::after {
      width: 100%;
    }

    .nav-item.active {
      color: #3b82f6;
      font-weight: 600;
    }

    .nav-item.active::after {
      width: 100%;
      height: 3px;
      background-color: #2563eb;
    }

    /* Hiệu ứng cho nút menu mobile */
    .menu-toggle {
      transition: all 0.3s ease;
      border-radius: 4px;
      padding: 4px;
    }

    .menu-toggle:hover {
      background-color: #f3f4f6;
      transform: scale(1.05);
    }

    .menu-toggle:active {
      transform: scale(0.95);
    }

    /* Hiệu ứng cho menu mobile */
    .mobile-menu {
      animation: slideDown 0.3s ease-out;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .mobile-nav-item {
      padding: 0.75rem 0;
      color: #374151;
      border-bottom: 1px solid #e5e7eb;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .mobile-nav-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
      transition: all 0.5s ease;
    }

    .mobile-nav-item:hover::before {
      left: 100%;
    }

    .mobile-nav-item:hover {
      color: #3b82f6;
      padding-left: 1rem;
    }

    .mobile-nav-item.active {
      color: #3b82f6;
      font-weight: 600;
      background-color: rgba(59, 130, 246, 0.05);
      border-left: 4px solid #3b82f6;
      padding-left: 1rem;
    }

    /* Hiệu ứng transition cho header */
    .header {
      transition: all 0.3s ease;
    }

    /* Đảm bảo không bị giật khi scroll */
    body {
      scroll-behavior: smooth;
    }
  `;

  return (
    <>
      {/* Thêm styles vào head */}
      <style>{styles}</style>
      
      <header className="header bg-white shadow-md fixed w-full top-0 z-50 h-20">
        <div className="container mx-auto px-6 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo hoặc tên */}
            <div className="logo text-xl font-bold text-blue-600">
              <span className="logo-text">TRAN DUONG HUU XUAN</span>
            </div>
            
            {/* Menu cho desktop */}
            <nav className="hidden md:flex space-x-8 ml-auto mr-10">
              <a 
                href="#home" 
                onClick={() => handleItemClick('home')}
                className={`nav-item ${isActive('home') ? 'active' : ''}`}
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => handleItemClick('about')}
                className={`nav-item ${isActive('about') ? 'active' : ''}`}
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={() => handleItemClick('skills')}
                className={`nav-item ${isActive('skills') ? 'active' : ''}`}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                onClick={() => handleItemClick('projects')}
                className={`nav-item ${isActive('projects') ? 'active' : ''}`}
              >
                Projects
              </a>
              <a 
                href="#blog" 
                onClick={() => handleItemClick('blog')}
                className={`nav-item ${isActive('blog') ? 'active' : ''}`}
              >
                My Blog
              </a>
              <a 
                href="#contact" 
                onClick={() => handleItemClick('contact')}
                className={`nav-item ${isActive('contact') ? 'active' : ''}`}
              >
                Contact
              </a>
            </nav>
            
            {/* Nút menu mobile */}
            <button 
              className="md:hidden focus:outline-none menu-toggle"
              onClick={toggleMenu}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Menu mobile */}
          {isMenuOpen && (
            <nav className="mobile-menu md:hidden pb-4 bg-white absolute left-0 right-0 shadow-lg">
              <div className="flex flex-col space-y-0 px-6">
                <a 
                  href="#home" 
                  onClick={() => handleItemClick('home')}
                  className={`mobile-nav-item ${isActive('home') ? 'active' : ''}`}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  onClick={() => handleItemClick('about')}
                  className={`mobile-nav-item ${isActive('about') ? 'active' : ''}`}
                >
                  About
                </a>
                <a 
                  href="#skills" 
                  onClick={() => handleItemClick('skills')}
                  className={`mobile-nav-item ${isActive('skills') ? 'active' : ''}`}
                >
                  Skills
                </a>
                <a 
                  href="#projects" 
                  onClick={() => handleItemClick('projects')}
                  className={`mobile-nav-item ${isActive('projects') ? 'active' : ''}`}
                >
                  Projects
                </a>
                <a 
                  href="#blog" 
                  onClick={() => handleItemClick('blog')}
                  className={`mobile-nav-item ${isActive('blog') ? 'active' : ''}`}
                >
                  My Blog
                </a>
                <a 
                  href="#contact" 
                  onClick={() => handleItemClick('contact')}
                  className={`mobile-nav-item ${isActive('contact') ? 'active' : ''}`}
                >
                  Contact
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;