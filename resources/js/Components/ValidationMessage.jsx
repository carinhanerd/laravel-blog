import React from "react";

export default function ValidationMessage({ errors }) {
  return errors ? (
    <span className="text-sm leading-normal text-red-600">{errors}</span>
  ) : null;
}
