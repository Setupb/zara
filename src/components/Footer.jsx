import React from "react";
import Copyright from "./Copyright";

const Footer= function (){
    return (
        <footer>
            <hr/>
            <div className="container">
                <div className='footer_hight'>
                    <div className='footer_descriptin'>
                        <h4><strong>Zara</strong></h4>
                        <p>Компанія Zara — це одна з найбільших світових компаній у сфері виробництва модного одягу.
                            Вона входить до групи Inditex, однієї з найбільших світових дистриб'юторських груп
                            Inditex.</p>
                    </div>
                    <div className='logo'>
                        <img className='lincicons'
                             src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png'
                             alt='logoZara'/>
                    </div>
                    <div className='icons'>
                        <a className='lincicons' href='https://uk-ua.facebook.com'>
                            <div className='facebook__icon icon'/>
                        </a>
                        <a className='lincicons ' href='https://twitter.com/?lang=uk'>
                            <div className='twitter__icon icon'/>
                        </a>
                        <a className='lincicons ' href='https://www.google.com.ua/?hl=ru'>
                            <div className='linkedin__icon icon'/>
                        </a>
                        <a className='lincicons' href='https://www.google.com.ua/?hl=ru'>
                            <div className='google__icon icon'/>
                        </a>
                    </div>
                </div>
                <Copyright/>
            </div>


        </footer>
    );
}

export default Footer;
