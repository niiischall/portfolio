/* eslint-disable react/prop-types */
import { usePostHog } from 'posthog-js/react';
import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  styles: string;
  analyticsLabel: string;
  analyticsData?: object;
}

const Button: React.FC<ButtonProps> = ({ onClick, styles, analyticsLabel, analyticsData, children }) => {
  const posthog = usePostHog();

  const handleClick = () => {
    posthog.capture(analyticsLabel, analyticsData);
    onClick();
  };

  return (
    <button className={styles} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
