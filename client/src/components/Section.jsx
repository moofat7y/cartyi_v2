import React from "react";

export default function Section({ name, children }) {
  return <div className={`${name} py-6`}>{children}</div>;
}
