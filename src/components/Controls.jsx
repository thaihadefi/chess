import React from 'react';

export const Controls = ({ onNewGame, onUndo, onFlip, canUndo }) => {
  return (
    <div className="controls-container">
      <button
        type="button"
        className="ctrl-btn ctrl-btn-primary"
        onClick={onNewGame}
        title="Start a new game"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
        <span>New Game</span>
      </button>

      <button
        type="button"
        className="ctrl-btn ctrl-btn-secondary"
        onClick={onUndo}
        disabled={!canUndo}
        title="Undo last move"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 14 4 9l5-5"/>
          <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/>
        </svg>
        <span>Undo</span>
      </button>

      <button
        type="button"
        className="ctrl-btn ctrl-btn-secondary"
        onClick={onFlip}
        title="Flip board orientation"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 16 4 4 4-4"/>
          <path d="M7 20V4"/>
          <path d="m21 8-4-4-4 4"/>
          <path d="M17 4v16"/>
        </svg>
        <span>Flip Board</span>
      </button>
    </div>
  );
};
