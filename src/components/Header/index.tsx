import logo from "../public/assets/logo.png"


export const Header = ()=>{
    return(
        <div className="header">
            <img src="./assets/img/logo.png" alt="logo" className="logo"/>
            
            
            <div className="menu">
                <h3>Home</h3>
                <h3>Sobre</h3>
                <h3>Roadmap</h3>
                <h3>Team</h3>
                <h3>NFTs</h3>
                <h3>On Blog</h3>
            </div>
            
        </div>
    )
}