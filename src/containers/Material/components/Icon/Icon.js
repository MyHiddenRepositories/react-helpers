import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
        fontSize: 16,
        width: 20,
        height: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export const Icon = (props) => {
    const {
        name,
        className,
    } = props;
    const classes = useStyles();

    return <span
        className={clsx(
            `ecom-icon ecom-icon-${name}`, 
            classes.root,
            className,
        )}
    />
}