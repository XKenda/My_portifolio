import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import main_img from "../images/main.png"
import { Typewriter } from "react-simple-typewriter";
import { BsArrowRightCircle } from "react-icons/bs";

    

const Main = () => {
    // const texts = ["Web Developer", "FrontEnd Developer", "React JS Developer"];
    // let i = 0
    // let [x, setx] = useState(texts[0].split(""))
    // let [visible, setvisible] = useState("")
    // const switching = () => {
    //     if (i < texts.length){
    //     } else {
    //         i = 0
    //     }
    //     setx(x = texts[i++].split(""))
    //     const Ap = () => {
    //         setvisible(0)
    //         x.forEach((l, o)=>{
    //             const id3 = setTimeout(()=> {console.log(l)},o * 1000)
    //             return ()=> clearTimeout(id3)
    //     })
    //     }
    //     const id2 = setInterval(Ap,1000)
    //     return() => clearInterval(id2)
        
    // }


    // useEffect(() => {
    //     const id = setInterval(switching, 4000);
    //     return () => clearInterval(id);
    // }, []);

    // let wordIndex = 0;
    // let [word, setword] = useState([]);
    // let [letter, setletter] = useState("");
    
    // const  typingA = () =>{
    //     const id  = setInterval(() => {
    //         setword(word = texts[0].split(""));
    //         console.log(word);
    //         let l = 0;
    //         const id3 =  setInterval(()=>{
    //             console.log(word[l])
    //             setletter(letter += word[l++]);
    //         }, 1000);

    //         if(wordIndex < texts.length){
    //             wordIndex++;
    //         } else {
    //             wordIndex = 0;
    //         }
    //     }, 1000);
    //     return() => clearInterval(id);
    // }

    // useMemo(
    //     typingA()
    // ,[]);

    return(
        <div id="home" className="main-con">
            <div className="main-info-con">
                <h2 className="main-info-wel">Welcome All In My Portifolio</h2>
                <p className="main-info-f-p">Hi! I'm Mahmoud Ibrahim</p>
                <p className="main-info-s-p">Shabaan, <span className="main-typing-effect">{
            <Typewriter
                words={["Web Developer", "FrontEnd Developer", "React JS Developer"]}
                loop
                typeSpeed={150}
                deleteSpeed={90}
                delaySpeed={1000}
                />
            }</span></p>
                <p className="main-info-disc">Hello Everyone I have 8 moths of Experience In Web Development</p>
                <p onClick={()=> {
                document.querySelector("#connect-with").scrollIntoView({
                    behavior: "smooth"
                })

            }} className="main-info-btn">Let's connect <BsArrowRightCircle /></p>
            </div>
            <div className="main-photo-con">
                <img src={main_img} alt="dog-photo"/>
            </div>
        </div>
    )
}

export default React.memo(Main);