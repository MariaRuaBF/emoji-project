interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  alt?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  checked?: boolean;
  disabled?: boolean;
  height?: string | number;
  max?: string | number;
  maxLength?: number;
  min?: string | number;
  minLength?: number;
  onInvalid?: (e: React.FormEvent<HTMLInputElement>) => void;
  onLoad?: (e: React.SyntheticEvent<HTMLInputElement, Event>) => void;
  pattern?: string;
  placeholder?: string;
  required?: boolean;
  size?: number;
  src?: string;
  value?: string | number | readonly string[];
}

export const Input: React.FC<InputProps> = ({
  type,
  className,
  alt,
  autoComplete,
  autoFocus,
  checked,
  disabled,
  height,
  max,
  maxLength,
  min,
  minLength,
  onInvalid,
  onLoad,
  pattern,
  placeholder,
  required,
  size,
  src,
  value,
}) => {
  return (
    <input
      type={type}
      className={className}
      alt={alt}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      checked={checked}
      disabled={disabled}
      height={height}
      max={max}
      maxLength={maxLength}
      min={min}
      minLength={minLength}
      onInvalid={onInvalid}
      onLoad={onLoad}
      pattern={pattern}
      placeholder={placeholder}
      required={required}
      size={size}
      src={src}
      value={value}
    />
  );
};
