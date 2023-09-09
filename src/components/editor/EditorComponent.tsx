import { Editor } from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';

import { Dispatch, SetStateAction, useEffect, useState } from "react";

type EditorComponentProps = {
  contentState: EditorState,
  isDisabled: boolean,
  shouldReset: boolean,
  setResetFalse: () => void,
  stateChangeHandler: (value: string) => void,
  setIsEditorActive: Dispatch<SetStateAction<boolean>>
}

export const EditorComponent = ({
                                  contentState,
                                  isDisabled,
                                  setResetFalse,
                                  shouldReset,
                                  stateChangeHandler,
                                  setIsEditorActive
                                }: EditorComponentProps) => {

  const [editorState, setEditorState] = useState(contentState);

  useEffect(() => {
    stateChangeHandler(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
  }, []);

  useEffect(() => {
    if (shouldReset) {
      setResetFalse();
      setEditorState(EditorState.createEmpty());
    }
  }, [shouldReset]);


  return (
    <>
      <Editor
        toolbarHidden={isDisabled}
        readOnly={isDisabled}
        editorState={editorState}
        onEditorStateChange={(state) => {
          setEditorState(state);
          stateChangeHandler(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
        }}
        onFocus={() => {
          setIsEditorActive(true);
        }}
        toolbar={{
          inline: {
            bold: { className: `aria-selected:bg-primary` }
          },
          image: {
            isDropdown: true, uploadEnabled: true, className: 'demo-option-custom', popupClassName: 'demo-popup-custom'
          }
        }}
      />
    </>
  );
};
