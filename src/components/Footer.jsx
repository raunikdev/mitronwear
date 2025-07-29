import './css/Footer.css'
const Footer=()=>{
    const year = new Date().getFullYear();
    return(
        <footer>
            <div className="main-footer">
                <div className="left-footer">
                    <h2>Mitronwear</h2>
                    <div className="defination-wrap">
                        <p className="defination">It is not just a clothing brand but an emotion</p>
                    </div>
                </div>
                <div className="right-footer">
                    <ul className="foot-ul">
                        <li className="foot-li-main">Main Pages:</li>
                        <li className="foot-li"><a href="#home">Home</a></li>
                        <li className="foot-li"><a href="#Catlogue">Catalogue</a></li>
                        {/* <li className="foot-li"><a href="#Contact">Contact</a></li> */}
                        <li className="foot-li"><a href="/about">About</a></li>

                    </ul>
                </div>
                
                {/* <div class="right-footer">
                    <ul class="foot-ul">
                        <li class="foot-li-main">Main Pages:</li>
                        <li class="foot-li"><a href="#home">Home</a></li>
                        <li class="foot-li"><a href="#Catlogue">Catalogue</a></li>
                        <li class="foot-li"><a href="#Contact">Contact</a></li>
                        <li class="foot-li"><a href="#About">About</a></li>

                    </ul>
                </div> */}
            </div>
            <div className="copyright"><p>&copy; {year} All Rights Reserved</p></div>
        </footer>
    )
}
export default Footer;