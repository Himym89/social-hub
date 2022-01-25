/* eslint-disable react/button-has-type */
import classes from './ButtonAction.module.css';

export default function ButtonAction({ children, ...props }) {
  return (
    <button {...props} className={classes.btnCreate}>
      {children}
    </button>
  );
}
