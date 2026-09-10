import React, { useEffect, useRef } from 'react';

export const MoveHistory = ({ history }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const pairs = [];
  for (let i = 0; i < history.length; i += 2) {
    pairs.push({
      num: Math.floor(i / 2) + 1,
      white: history[i] || '',
      black: history[i + 1] || ''
    });
  }

  return (
    <div className="move-history-container">
      <div className="history-header">
        <span className="history-title">Move History</span>
        <span className="history-count">{history.length} {history.length === 1 ? 'move' : 'moves'}</span>
      </div>

      <div className="history-table-wrapper" ref={scrollRef}>
        {pairs.length === 0 ? (
          <div className="history-empty">No moves yet</div>
        ) : (
          <table className="history-table">
            <thead>
              <tr>
                <th className="th-num">#</th>
                <th className="th-move">White</th>
                <th className="th-move">Black</th>
              </tr>
            </thead>
            <tbody>
              {pairs.map((pair) => (
                <tr key={pair.num}>
                  <td className="td-num">{pair.num}.</td>
                  <td className="td-move td-white">{pair.white}</td>
                  <td className="td-move td-black">{pair.black}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
