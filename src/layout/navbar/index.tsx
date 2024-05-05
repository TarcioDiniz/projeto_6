import {useLocation, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { MagicTabSelect } from "react-magic-motion";
import styles from "./navbar.module.scss"

const tabData = [
  { title: 'INICIO', route: '/' },
  { title: 'FORMULÁRIO', route: '/form' },
  { title: 'DUVIDAS', route: '/faq' }
];

const Navbar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentRoute = location.pathname;
    const foundIndex = tabData.findIndex(tab => tab.route === currentRoute);
    if (foundIndex !== -1) {
      setSelectedIndex(foundIndex);
    }
  }, [location]);

  const handleTabClick = (index: number, route: string) => {
    setSelectedIndex(index);
    navigate(route);
  };

  return (
    <div className={styles.header}>
      <h2>PROJETO 6</h2>
      <div>
        {tabData.map((tab, i) => (
          <button
            type="button"
            key={`tab-${i}`}
            onClick={() => handleTabClick(i, tab.route)}
            className={styles.buttonTab}
          >
            {tab.title}

            {selectedIndex === i && (
              <div style={{position: "relative", transform: "translateY(3px)"}}>
                <MagicTabSelect
                  id="underline"
                  transition={{type: "spring", bounce: 0.3}}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "0.15rem",
                      backgroundColor: "white",
                      position: "absolute",
                    }}
                  />
                </MagicTabSelect>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
