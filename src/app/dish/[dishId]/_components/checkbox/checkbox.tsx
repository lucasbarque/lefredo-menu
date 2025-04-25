import { InputHTMLAttributes } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export function Checkbox({ label, id, ...rest }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className='text-text-default flex items-center gap-1 text-sm font-medium'
    >
      <input
        {...rest}
        id={id}
        type='checkbox'
        className='border-text-default checked:text-brand-primary appearance-none rounded-sm focus:ring-transparent'
      />
      {label}
    </label>
  );
}
