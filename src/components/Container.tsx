import { ComponentPropsWithoutRef, ReactNode, type ElementType } from "react";

type ContainerProps<T extends ElementType> = {
  // ComponentName: ElementType;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  ComponentName,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = ComponentName;
  return (
    <>
      <Component {...props}>{children}</Component>
    </>
  );
}
