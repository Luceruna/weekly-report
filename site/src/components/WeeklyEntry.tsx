import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '@mui/material/Button';
import '../styles/WeeklyEntry.scss';

const WeeklyEntry = () => {
  const [entry, setEntry] = useState('');

  const handleEntryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEntry(e.target.value);
  };

  return (
    <div className="diary-container">
      <div className="editor-and-preview">
        <div className="editor">
          <h2>今日の日記</h2>
          <textarea
            value={entry}
            onChange={handleEntryChange}
            placeholder="今日の出来事をMarkdown形式で記入してください"
          />
        </div>
        <div className="preview">
          <h3>プレビュー</h3>
          <ReactMarkdown>{entry}</ReactMarkdown>
        </div>
      </div>
      <div className="button-container">
        <Button variant="contained" onClick={() => console.log(entry)}>
          保存
        </Button>
      </div>
    </div>
  );
};

export default WeeklyEntry;