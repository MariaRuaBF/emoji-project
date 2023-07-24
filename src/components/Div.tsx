import { ReactNode } from "react";

interface DivProps {
  children?: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  accessKey?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onChange?: (e: React.FormEvent<HTMLDivElement>) => void;
  onCopy?: (e: React.ClipboardEvent<HTMLDivElement>) => void;
  onDoubleClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onFocus?: (e: React.FocusEvent<HTMLDivElement, Element>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseOver?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

// Generics
// function loggingIdentity<T, Z>(arg: T): Z {
//   console.log(arg.length);
//   return arg;
// }

// loggingIdentity<string[], string>([]);
// loggingIdentity<number[], string>([]);

export const Div: React.FC<DivProps> = ({
  children,
  id,
  className,
  title,
  accessKey,
  onClick,
  onChange,
  onCopy,
  onDoubleClick,
  onFocus,
  onKeyDown,
  onKeyUp,
  onMouseMove,
  onMouseOver,
}) => {
  return (
    <div
      id={id}
      title={title}
      className={className}
      accessKey={accessKey}
      onClick={onClick}
      onChange={onChange}
      onCopy={onCopy}
      onDoubleClick={onDoubleClick}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onMouseMove={onMouseMove}
      onMouseOver={onMouseOver}
    >
      {children}
    </div>
  );
};
