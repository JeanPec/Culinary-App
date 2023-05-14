import React, { ChangeEvent, HTMLAttributes } from "react";

export interface SearchBarProps extends HTMLAttributes<HTMLInputElement> {
  search?: string;
  placeHolder?: string;
  onValueChanged: (text: string) => void;
  onSearch: () => void;
}

export const SearchBar = React.forwardRef(
  (
    { search, onValueChanged, onSearch, placeHolder, ...props }: SearchBarProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      onValueChanged(e.currentTarget.value);
    return (
      <input
        ref={ref}
        placeholder={placeHolder || "Search..."}
        onChange={handleChange}
        onKeyDown={(event) => {
          if (event.code === "Enter") onSearch();
        }}
        {...props}
      />
    );
  }
);
