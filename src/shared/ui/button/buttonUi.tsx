import style from "./buttonUi.module.css";

interface propsButton extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "delete" | "baseButton" | "addToCart";
  type?: "button" | "submit" | "reset";
}

export const ButtonUi: React.FC<propsButton> = ({
  children,
  variant = "baseButton",
  ...rest
}) => {
  return (
    <button className={`${style[variant]} ${style.baseButton}`} {...rest}>
      {children}
    </button>
  );
};
