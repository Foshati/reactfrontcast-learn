import { ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form">;

export default function Form({ children, ...props }: FormProps) {
  return <form {...props}>{children}</form>;
}
