import * as React from "react";

export function Card(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const { className = "", ...rest } = props;
  return (
    <div
      className={`rounded-2xl border border-zinc-800 bg-zinc-900 ${className}`}
      {...rest}
    />
  );
}

export function CardContent(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const { className = "", ...rest } = props;
  return (
    <div className={`p-6 ${className}`} {...rest} />
  );
}

