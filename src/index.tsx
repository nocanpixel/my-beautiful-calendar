import React from 'react';

interface MyComponentProps {
  text: string;
}

export const MyComponent = ({ text }: MyComponentProps) => {
  return <div>{text}</div>;
};