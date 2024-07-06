import CloseIcon from "@mui/icons-material/Close";

const Inputbox = ({ text, box, textHandle, boxHandle }) => {
    return (
        <>
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    textHandle(e.target.value);
                }}
                onFocus={() => boxHandle()}
                onBlur={() => boxHandle()}
                placeholder="Search"
                className="py-1 w-72 h-10 px-5 border-none rounded-lg bor placeholder:font-cursive placeholder:text-black hover:bg-blue-600 bg-blue-200 outline-none"
            />
            {box ? (
                <button
                    onClick={() => boxHandle()}
                    className="bg-inherit h-10 pr-2 rounded-lg absolute right-0"
                >
                    <CloseIcon
                        style={{
                            backgroundColor: "transparent",
                            color: "black",
                        }}
                    />
                </button>
            ) : (
                <></>
            )}
        </>
    );
};

export default Inputbox;
