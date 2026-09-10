import React from 'react';
import { useChessGame } from './hooks/useChessGame';
import { ChessBoard } from './components/ChessBoard';
import { GameInfo } from './components/GameInfo';
import { MoveHistory } from './components/MoveHistory';
import { Controls } from './components/Controls';
import { PromotionModal } from './components/PromotionModal';
import { ChessPiece } from './components/Piece';
import './styles/index.css';
import './styles/chess.css';

export function App() {
  const {
    game,
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
  } = useChessGame();

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-brand">
          <div className="brand-icon">
            <ChessPiece type="k" color="w" />
          </div>
          <div>
            <h1 className="brand-title">Chess</h1>
          </div>
        </div>
      </header>

      <main className="game-layout">
        <section className="board-section" aria-label="Chess Board">
          <ChessBoard
            game={game}
            selectedSquare={selectedSquare}
            legalMoves={legalMoves}
            lastMove={lastMove}
            inCheck={inCheck}
            turn={turn}
            isFlipped={isFlipped}
            onSquareClick={handleSquareClick}
          />
        </section>

        <aside className="game-sidebar">
          <Controls
            onNewGame={resetGame}
            onUndo={undo}
            onFlip={toggleFlip}
            canUndo={history.length > 0}
          />

          <GameInfo
            turn={turn}
            inCheck={inCheck}
            isCheckmate={isCheckmate}
            isDraw={isDraw}
            isStalemate={isStalemate}
            isThreefold={isThreefold}
            isInsufficient={isInsufficient}
            captured={captured}
          />

          <MoveHistory history={history} />
        </aside>
      </main>

      {pendingPromotion && (
        <PromotionModal
          color={turn}
          onSelect={handlePromotionSelect}
          onCancel={handlePromotionCancel}
        />
      )}
    </div>
  );
}

export default App;
