"use client";

import { useState } from "react";

import SplashScreenProvider from "@/providers/SplashScreenProvider";

const Logo = () => {
  return (
    <svg
      className="g-card-logo animate-spin-slow"
      viewBox="0 0 141 140"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m27.635 27.133 58.556-15.69 42.866 42.866-15.69 58.556-58.556 15.69-42.866-42.866 15.69-58.556zm17.607 86.616h50.518l25.259-43.75-25.259-43.75h-50.518l-25.259 43.75 25.259 43.75zm14.529-83.796 40.046 10.731 10.731 40.046-29.317 29.317-40.046-10.731-10.731-40.046 29.317-29.317z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  );
};

const App = () => {
  const [loadingStep, setLoadingStep] = useState(1);

  const LoadingDots = () => {
    const dots = Array(loadingStep)
      .fill(0)
      .map((_, i) => (
        <span key={i} className="animate-pulse">
          .
        </span>
      ));
    if (loadingStep < 3) {
      setTimeout(() => {
        setLoadingStep((prev: number) => prev + 1);
      }, 750);
    } else {
      setTimeout(() => {
        setLoadingStep(1);
      }, 750);
    }

    return <span className="text-[#8e8e8e]">{dots}</span>;
  };

  return (
    <SplashScreenProvider>
      <div className="g-wrapper">
        <div className="g-content">
          <div className="g-content-wrapper">
            <div className="g-bg-plus"></div>
            <div className="flex flex-1 items-center justify-center">
              <div className="g-card min-w-[350px]">
                <Logo />
                <div className="flex w-full flex-col px-[var(--space-xxl)] text-center">
                  <span className="w-full text-[24px] font-medium">
                    Welcome to Graphite
                  </span>
                  <span className="mt-2 w-full">
                    Checking status of Graphite Web
                    {loadingStep && <LoadingDots />}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SplashScreenProvider>
  );
};

export default App;