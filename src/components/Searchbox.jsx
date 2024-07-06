import { useState } from "react";
import Inputbox from "./Inputbox";
import Searchresult from "./Searchresult";

const Searchbox = () => {
    const [text, setText] = useState("");
    const [box, setBox] = useState(false);

    const textHandler = (value) => {
        setText(value);
    };

    const boxHandler = () => {
        setBox(() => (box ? false : true));
    };
    return (
        <div className="text-black h-72 w-72 box-border my-3 relative">
            <Inputbox
                text={text}
                box={box}
                textHandle={textHandler}
                boxHandle={boxHandler}
            />
            {box ? <Searchresult text={text} /> : <></>}
        </div>
    );
};

export default Searchbox;
