import React from 'react';

export const ChessPiece = ({ type, color, className = '' }) => {
  const isWhite = color === 'w';
  const fill = isWhite ? '#FFFFFF' : '#1E232A';
  const stroke = isWhite ? '#1E232A' : '#FFFFFF';
  const innerFill = isWhite ? '#FFFFFF' : '#1E232A';
  const accent = isWhite ? '#1E232A' : '#E2E8F0';

  const renderSvgContent = () => {
    switch (type.toLowerCase()) {
      case 'p':
        return (
          <g>
            <path
              d="M22 9c-2.2 0-4 1.8-4 4 0 1.2.5 2.3 1.3 3-1.6 1.1-2.8 2.6-3.3 4.5 1.5.3 3 .8 4 1.5 1-.7 2.5-1.2 4-1.5-.5-1.9-1.7-3.4-3.3-4.5.8-.7 1.3-1.8 1.3-3 0-2.2-1.8-4-4-4z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 36c1-5 4-8 10-8s9 3 10 8H12z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
            />
            <path
              d="M11 40c0-1.5 1.5-2 3-2h16c1.5 0 3 .5 3 2 0 1-1.5 1.5-3 1.5H14c-1.5 0-3-.5-3-1.5z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
            />
          </g>
        );

      case 'r':
        return (
          <g>
            <path
              d="M9 39h27v-3H9v3zM12 36l1.5-6h17l1.5 6H12zM14 14l2 16h13l2-16H14z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
            />
            <path
              d="M14 14V9h4v3h4V9h4v3h4V9h5v5H14z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
            />
            <path
              d="M11 40c0-1 1.5-1.5 3-1.5h17c1.5 0 3 .5 3 1.5 0 1-1.5 1.5-3 1.5H14c-1.5 0-3-.5-3-1.5z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
            />
          </g>
        );

      case 'n':
        return (
          <g>
            <path
              d="M22 10c-3 0-5 2-6 4-2 0-4 1-5 3-1 2 0 4 1 5l-1 2c-.5 1 0 2 1 2.5 1 .5 3 .5 4 0l1 3c.5 1.5 2 2.5 4 2.5h6l3-4v-7c0-3-2-6-5-8l-3-3z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <circle cx="15.5" cy="17.5" r="1.2" fill={stroke} />
            <path
              d="M11 40c0-1.5 1.5-2 3-2h17c1.5 0 3 .5 3 2 0 1-1.5 1.5-3 1.5H14c-1.5 0-3-.5-3-1.5z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
            />
            <path
              d="M13 38l2-7h15l2 7H13z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
            />
          </g>
        );

      case 'b':
        return (
          <g>
            <path
              d="M22 8c-3 0-5.5 3.5-5.5 8 0 2.5 1 4.5 2.5 6-2 1.5-3.5 4-3.5 7.5 0 .5.5 1 1 1h11c.5 0 1-.5 1-1 0-3.5-1.5-6-3.5-7.5 1.5-1.5 2.5-3.5 2.5-6 0-4.5-2.5-8-5.5-8z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
            />
            <circle cx="22" cy="6" r="1.8" fill={fill} stroke={stroke} strokeWidth="1.5" />
            <path d="M19 14h6M22 11v6" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
            <path
              d="M11 40c0-1.5 1.5-2 3-2h17c1.5 0 3 .5 3 2 0 1-1.5 1.5-3 1.5H14c-1.5 0-3-.5-3-1.5z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
            />
            <path
              d="M13 38l2.5-8.5h13L31 38H13z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
            />
          </g>
        );

      case 'q':
        return (
          <g>
            <circle cx="9" cy="12" r="1.5" fill={fill} stroke={stroke} strokeWidth="1" />
            <circle cx="15.5" cy="9" r="1.5" fill={fill} stroke={stroke} strokeWidth="1" />
            <circle cx="22.5" cy="8" r="1.5" fill={fill} stroke={stroke} strokeWidth="1" />
            <circle cx="29.5" cy="9" r="1.5" fill={fill} stroke={stroke} strokeWidth="1" />
            <circle cx="36" cy="12" r="1.5" fill={fill} stroke={stroke} strokeWidth="1" />
            <path
              d="M9 14l3.5 13h20L36 14l-6.5 8-7-12-7 12L9 14z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M12 27l1.5 7h18l1.5-7H12z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
            />
            <path
              d="M11 39c0-1 1-1.5 2.5-1.5h18c1.5 0 2.5.5 2.5 1.5 0 1-1 1.5-2.5 1.5h-18C12 40.5 11 40 11 39z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
            />
          </g>
        );

      case 'k':
        return (
          <g>
            <path
              d="M22.5 5v5M20 7.5h5"
              stroke={stroke}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M12 16c2-3 5-4 10.5-4s8.5 1 10.5 4c1.5 2.5 1 5.5-.5 7.5-1.5 2-2 3.5-2.5 6.5h-15c-.5-3-1-4.5-2.5-6.5-1.5-2-2-5-.5-7.5z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
            />
            <circle cx="22.5" cy="18" r="3" fill={innerFill} stroke={accent} strokeWidth="1.2" />
            <path
              d="M13 30l1.5 6h16l1.5-6H13z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
            />
            <path
              d="M11 40c0-1.5 1.5-2 3-2h17c1.5 0 3 .5 3 2 0 1-1.5 1.5-3 1.5H14c-1.5 0-3-.5-3-1.5z"
              fill={fill}
              stroke={stroke}
              strokeWidth="1.5"
            />
          </g>
        );

      default:
        return null;
    }
  };

  return (
    <svg
      viewBox="0 0 45 45"
      className={`chess-piece-svg ${isWhite ? 'white-piece' : 'black-piece'} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {renderSvgContent()}
    </svg>
  );
};
