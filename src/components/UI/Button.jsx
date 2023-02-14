import styles from "./Button.module.css";

const VARIANT_NAMES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

const BUTTON_VARIANTS = {
  [VARIANT_NAMES.PRIMARY]: styles.primaryButton,
  [VARIANT_NAMES.SECONDARY]: styles.secondaryButton,
};

export const Button = ({
  className,
  variant,
  title,
  onClick,
  icon,
  width,
  borderRadius,
}) => {
  const computedClassName = BUTTON_VARIANTS[variant];

  return (
    <button
      className={`${computedClassName} ${className}`}
      onClick={onClick}
      style={{ width: width, borderRadius: borderRadius }}
    >
      {icon && icon}
      {title}
    </button>
  );
};
