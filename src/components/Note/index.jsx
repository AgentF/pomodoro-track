import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Note } from './styles';

export const NoteComponent = ({ text }) => {
  const [newText, setNewText] = useState('');

  return (
    <Note
      dangerouslySetInnerHTML={{ __html: text }}
      contentEditable
      onKeyUp={({ key }) => {
        if (key === 'Enter') {
          console.log(newText);
        } else if (key === 'Escape') {
          setNewText(text);
        }
      }}
      onInput={({ target: { innerText } }) => {
        if (innerText !== text) {
          setNewText(innerText);
        }
      }}
    />
  );
};

NoteComponent.defaultProps = {
  text: 'Add Note!',
};

NoteComponent.propTypes = {
  text: PropTypes.string,
};
