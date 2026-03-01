"use client";

import { useEffect, useState } from "react";

export const MemberCount = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/members")
      .then((r) => r.json())
      .then((d) => { if (d.count) setCount(d.count); })
      .catch(() => {});
  }, []);

  if (!count) return null;

  return (
    <p className="text-sm text-ash mt-6 tracking-wide">
      {count} builders already in the forge
    </p>
  );
};
