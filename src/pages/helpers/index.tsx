import style from './helpers.module.scss'
import {MagicMotion} from "react-magic-motion";
import {useState} from "react";

interface OpenState {
  [key: number]: boolean;
}

interface Faq {
  title: string;
  description: string;
}

const Helpers = () => {
  const [isOpen, setIsOpen] = useState<OpenState>({});

  const faqArray: Faq[] = [
    {
      title: '🙅🏼 Quem fez o projeto?',
      description: "⚫ Tarcio Elyakin Agra Diniz."
    },
    {
      title: '⏳ Quanto tempo foi feito o projeto',
      description: "6 horas."
    },
  ]

  const toggleOpen = (index: number) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };
  return (
    <div className={style.acordeon}>
      <h2 style={{color: "black"}}>DÚVIDAS? VAMOS TE AJUDAR</h2>
      <div className={`${style.todoList}`}>
        {faqArray.map((faq: Faq, index: number) => (
          <MagicMotion
            key={index}
            transition={{type: "spring", stiffness: 180, damping: 20, mass: 1.1}}
          >
            <div
              style={{
                backgroundColor: "rgba(238, 238, 238)",
                padding: '0.5rem',
                borderRadius: 12,
                margin: "1rem 0",
                overflow: "hidden",
              }}
            >
              <button
                className={style.buttonAcordeon}
                onClick={() => toggleOpen(index)}
              >
                {faq.title}
              </button>
              {isOpen[index] && (
                <div
                  style={{
                    gap: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "1rem",
                    padding: '0.5rem'
                  }}
                >
                  <div>
                    {faq.description}
                  </div>
                </div>
              )}
            </div>
          </MagicMotion>
        ))}
      </div>
    </div>
  );
}

export default Helpers;