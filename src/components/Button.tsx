import { type ComponentPropsWithoutRef } from "react";

type buttonProps = ComponentPropsWithoutRef<"button"> & { href?: never };
type anchorProps = ComponentPropsWithoutRef<"a"> & { href?: string };

// type predicates
function isAnchorProps(props: buttonProps | anchorProps): props is anchorProps {
  return "href" in props;
}

export default function Button({ ...props }: buttonProps | anchorProps) {
  if (isAnchorProps(props)) {
    return <a {...props}></a>;
  }

  return <button {...props}></button>;
}
