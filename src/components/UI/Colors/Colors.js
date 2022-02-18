import classes from "./Colors.module.css";

const Blue = ({ children }) => <span className={classes.blue}>{children}</span>;
const Dark = ({ children }) => <span className={classes.dark}>{children}</span>;
const Gray = ({ children }) => <span className={classes.gray}>{children}</span>;
const LightGray = ({ children }) => <span className={classes["light-gray"]}>{children}</span>;
const White = ({ children }) => <span className={classes.white}>{children}</span>;

export {
    Blue,
    Dark,
    Gray,
    LightGray,
    White
};