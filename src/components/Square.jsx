import React from 'react';
import { ChessPiece } from './Piece';

const PIECE_NAMES = {
  p: 'Pawn',
  r: 'Rook',
  n: 'Knight',
  b: 'Bishop',
  q: 'Queen',
  k: 'King'
};

export const Square = ({
  square,
  piece,
  isLight,
  isSelected,
  isLastMove,
  isLegalMove,
  isCheck,
  fileLabel,
  rankLabel,
  onClick
}) => {
  const hasPiece = Boolean(piece);
  const squareTooltip = piece
    ? `${square.toUpperCase()}: ${piece.color === 'w' ? 'White' : 'Black'} ${PIECE_NAMES[piece.type] || 'Piece'}`
    : square.toUpperCase();

  return (
    <button
      type="button"
      className={`chess-square ${isLight ? 'square-light' : 'square-dark'} ${
        isSelected ? 'square-selected' : ''
      } ${isLastMove ? 'square-last-move' : ''} ${isCheck ? 'square-check' : ''}`}
      onClick={onClick}
      aria-label={squareTooltip}
      title={squareTooltip}
      id={`square-${square}`}
    >
      {rankLabel && <span className="coord coord-rank">{rankLabel}</span>}
      {fileLabel && <span className="coord coord-file">{fileLabel}</span>}

      {hasPiece && (
        <ChessPiece
          type={piece.type}
          color={piece.color}
          className="square-piece"
        />
      )}

      {isLegalMove && (
        <span
          className={`legal-indicator ${
            hasPiece ? 'legal-indicator-capture' : 'legal-indicator-dot'
          }`}
        />
      )}
    </button>
  );
};
