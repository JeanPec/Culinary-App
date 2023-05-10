import React, { ChangeEvent, HTMLAttributes } from "react";

import "./SearchBar.css";

/*
    SearchBar:
        - input used to search across the list
        - use debounce to only filter when the user finished typing ( avoid filtering at every keystroke )
 */

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
