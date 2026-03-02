import React from "react";

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return <div className="section-header">{title}</div>;
}
