import React from "react";


const Footer = function (){
    return (
        <footer>
            <hr/>
            <div className="container">
                <div className='footer_hight'>
                    <div className='footer_descriptin'>
                        <h4><strong>Zara</strong></h4>
                        <p>Zara is one of the world's largest companies in the field of fashion apparel.
                            It is part of the Inditex group, one of the world's largest distribution groups</p>
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
                <div className='footer_Copyright'>
                    <p>2020 &copy; IoT Copyright all rights reserved, bla bla</p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;