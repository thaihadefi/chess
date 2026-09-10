import React from 'react';
import { Square } from './Square';

export const ChessBoard = ({
  game,
  selectedSquare,
  legalMoves,
  lastMove,
  inCheck,
  turn,
  isFlipped,
  onSquareClick
}) => {
  const files = isFlipped
    ? ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
    : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  const ranks = isFlipped
    ? ['1', '2', '3', '4', '5', '6', '7', '8']
    : ['8', '7', '6', '5', '4', '3', '2', '1'];

  return (
    <div className="chess-board-wrapper">
      <div className="chess-board" role="grid" aria-label="Chessboard">
        {ranks.map((rank, rankIndex) =>
          files.map((file, fileIndex) => {
            const square = `${file}${rank}`;
            const piece = game.get(square);
            
            const fileNum = file.charCodeAt(0) - 97;
            const rankNum = parseInt(rank, 10);
            const isLight = (fileNum + rankNum) % 2 === 0;

            const isSelected = selectedSquare === square;
            const isLastMove = lastMove && (lastMove.from === square || lastMove.to === square);
            const isLegalMove = legalMoves.includes(square);
            const isKingInCheck =
              inCheck &&
              piece &&
              piece.type === 'k' &&
              piece.color === turn;

            const rankLabel = fileIndex === 0 ? rank : null;
            const fileLabel = rankIndex === 7 ? file : null;

            return (
              <Square
                key={square}
                square={square}
                piece={piece}
                isLight={isLight}
                isSelected={isSelected}
                isLastMove={isLastMove}
                isLegalMove={isLegalMove}
                isCheck={isKingInCheck}
                fileLabel={fileLabel}
                rankLabel={rankLabel}
                onClick={() => onSquareClick(square)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
