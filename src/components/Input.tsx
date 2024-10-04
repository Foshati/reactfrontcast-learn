import { ComponentPropsWithRef } from "react";

type inputProps = {
  id: string;
  placeholder: string;
} & ComponentPropsWithRef<"input">;

export default function Input({ id, placeholder, ...props }: inputProps) {
  return (
    <div>
      <input id={id} placeholder={placeholder} {...props} />
    </div>
  );
}
