"use client";

import { cn } from "@/shared/utils/cn";

export const InfiniteMarquee = ({
  children,
  className,
  speed = "normal",
}: {
  children: React.ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
}) => {
  const getSpeedClass = () => {
    switch (speed) {
      case "slow": return "duration-[50s]";
      case "fast": return "duration-[15s]";
      default: return "duration-[25s]";
    }
  };

  return (
    <div className={cn("overflow-hidden flex w-full relative", className)}>
      <div className={cn("flex min-w-full animate-marquee", getSpeedClass())}>
        {children}
      </div>
      <div className={cn("flex min-w-full animate-marquee absolute top-0 left-full", getSpeedClass())}>
        {children}
      </div>
    </div>
  );
};
