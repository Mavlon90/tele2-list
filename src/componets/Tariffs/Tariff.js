import React from 'react'

export default function Tariff(propses) {
    return (
        <div className="main">
            <ul className="main-block">
                {propses.hitsale &&
                    <div className="hitsale">
                        <div className="hit">
                            {propses.hit}
                        </div>
                        <div className="sale" >
                            {propses.sale}
                        </div>
                    </div>}
                <li className="main-block-item-1">
                    <div className="title" >{propses.name}</div>
                </li>
                <li className="main-block-item-2">
                    {propses.titleText}
                    <div className="price">
                        {propses.price}
                    </div>
                </li>
                <li className="main-block-item-3">
                    <div className="dollar">
                        {propses.chase}
                    </div>
                    <div className="month">
                        {propses.month}
                    </div>
                </li>
                <li className="main-block-item-11"></li>
                <li className="main-block-item-4">
                    <div className="trafic" >
                        {propses.trafic}
                        {propses.mb}
                        {propses.gb}
                    </div>
                </li>
                <li className="main-block-item-5">
                    {propses.unlimitStatus && <div className="withoutlimit" >{propses.unlimit}</div>}
                </li>
                <li className="main-block-item-6">
                    <div className="social" >
                        {propses.socialStatus && propses.social.map(o => <img className="imgSocial" src={o} alt="social-icon" />)}
                    </div>
                    <h4>{propses.internetOutSide}</h4>
                </li>
                <li className="main-block-item-7">
                    {propses.timeMinStatus &&
                        <div className="time" >
                            {propses.time}{" "}
                            {propses.min}
                        </div>
                    }
                </li>
                <li className="main-block-item-8">
                    {propses.messageCountAndSmS &&
                        <div className="messageCount" >
                            {propses.messageCount}{" "}
                            {propses.sms}
                        </div>
                    }
                </li>
                <li className="main-block-item-9">
                    <div className="butBtn">
                        {propses.buyButton}
                    </div>
                </li>
                <li className="main-block-item-10">
                    <div className="text" >
                        {propses.text}
                    </div>
                </li>  
            </ul>
        </div >
    )
}