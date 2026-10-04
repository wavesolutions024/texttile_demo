import { useEffect, useState } from "react";
import "./Header.scss";
import { FiHeart } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <>
      <div class="header_parent parent">
        <div
          class="header_bottom_line"
          style={{ width: `${scrollProgress}%` }}
        ></div>
        <div class="header_cont cont">
          <div class="left_side">
            <h2>Textile</h2>

            <div className={`hamburger ${isOpen ? "active" : ""}`}>
              <label>
                <input
                  type="checkbox"
                  checked={isOpen}
                  onChange={() => setIsOpen(!isOpen)}
                  onBlur={()=>setIsOpen(false)}
                />

                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />

                  <path className="line--2" d="M0 50h70" />

                  <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
                </svg>
              </label>
            </div>
          </div>

          <div class="right_side">
            <a href="">Login</a>
            <div class="like">
              <FiHeart />
              <span>14</span>
            </div>
            <div class="cart">
              <BsBagCheck />
              <span>14</span>
            </div>
          </div>
        </div>
        <div class={isOpen ? "main_header_section active" : "main_header_section" }>
          <a href="">
            <p>Home</p>
            <span>
                +
            </span>
          </a>
           <a href="">
            <p>About</p>
            <span>
                +
            </span>
          </a>
           <a href="">
            <p>Fabrics</p>
            <span>
                +
            </span>
          </a>
           <a href="">
            <p>Services</p>
            <span>
                +
            </span>
          </a>

        </div>
      </div>
    </>
  );
};

export default Header;
