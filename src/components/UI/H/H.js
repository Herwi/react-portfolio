import classes from './H.module.css';

const H1 = ({ children }) => <div className={classes["h1"]}> {children} </div>;
const H2 = ({ children }) => <div className={classes["h2"]}> {children} </div>;
const H3 = ({ children }) => <div className={classes["h3"]}> {children} </div>;

export {
    H1,
    H2, H3
};
