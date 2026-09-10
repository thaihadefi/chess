import React from 'react';
import { ChessPiece } from './Piece';

export const GameInfo = ({
  turn,
  inCheck,
  isCheckmate,
  isDraw,
  isStalemate,
  isThreefold,
  isInsufficient,
  captured
}) => {
  const getStatusText = () => {
    if (isCheckmate) {
      const winner = turn === 'w' ? 'Black' : 'White';
      return {
        title: 'Checkmate!',
        desc: `${winner} wins`,
        type: 'danger'
      };
    }
    if (isStalemate) {
      return {
        title: 'Draw',
        desc: 'Stalemate - No legal moves',
        type: 'neutral'
      };
    }
    if (isThreefold) {
      return {
        title: 'Draw',
        desc: 'Threefold repetition',
        type: 'neutral'
      };
    }
    if (isInsufficient) {
      return {
        title: 'Draw',
        desc: 'Insufficient material',
        type: 'neutral'
      };
    }
    if (isDraw) {
      return {
        title: 'Draw',
        desc: 'Game ended in a draw',
        type: 'neutral'
      };
    }
    if (inCheck) {
      const kingColor = turn === 'w' ? 'White King' : 'Black King';
      return {
        title: 'Check!',
        desc: `${kingColor} is under attack`,
        type: 'warning'
      };
    }
    return {
      title: turn === 'w' ? "White's Turn" : "Black's Turn",
      desc: 'Select a piece to move',
      type: 'normal'
    };
  };

  const status = getStatusText();

  return (
    <div className="game-info-card">
      <div className="turn-bar">
        <div className={`player-badge ${turn === 'w' ? 'active' : ''}`}>
          <span className="player-indicator-dot white-dot" />
          <span className="player-name">White</span>
          {turn === 'w' && <span className="turn-pill">Turn</span>}
        </div>

        <div className="turn-divider">vs</div>

        <div className={`player-badge ${turn === 'b' ? 'active' : ''}`}>
          <span className="player-indicator-dot black-dot" />
          <span className="player-name">Black</span>
          {turn === 'b' && <span className="turn-pill">Turn</span>}
        </div>
      </div>

      <div className={`status-banner status-${status.type}`}>
        <div className="status-title">{status.title}</div>
        <div className="status-desc">{status.desc}</div>
      </div>

      <div className="captured-section">
        <div className="captured-row">
          <span className="captured-label">White captured:</span>
          <div className="captured-list">
            {captured.byWhite.length === 0 ? (
              <span className="empty-captured">-</span>
            ) : (
              captured.byWhite.map((type, idx) => (
                <div key={`w-cap-${idx}`} className="captured-piece-mini">
                  <ChessPiece type={type} color="b" />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="captured-row">
          <span className="captured-label">Black captured:</span>
          <div className="captured-list">
            {captured.byBlack.length === 0 ? (
              <span className="empty-captured">-</span>
            ) : (
              captured.byBlack.map((type, idx) => (
                <div key={`b-cap-${idx}`} className="captured-piece-mini">
                  <ChessPiece type={type} color="w" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
