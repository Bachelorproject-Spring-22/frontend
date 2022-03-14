import sprite from '../../assets/sprite.svg';
import './icon.css';
import PropTypes from 'prop-types';

function Icon({ iconId, size, style }) {
    return (
        <svg className={`icon ${size}`.trim()} aria-hidden="true" style={style}>

            <use href={sprite + `#${iconId}`.toLowerCase()}></use>
        </svg>
    );
}

Icon.defaultProps = {
    size: 'default',
    iconId: 'account_circle',
    style: null
}

Icon.propTypes = {
    size: PropTypes.oneOf([
        'large',
        'default',
        'medium',
        'small'
    ]),
    iconId: PropTypes.oneOf([
        'account_circle',
        'arrow_right',
        'arrow_upward',
        'build',
        'cancel',
        'dark_mode',
        'delete',
        'error',
        'expand_less',
        'expand_more',
        'file_upload',
        'gpp_maybe',
        'group_add',
        'group_remove',
        'help',
        'home',
        'info',
        'language',
        'leaderboard',
        'lock',
        'login',
        'logout',
        'restore',
        'save',
        'search',
        'settings',
        'text_fields',
        'visibility',
        'visibility_off'
    ]).isRequired
};


export default Icon;