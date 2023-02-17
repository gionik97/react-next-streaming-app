import Account from "../Account/Account";
import SearchModal from "../SearchModal/SearchModal";

const Header = (props) => {
  return (
    <>
      <header className="top-header">
        <div className="top-header__left-side">
          <div className="top-header__menu-btn">
            <i className="fas fa-bars" />
          </div>
          <div className="top-header__search-btn">
            <i className="fas fa-search" />
          </div>
        </div>
        <div className="top-header__logo"></div>
        <div className="top-header__account">
          <img
            src="https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3422df4a46d2c81c35bf4687a2fa9c52"
            className="top-header__user-img"
            alt=""
          />
          <div className="top-header__user-name">Jeremy</div>
        </div>
        <Account />
        <SearchModal />
      </header>
    </>
  );
};

export default Header;
