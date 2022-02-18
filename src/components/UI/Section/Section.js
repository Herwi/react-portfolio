import classes from './Section.module.css';

const Section = ({ children, first }) => {
    let styling = classes.section
    if(first) styling += ` ${classes.first}`;
    return (
        <div className={styling}>
            {children}
        </div>
    );
};

export default Section;
