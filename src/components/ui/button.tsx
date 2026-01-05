import * as React from "react";

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { className = "", ...rest } = props;
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium bg-green-500 text-black hover:bg-green-400 transition ${className}`}
      {...rest}
    />
  );
}

