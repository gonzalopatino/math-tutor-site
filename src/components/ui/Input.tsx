import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, id, className = '', ...props },
  ref,
) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full">
      <label htmlFor={inputId} className="block text-sm font-medium text-neutral-200 mb-2">
        {label}
        {props.required && <span className="text-error ml-1">*</span>}
      </label>
      <input
        ref={ref}
        id={inputId}
        className={`w-full rounded-lg bg-primary-800 border border-primary-700 px-4 py-2.5 text-neutral-100 placeholder-neutral-300 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent ${
          error ? 'border-error focus:border-error focus:ring-error' : ''
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default Input;
