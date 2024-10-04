import { ComponentPropsWithoutRef } from "react";

type buttonProps = {
  element: "button";
}& ComponentPropsWithoutRef<"button">

type anchorProps = {
  element: "anchor";
}& ComponentPropsWithoutRef<"a">

export default function Button({ ...props }: buttonProps | anchorProps) {
  if (props.element === "anchor") {
    return <a {...props}></a>;
  }

  return <button {...props}></button>;
}
