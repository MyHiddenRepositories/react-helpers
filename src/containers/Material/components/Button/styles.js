import { makeStyles } from '@material-ui/styles';
import { ButtonTypes } from './types';

export const useStyles = makeStyles(theme => ({
    root: (props) => {
        let styles = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'none',
            height: 36,
            width: undefined,
            borderRadius: 6,
            backgroundColor: '#565EED',
            padding: '8px 24px',
            color: '#FFFFFF',
            fontSize: 14,
            fontWeight: 600,
            '&:hover': {
                backgroundColor: '#454BBE'
            },
            '&:disabled': {
                color: '#FFFFFF',
                backgroundColor: '#DDDDE4'
            }
        }

        styles = getStylesByType(styles, props.type);


        return styles
    },
    iconLeft: {
        marginRight: 4
    },
    iconRight: {
        marginLeft: 4,
    }
}));

const getStylesByType = (defaultStyles, type) => {
    let styles = {...defaultStyles};

    switch (type) {
        case ButtonTypes.primary: {
            styles = {
                ...styles,
                height: 48,
                borderRadius: 8,
                padding: '14px 24px'
            }
            break;
        }
        case ButtonTypes.secondarySmall: {
            styles = {
                ...styles,
                padding: 8
            }
            break;
        }
        case ButtonTypes.icon: {
            styles = {
                ...styles,
                width: 36,
                height: 36,
                padding: 8,
                minWidth: 36,
                backgroundColor: 'transparent',
                color: '#333333',
                '&:hover': {
                    ...styles['&:hover'],
                    backgroundColor: 'rgba(86, 94, 237, 0.12)',
                },
                '&:disabled': {
                    color: '#DDDDE4',
                    backgroundColor: 'transparent'
                }
            }
            break;
        }
        case ButtonTypes.iconSmall: {
            styles = {
                ...styles,
                width: 24,
                height: 24,
                minWidth: 24,
                padding: 0,
                backgroundColor: 'transparent',
                color: '#333333',
                '&:hover': {
                    ...styles['&:hover'],
                    backgroundColor: 'rgba(86, 94, 237, 0.12)',
                },
                '&:disabled': {
                    color: '#DDDDE4',
                    backgroundColor: 'transparent'
                }
            }
            break;
        }
        case ButtonTypes.ghost: {
            styles = {
                ...styles,
                backgroundColor: 'transparent',
                color: '#333333',
                '&:hover': {
                    ...styles['&:hover'],
                    backgroundColor: 'rgba(86, 94, 237, 0.12)',
                },
                '&:disabled': {
                    color: '#DDDDE4',
                    backgroundColor: 'transparent'
                }
            }
            break;
        }
        case ButtonTypes.ghostSmall: {
            styles = {
                ...styles,
                backgroundColor: 'transparent',
                color: '#333333',
                padding: 8,
                '&:hover': {
                    ...styles['&:hover'],
                    backgroundColor: 'rgba(86, 94, 237, 0.12)',
                },
                '&:disabled': {
                    color: '#DDDDE4',
                    backgroundColor: 'transparent'
                }
            }
            break;
        }
        default: break;
    }

    return styles
}