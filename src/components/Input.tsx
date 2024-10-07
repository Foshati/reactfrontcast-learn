import { ComponentPropsWithRef, forwardRef } from "react";

type InputProps = {
  id: string;
  placeholder: string;
} & ComponentPropsWithRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, placeholder, ...props },
  ref
) {
  return (
    <div>
      <input id={id} placeholder={placeholder} {...props} ref={ref} />
    </div>
  );
});

export default Input;
