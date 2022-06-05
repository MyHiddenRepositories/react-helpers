import MuiButton from '@material-ui/core/Button';
import clsx from 'clsx';
import { When } from 'react-if';

import { Icon } from '../Icon/Icon';
import { ButtonTypes } from './types';
import { useStyles } from './styles';



export const Button = (props) => {
    const {
        type = ButtonTypes.primary,
        children,
        disabled = false,
        icon,
        iconLeft,
        iconRight,
        className,
        ...args
    } = props;

    const classes = useStyles({
        type,
    });

    return <MuiButton
        disabled={disabled}
        className={clsx(
            classes.root,
            className
        )}
        {...args}
    >
        <When condition={!!iconLeft}>
            <div className={classes.iconLeft}>
                <Icon name={iconLeft} />
            </div>
        </When>
        <When condition={!!icon}>
            <div>
                <Icon name={icon} />
            </div>
        </When>
        {children}
        <When condition={!!iconRight}>
            <div className={classes.iconRight}>
                <Icon name={iconRight} />
            </div>
        </When>
    </MuiButton>
}