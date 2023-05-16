import headerImage from "./img/shoeCraft.png"


import "./css/header.css"

export const Header=()=>{
    return(
        <div className="header">
            <img src={headerImage} alt="shoeCraft Logo"/>
            <div className="description">
                <h1>Elevate Your Style with ShoeCraft</h1>
                <p>
                ShoeCraft: Where style meets craftsmanship. Discover a collection of meticulously crafted shoes that combine fashion-forward designs with uncompromising quality, allowing you to step with confidence and make a lasting impression.
                </p>
            </div>

         
        </div>
    )

}