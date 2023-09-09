import { ApiResponse, BugType } from "@/global";
import { UseQueryResult } from "@tanstack/react-query";
import React, { useState } from "react";
import { EditorState } from "draft-js";
import { useBoolean } from "usehooks-ts";
import { EditorComponent } from "@/components";
import { useDetectClickOutside } from "react-detect-click-outside";
import { Comment } from "@/features/bugs/components/Comment.tsx";
import { useAppSelector } from "@/hooks";
import { Spinner } from "@nextui-org/react";

type BugCommentsProps = {
  Bug: UseQueryResult<ApiResponse<BugType>, unknown>
}

const BugComments = ({ Bug }: BugCommentsProps) => {

  const user = useAppSelector(state => state.user.entities);

  const [descriptionState, setDescriptionState] = useState("");
  const [isEditorActive, setIsEditorActive] = useState(false);
  const [contentState, setContentState] = useState(EditorState.createEmpty());
  const shouldEditorReset = useBoolean(false);
  const syncEditorState = (value: string) => {
    setDescriptionState(value);
  };
  const editorRef = useDetectClickOutside({
    onTriggered: () => {
      setIsEditorActive(false);
    }
  });
  const [isEditorHovered, setIsEditorHovered] = useState(false);

  if (!user) {
    return <Spinner/>;
  }

  return (
    <div className={"p-4"}>
      <Comment user={user}>
        <div
          ref={editorRef}
          data-hover={!isEditorActive && isEditorHovered}
          data-focus={isEditorActive}
          onMouseEnter={() => setIsEditorHovered(true)}
          onMouseLeave={() => setIsEditorHovered(false)}
          className={"group flex flex-col data-[has-helper=true]:pb-4 w-full mb-2"}>
          <div
            className={`relative w-full tap-highlight-transparent flex-row items-center shadow-sm p-1 gap-3 border-medium border-default-200 group-data-[hover=true]:border-default-400 group-data-[focus=true]:border-foreground h-unit-10 min-h-unit-10 rounded-medium !h-auto transition-background !duration-150 transition-colors motion-reduce:transition-none`}>
            <EditorComponent
              contentState={contentState}
              isDisabled={false}
              setResetFalse={shouldEditorReset.setFalse}
              shouldReset={shouldEditorReset.value}
              stateChangeHandler={syncEditorState}
              setIsEditorActive={setIsEditorActive}/>
          </div>
        </div>
      </Comment>
      {Bug.data?.data?.comments.map((comment) => (
        <Comment user={comment.commenter}>
          <div>
            {comment.content}
          </div>
        </Comment>
      ))}
    </div>
  );
};
export default BugComments;
