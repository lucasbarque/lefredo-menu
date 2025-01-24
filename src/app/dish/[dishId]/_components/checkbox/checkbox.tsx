import { InputHTMLAttributes } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export function Checkbox({ label, id, ...rest }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-1 text-text-default text-sm font-bold"
    >
      <input
        {...rest}
        id={id}
        type="checkbox"
        className="appearance-none border-text-default checked:bg-brand-primary rounded-sm  focus:ring-transparent"
      />
      {label}
    </label>
  );
}
