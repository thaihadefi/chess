import React from 'react';
import { ChessPiece } from './Piece';

export const PromotionModal = ({ color, onSelect, onCancel }) => {
  const pieces = [
    { type: 'q', label: 'Queen' },
    { type: 'r', label: 'Rook' },
    { type: 'b', label: 'Bishop' },
    { type: 'n', label: 'Knight' }
  ];

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="promotion-modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="promotion-title">Pawn Promotion</h3>
        <p className="promotion-desc">Choose a piece to promote to:</p>
        
        <div className="promotion-options">
          {pieces.map((item) => (
            <button
              key={item.type}
              type="button"
              className="promotion-btn"
              onClick={() => onSelect(item.type)}
            >
              <div className="promotion-piece-preview">
                <ChessPiece type={item.type} color={color} />
              </div>
              <span className="promotion-piece-label">{item.label}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="btn-cancel-promotion"
          onClick={onCancel}
        >
          Cancel move
        </button>
      </div>
    </div>
  );
};
