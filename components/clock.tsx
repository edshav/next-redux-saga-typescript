import React from 'react';

const pad = (n: number): string | number => (n < 10 ? `0${n}` : n);

const format = (t: Date): string => {
  const hours = t.getUTCHours();
  const minutes = t.getUTCMinutes();
  const seconds = t.getUTCSeconds();
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

interface ClockProps {
  lastUpdate: number;
  light: boolean;
}

const Clock: React.FC<ClockProps> = ({ lastUpdate, light }: ClockProps) => {
  return (
    <div className={light ? 'light' : ''}>
      {format(new Date(lastUpdate))}
      <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #82fa58;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }
        .light {
          background-color: #999;
        }
      `}</style>
    </div>
  );
};

export default Clock;
