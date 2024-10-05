import {type ElementType } from "react";

type ContainerProps = {
  ComponentName: ElementType;
};

export default function Container({ ComponentName }: ContainerProps) {
  const Component = ComponentName;
  return (
    <>
      <Component />
    </>
  );
}
