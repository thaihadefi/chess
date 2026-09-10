import { useState, useCallback, useMemo } from 'react';
import { Chess } from 'chess.js';

// PGN is the serializable source of truth for the whole game. The chess.js
// instance is derived from it on every render, so the full move list (and with
// it undo, captured-piece tracking, and threefold-repetition detection) stays
// intact instead of being flattened to the latest position.
function chessFromPgn(pgn) {
  const chess = new Chess();
  if (pgn) {
    chess.loadPgn(pgn);
  }
  return chess;
}

export function useChessGame() {
  const [pgn, setPgn] = useState('');
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [legalMoves, setLegalMoves] = useState([]);
  const [lastMove, setLastMove] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [pendingPromotion, setPendingPromotion] = useState(null);

  const game = useMemo(() => chessFromPgn(pgn), [pgn]);

  const board = useMemo(() => game.board(), [game]);
  const turn = game.turn();
  const inCheck = game.inCheck();
  const isCheckmate = game.isCheckmate();
  const isDraw = game.isDraw();
  const isStalemate = game.isStalemate();
  const isThreefold = game.isThreefoldRepetition();
  const isInsufficient = game.isInsufficientMaterial();

  const captured = useMemo(() => {
    const byWhite = [];
    const byBlack = [];

    for (const move of game.history({ verbose: true })) {
      if (!move.captured) continue;
      (move.color === 'w' ? byWhite : byBlack).push(move.captured);
    }

    return { byWhite, byBlack };
  }, [game]);

  const history = useMemo(() => game.history(), [game]);

  const clearSelection = useCallback(() => {
    setSelectedSquare(null);
    setLegalMoves([]);
  }, []);

  const checkPromotion = useCallback((from, to) => {
    const piece = game.get(from);
    if (!piece || piece.type !== 'p') return false;
    const toRank = to[1];
    return (piece.color === 'w' && toRank === '8') || (piece.color === 'b' && toRank === '1');
  }, [game]);

  const executeMove = useCallback((from, to, promotion = 'q') => {
    // Apply the move to a fresh clone so an illegal attempt never mutates
    // the rendered game.
    const next = chessFromPgn(game.pgn());
    let result = null;
    try {
      result = next.move({ from, to, promotion });
    } catch (e) {
      console.warn('Invalid move attempted:', e);
    }
    if (!result) return false;

    setPgn(next.pgn());
    setLastMove({ from, to });
    setSelectedSquare(null);
    setLegalMoves([]);
    setPendingPromotion(null);
    return true;
  }, [game]);

  const handleSquareClick = useCallback((square) => {
    if (isCheckmate || isDraw) return;
    if (pendingPromotion) return;

    const piece = game.get(square);

    if (selectedSquare === square) {
      clearSelection();
      return;
    }

    if (selectedSquare && legalMoves.includes(square)) {
      if (checkPromotion(selectedSquare, square)) {
        setPendingPromotion({ from: selectedSquare, to: square });
        return;
      }

      executeMove(selectedSquare, square);
      return;
    }

    if (piece && piece.color === turn) {
      setSelectedSquare(square);
      const moves = game.moves({ square, verbose: true });
      setLegalMoves(moves.map(m => m.to));
    } else {
      clearSelection();
    }
  }, [game, turn, selectedSquare, legalMoves, isCheckmate, isDraw, pendingPromotion, checkPromotion, executeMove, clearSelection]);

  const handlePromotionSelect = useCallback((pieceType) => {
    if (!pendingPromotion) return;
    executeMove(pendingPromotion.from, pendingPromotion.to, pieceType);
  }, [pendingPromotion, executeMove]);

  const handlePromotionCancel = useCallback(() => {
    setPendingPromotion(null);
    clearSelection();
  }, [clearSelection]);

  const undo = useCallback(() => {
    const next = chessFromPgn(game.pgn());
    if (!next.undo()) return;

    setPgn(next.pgn());
    setPendingPromotion(null);
    clearSelection();

    const moves = next.history({ verbose: true });
    const last = moves[moves.length - 1];
    setLastMove(last ? { from: last.from, to: last.to } : null);
  }, [game, clearSelection]);

  const resetGame = useCallback(() => {
    setPgn('');
    setLastMove(null);
    setPendingPromotion(null);
    clearSelection();
  }, [clearSelection]);

  const toggleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  return {
    game,
    board,
    turn,
    inCheck,
    isCheckmate,
    isDraw,
    isStalemate,
    isThreefold,
    isInsufficient,
    selectedSquare,
    legalMoves,
    lastMove,
    captured,
    history,
    isFlipped,
    pendingPromotion,
    handleSquareClick,
    handlePromotionSelect,
    handlePromotionCancel,
    undo,
    resetGame,
    toggleFlip
  };
}
