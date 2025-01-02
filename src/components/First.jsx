import { useEffect } from "react";

export default function First(){

    let display = 0;
    let status = localStorage.getItem("passIntro");
    let darkmode = "no";
    
    useEffect(() => {
        if (status == 1){
            document.getElementById("hide").style.display = "none";
        } if (localStorage.getItem("setDarkmode") === "yes"){
            document.body.classList.add("darkmode");
        }
    }, [display])

    return (
        <div id="hide">
            <div className="text-black z-50 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center h-full w-full flex flex-col justify-center p-20 gap-y-5 bg-white" id="sliding">
                <h1 className="text-5xl font-[800]">Jom Menabung!</h1>
                <p>Laman web ini kamu boleh menyimpan sebarang jumlah wang yang kamu boleh simpan tanpa <span className="text-teal-500 font-[poppins-bold]">Login</span> atau <span className="text-teal-500 font-[poppins-bold]">Database</span> terlibat. Tekan "Next" untuk teruskan<br/>Semak <a>disini</a> untuk tahu lebih lanjut</p>
                <button onClick={() => {
                    localStorage.setItem("passIntro", display = 1);
                    document.getElementById("sliding").style.left = "-100%";

                }} className="bg-teal-300 bottom-10 absolute w-[50%] h-10 rounded-full right-10">Next</button>
            </div>

            <div className="z-20 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center h-full w-full flex flex-col justify-center p-20 gap-y-5 bg-white" id="testing">
                <h1>Pilih tema tersuai</h1>
                <div className="flex justify-center gap-x-5">
                    <button className="bg-teal-200 w-[40%] h-full p-5 text-black" onClick={() => {
                        document.getElementById("testing").style.left = "-100%";
                    }}>default</button>

                    <button className="bg-teal-200 w-[40%] h-full p-5 text-black" onMouseEnter={event => {
                        document.getElementById("testing").classList.add("test");
                    }} onMouseLeave={() => {
                        document.getElementById("testing").classList.remove("test");
                    }} onClick={() => {
                        document.body.classList.add("darkmode");
                        document.getElementById("testing").style.left = "-100%";

                        darkmode = "yes"
                        localStorage.setItem("setDarkmode", darkmode);
                    }}>darkmode
                    </button>
                </div>
            </div>
        </div>
    );
}
