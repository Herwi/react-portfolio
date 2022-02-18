import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.header}>
            <img className={classes.image} src={"./logo_260x124_biale.png"} alt="logo" />
        </div>
    );
};

export default Header;
