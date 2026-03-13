import { forwardRef, SelectHTMLAttributes } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: string;
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, options, error, id, placeholder = 'Select an option', className = '', ...props },
  ref,
) {
  const selectId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full">
      <label htmlFor={selectId} className="block text-sm font-medium text-neutral-200 mb-2">
        {label}
        {props.required && <span className="text-error ml-1">*</span>}
      </label>
      <select
        ref={ref}
        id={selectId}
        className={`w-full rounded-lg bg-primary-800 border border-primary-700 px-4 py-2.5 text-neutral-100 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent appearance-none cursor-pointer ${
          error ? 'border-error focus:border-error focus:ring-error' : ''
        } ${className}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: 'right 0.75rem center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1.5em 1.5em',
        }}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default Select;
