import { useEffect, useState } from "react";

import Info from "./Info";

export default function Main(){

    let [balance, balanceChange] = useState(Number(0));
    // for main theme
    let [theme, setTheme] = useState("default");
    let [hover, setHover] = useState(false);

    useEffect(() => {

        localStorage.setItem("setTheme", theme);

        if (balance != 0){
            localStorage.setItem("money", balance);
        }

    }, [balance, theme]);

    return (
        <div>
            <div className="w-[80%] h-[80%] absolute bg-teal-300 left-[50%] top-[-60%] translate-x-[-50%] rounded-full -z-50"></div>
            <div className="flex justify-center items-center h-screen flex-col gap-y-4 font-[poppins-medium]">
                <div className="text-7xl text-center font-[poppins-bold]">
                    <p>RM<br />{balance || localStorage.getItem("money")}</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-teal-300 w-10 h-10 rounded-md hover:scale[1.1] transition-all outline-none"
                        onClick={() => {
                            let text = document.getElementById("txtfield");
                            
                            if (text.value === null || text.value === undefined || isNaN(text.value)){
                                console.log("cannot fix");
                            } else {
                                let sum = Number(localStorage.getItem("money")) + Number(text.value);

                                if (sum <= 0){
                                    balanceChange(Number(0));
                                } else {
                                    balanceChange(sum);
                                }
                            }
                        }
                        }
                    ><span className="flex justify-center text-black">+</span></button>
                    <input type="text" id="txtfield" className="w-60 h-10 bg-slate-400 rounded-md px-3 "/>
                </div>
            </div>

            <div>
                <div 
                    className="absolute top-3 left-3 bg-slate-400 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer" 
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <span>i</span>
                </div>
                { hover ? (<Info />) : null }
            </div>
        </div>
    )
}