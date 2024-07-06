import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Searchbox from "./Searchbox";
import logoimg from "../assets/logoimg.png";
import { useState } from "react";

const Topbar = () => {
    const [color, setColor] = useState("skyblue");
    return (
        <>
            <div className="h-16 border-b-2 border-black flex flex-row justify-around content-center">
                <div className="cursor-pointer">
                    <img src={logoimg} alt="" className="h-20 -m-2" />
                </div>
                <Searchbox />
                <div
                    className="py-3"
                    onMouseEnter={() => setColor("blue")}
                    onMouseLeave={() => setColor("skyblue")}
                >
                    <AccountBoxIcon
                        style={{
                            height: "40px",
                            width: "40px",
                            backgroundColor: "transparent",
                            color: color,
                            cursor: "pointer",
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Topbar;
