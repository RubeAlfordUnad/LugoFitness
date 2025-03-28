import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter";
import {motion} from "framer-motion";

const transition = {type: "spring", duration: 3};
const mobile = window.innerWidth <= 768 ? true : false;

const Hero = () => {
    return (
        <div className="hero">

            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header/>
                                    {/* The best ad */}
                    <div className="the-best-ad">
                        <motion.div initial={{left : mobile? "178px": '238px'}}
                            whileInView={{left: '8px'}}
                            transition={{...transition, type: 'tween'}}>
                        </motion.div>
                            <span>El mejor lugar para tu zona fitness</span>
                    </div>
                                    {/* Hero Heading */}
                    <div className="hero-text">
                        <div>
                            <span className="stroke-text">Moldea </span>
                            <span>tu</span>
                        </div>
                        <div>
                            <span>cuerpo ideal</span>
                        </div>
                        <div>
                            <span>
                                Aquí te ayudaremos a moldear y construir tu cuerpo ideal y vivir tu vida al máximo.
                            </span>
                        </div>
                    </div>
                   {/* Figures */} 
                   <div className="figures">
                        <div>
                            <span>
                                <NumberCounter end={5} start={1} delay='4' preFix='+'/>
                            </span>
                            <span>Entrenador Experto</span>
                        </div>
                        <div>
                            <span>
                            <NumberCounter end={50} start={10} delay='4' preFix='+'/>
                            </span>
                            <span>Miembros ingresados</span>
                        </div>
                        <div>
                            <span>
                            <NumberCounter end={50} start={10} delay='4' preFix='+'/>
                            </span>
                            <span>programas fitness</span>
                        </div>
                   </div>
                     {/* Hero Buttons */}
                     <div className="hero-buttons">
                        <buttons className="btn">Empieza</buttons>
                        <buttons className="btn">Conoce más</buttons>
                     </div>
                </div>
            <div className="right-h">
                    <button className="btn">Ingresa ahora</button>

                    <motion.div initial={{right: '-1rem'}} whileInView={{right: '4rem'}} transition={transition} className="heart-rate">
                        <img src={Heart} alt="" />
                        <span>Heart Rate</span>
                        <span>
                        <NumberCounter end={220} start={100} delay='4' preFix='+'/>
                        </span>
                    </motion.div>
                                    {/* hero images */}
                        <img src={hero_image} alt="" className="hero-image" />
                        <motion.img 
                        initial={{right: '11rem'}}
                        whileInView={{right: '20rem'}}
                        transition={transition}
                        src={hero_image_back} alt="" className="hero-image-back" />
                    {/* calories */}
                    <motion.div initial={{right: '37rem'}} whileInView={{right: '28rem'}} transition={transition} className="calories">
                        <img src={Calories} alt="" />
                        <div>
                            <span>Calories Burned</span>
                            <span>220 kcal</span>
                        </div>
                    </motion.div>
            </div>
        </div>
    )
}

export default Hero;