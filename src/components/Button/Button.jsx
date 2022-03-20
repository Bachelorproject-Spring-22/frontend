import './Button.css';

function Button({ variant, type, onClick, label, size, ariaLabel, icon }) {

    return (
        <button
            className={`button ${variant} ${size}-size`.trim()}
            type={type}
            onClick={onClick}
            aria-label={ariaLabel}>
            {icon}
            {label.trim()}
        </button>
    )
}

Button.defaultProps = {
    size: 'full',
    type: 'button',
    label: 'default label',
    variant: 'primary',
    icon: null
}

export default Button;