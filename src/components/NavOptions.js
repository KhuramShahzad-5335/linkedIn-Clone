import "./NavOptions.css";

function NavOptions({ title, Icon }) {
  return (
    <div className="navOptions__container">
      {Icon && <Icon className="Icon__option" />}
      {title && <h3 className="Icon__title">{title}</h3>}
    </div>
  );
}

export default NavOptions;
