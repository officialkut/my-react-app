import React from 'react';

interface MessageProps {
  text: string;
}

export const Message = ({ text }: MessageProps): React.ReactElement => {
  return (
    <div className="message">
      <p className="message__text">{text}</p>
    </div>
  );
};