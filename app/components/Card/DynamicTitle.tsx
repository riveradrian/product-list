import * as React from "react";
import { HiPencilSquare, HiOutlineXMark } from "react-icons/hi2";

interface IProps {
  title: string;
  textSize: string;
}

export default function DynamicTitle(props: IProps) {
  const [newTitle, setNewTitle] = React.useState<string>(props.title);
  const [showInput, setShowInput] = React.useState(false);

  const showInputHandler = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="flex items-baseline relative justify-between">
      <h3 className={`${props.textSize} font-semibold`}>{newTitle}</h3>
      <div className="flex items-center gap-2">
        {showInput && (
          <input
            type="text"
            className="absolute bottom-8 right-0 w-46 h-9 flex flex-wrap border border-slate-300 px-2 py-1 text-sm rounded-md shadow-md text-gray-900 focus:outline-none"
            value={newTitle}
            onBlur={showInputHandler}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        )}
        <button onClick={showInputHandler}>
          {showInput ? (
            <HiOutlineXMark size={20} color="darkslategrey" />
          ) : (
            <HiPencilSquare size={20} color="darkslategrey" />
          )}
        </button>
      </div>
    </div>
  );
}
