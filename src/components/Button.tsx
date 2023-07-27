import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  value?: string | number | readonly string[];
  autoFocus?: boolean;
  disabled?: boolean;
  name?: string;
  form?: string;
  formAction?: string;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onContextMenu?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onChange?: (e: React.FormEvent<HTMLButtonElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDoubleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onFocus?: (e: React.FocusEvent<HTMLButtonElement, Element>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  className,
  value,
  autoFocus,
  disabled,
  name,
  form,
  formAction,
  onMouseDown,
  onMouseUp,
  onContextMenu,
  onChange,
  onClick,
  onDoubleClick,
  onFocus,
}) => {
  return (
    <button
      type={type}
      className={className}
      value={value}
      autoFocus={autoFocus}
      disabled={disabled}
      name={name}
      form={form}
      formAction={formAction}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onContextMenu={onContextMenu}
      onChange={onChange}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onFocus={onFocus}
    >
      {children}
    </button>
  );
};
