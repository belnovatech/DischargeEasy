import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Header.css';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="container header-container">

        {/* Logo */}
        <Link to="/" className="logo" aria-label="DischargeEasy Home">
          <span className="logo-discharge">Discharge</span>
          <span className="logo-easy">Easy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">

          {/* HOME */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/health-insurance"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Health Insurance
          </NavLink>

          <NavLink
            to="/term-insurance"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Term Insurance
          </NavLink>

          <NavLink
            to="/claim-assistance"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Claim Assistance
          </NavLink>

          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            How It Works
          </NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/why-us"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Why Us
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="header-cta-wrapper">
          <Link to="/contact" className="btn-get-assistance">
            <span>Get Assistance</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="hamburger-btn"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">

          {/* HOME */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/health-insurance"
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? 'active' : ''}`
            }
          >
            Health Insurance
          </NavLink>

          <NavLink
            to="/term-insurance"
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? 'active' : ''}`
            }
          >
            Term Insurance
          </NavLink>

          <NavLink
            to="/claim-assistance"
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? 'active' : ''}`
            }
          >
            Claim Assistance
          </NavLink>

          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? 'active' : ''}`
            }
          >
            How It Works
          </NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? 'active' : ''}`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/why-us"
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? 'active' : ''}`
            }
          >
            Why Us
          </NavLink>

          {/* Mobile CTA */}
          <Link to="/contact" className="mobile-cta-btn">
            <span>Get Assistance</span>
            <ArrowRight size={17} />
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;