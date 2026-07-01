interface Props {
  htmlFor: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}

export function BookingField({ htmlFor, label, required, optional, error, children }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between gap-2">
        <label
          htmlFor={htmlFor}
          className="font-manrope text-[13px] lg:text-[14px] font-medium text-dark leading-none"
        >
          {label}
          {required && <span className="text-brand">*</span>}
        </label>
        {optional && (
          <span className="font-manrope text-[11px] lg:text-[12px] text-grey shrink-0">
            ( Optional )
          </span>
        )}
      </div>
      {children}
      {error && (
        <p role="alert" className="font-manrope text-[11px] text-red-500 leading-none">
          {error}
        </p>
      )}
    </div>
  );
}
