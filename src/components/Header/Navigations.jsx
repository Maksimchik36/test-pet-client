import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PetsIcon from '@mui/icons-material/Pets';
import BurgerMenu from './MenuBurger/BurgerMenu';
import UpperBlock from './MenuBurger/UpperBlock';
import CenterBlock from './MenuBurger/CenterBlock';
import BottomBlock from './MenuBurger/BottomBlock';
import styleLogo from './Logo.module.scss';
import styleNavigation from './Navigations.module.scss';
import stylesMenuBurger from './MenuBurger/BurgerMenu.module.scss';
import { useTranslation } from 'react-i18next';

const styleObjForHeaderMenuAndBurgerMenu = {
  styleNavigation,
  stylesMenuBurger,
  styleLogo
};

const link = [
  { to: '/news', text: 'news' },
  { to: '/notices', text: 'Find pet' },
  { to: '/friends', text: 'friends' }
];

const linkAuth = [
  { to: '/login', text: 'login' },
  { to: '/register', text: 'register' }
];

const Navigations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('en');
  }, []);

  let location = useLocation();

  return (
    <>
      {/* navigation on wab */}
      <div className={styleNavigation.navigationLinkWrapper}>
        {link.map((el) => (
          <NavLink
            key={Math.random()}
            to={el.to}
            className={location.pathname === el.to ? `${styleNavigation.navigationLink} ${styleNavigation.active}` : styleNavigation.navigationLink}
          >
            <span>{t(`${el.text}`)}</span>
          </NavLink>
        ))}
      </div>
      {/* navigation for registration */}
      {!isUser ? (
        <div className={styleNavigation.buttonLinkWrapp}>
          {linkAuth.map((el) => (
            <NavLink key={Math.random()} to={el.to} className={styleNavigation.buttonlink}>
              <span>{t(`${el.text}`)}</span>
            </NavLink>
          ))}
        </div>
      ) : (
        <NavLink to="/user" className={styleNavigation.buttonlinkUser}>
          <AccountCircleIcon sx={{ fontSize: 28, marginRight: '12px' }} />
          <span>Account</span>
        </NavLink>
      )}

      <div className={styleNavigation.burgerPetsIcon} onClick={() => setIsOpen((prev) => !prev)}>
        <PetsIcon sx={{ fontSize: 40 }} />
      </div>
      {/* burger menu */}
      <BurgerMenu styleProp={isOpen}>
        <UpperBlock styleProp={styleObjForHeaderMenuAndBurgerMenu} isOpen={setIsOpen} />
        {!isUser ? (
          <CenterBlock styleProp={styleObjForHeaderMenuAndBurgerMenu} isOpen={setIsOpen} />
        ) : (
          <NavLink to="/user" className={styleNavigation.buttonlinkMenuBurgerUser}>
            <AccountCircleIcon sx={{ fontSize: 28, marginRight: '12px' }} />
            <span>Account</span>
          </NavLink>
        )}

        <BottomBlock styleProp={styleObjForHeaderMenuAndBurgerMenu} isOpen={setIsOpen} />
      </BurgerMenu>
    </>
  );
};

export default Navigations;
