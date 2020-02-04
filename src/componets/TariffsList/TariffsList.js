import React from 'react'
import Tariff from '../Tariffs/Tariff'

export default function App() {
    const  social = [
        "https://msk.tele2.ru/api/media/asset?mediaId=m220005",
          "https://msk.tele2.ru/api/media/asset?mediaId=m220001",
          "https://msk.tele2.ru/api/media/asset?mediaId=m220003",
          "https://msk.tele2.ru/api/media/asset?mediaId=m220006",
           "https://msk.tele2.ru/api/media/asset?mediaId=m220004",
           "https://msk.tele2.ru/api/media/asset?mediaId=m1990041",
           "https://msk.tele2.ru/api/media/asset?mediaId=m1680033",
    ];
  const teleList = [
      {id: 1, name: "Везде онлайн", price: 500, chase: "₽", month: "/месяц", trafic: 40, gb: 'ГБ', unlimit: "+безлимитные",
        social: social, time: 500,min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 50, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: true, socialStatus: true, unlimitStatus: true, messageCountAndSmS: true, timeMinStatus: true},
        
        {id: 2, name: "Мой онлайн", price: 400, chase: "₽", month: "/месяц", trafic: 15, gb: 'ГБ', unlimit: "+безлимитные",
        social: social, time: 500, min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 50, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: true, unlimitStatus: true, messageCountAndSmS: false, timeMinStatus: true},
 
        {id: 3, name: "Мой онлайн +", price: 700, chase: "₽", month: "/месяц", trafic: 30, gb: 'ГБ', unlimit: "+безлимитные",
        social: social, internetOutSide: "Интернет за границей", time: 800, min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 50, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: true, unlimitStatus: true, messageCountAndSmS: false, timeMinStatus: true},
 
        {id: 4, name: "Мой разговор", price: 200, chase: "₽", month: "/месяц", trafic: 2, gb: 'ГБ', unlimit: "+безлимитные",
        social: social, internetOutSide: "Интернет за границей", time: 200, min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 50, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: false, unlimitStatus: false, messageCountAndSmS: false, internetOutSideStatus: true,timeMinStatus: true},
 
        {id: 5, name: "Мой Tele2", price: 7, chase: "₽", month: "/день", trafic: 5, gb: 'ГБ', unlimit: "+безлимитные",
        social: social, internetOutSide: "Интернет за границей", time: 200, min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 50, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: false, unlimitStatus: false, messageCountAndSmS: false, timeMinStatus: true},
 
        {id: 6, name: "Безлимит", price: 650, chase: "₽", month: "/месяц", trafic: 5, gb: 'ГБ', unlimit: "+безлимитные",
        social: social, internetOutSide: "Интернет за границей", time: 500, min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 50, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: false, unlimitStatus: false, messageCountAndSmS: true, timeMinStatus: true},
 
        {id: 7, name: "Премиум", price: 1500, chase: "₽", month: "/месяц", trafic: 50, gb: 'ГБ', unlimit: "+безлимитные",
        social: social, internetOutSide: "Интернет за границей", time: 2000, min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 500, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: false, unlimitStatus: false, messageCountAndSmS: true, timeMinStatus: true},
 
        {id: 8, name: "Классический", titleText: "Без абонентской платы", untlimit: "+безлимитные",
        social: social, time: 2000, min: "мин.", messageCount: 500, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: false, unlimitStatus: false, messageCountAndSmS: false, timeMinStatus: false},
 
        {id: 9, name: "Интернет для устройств", titleText: "Без абонентской платы", untlimit: "+безлимитные",
        social: social, internetOutSide: "Интернет за границей", time: 500, min: "мин.",  messageCount: 50, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: false, unlimitStatus: false, messageCountAndSmS: false, internetOutSideStatus: false, timeMinStatus: false},
 
        {id: 10, name: "Интернет для вещей", price: 100, chase: "₽", month: "/месяц", trafic: 300, mb: 'МБ', untlimit: "+безлимитные",
        social: social, internetOutSide: "Интернет за границей", time: 300, min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 100, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: false, unlimitStatus: false, messageCountAndSmS: true, timeMinStatus: true},
 
    ];

    return (
        
        <>
            <Tariff name={teleList[0].name} price={teleList[0].price} chase={teleList[0].chase} month={teleList[0].month} trafic={teleList[0].trafic} gb={teleList[0].gb} unlimit={teleList[0].unlimit} 
            social={teleList[0].social} time={teleList[0].time} min={teleList[0].min} text={teleList[0].text} messageCount={teleList[0].messageCount} sms={teleList[0].sms} buyButton={teleList[0].buyButton}
            hit={teleList[0].hit} sale={teleList[0].sale} hitsale={teleList[0].hitsale} socialStatus={teleList[0].socialStatus} unlimitStatus={teleList[0].unlimitStatus} messageCountAndSmS={teleList[0].messageCountAndSmS} timeMinStatus={teleList[0].timeMinStatus} />
         
            <Tariff name={teleList[1].name} price={teleList[1].price} chase={teleList[1].chase} month={teleList[1].month} trafic={teleList[1].trafic} gb={teleList[1].gb} unlimit={teleList[1].unlimit} 
            social={teleList[1].social} time={teleList[1].time} min={teleList[1].min} text={teleList[1].text} messageCount={teleList[1].messageCount} sms={teleList[1].sms} buyButton={teleList[1].buyButton}
            hit={teleList[1].hit} sale={teleList[1].sale} hitsale={teleList[1].hitsale} socialStatus={teleList[1].socialStatus} unlimitStatus={teleList[1].unlimitStatus} messageCountAndSmS={teleList[1].messageCountAndSmS} timeMinStatus={teleList[1].timeMinStatus} />
         
            <Tariff name={teleList[2].name} price={teleList[2].price} chase={teleList[2].chase} month={teleList[2].month} trafic={teleList[2].trafic} gb={teleList[2].gb} unlimit={teleList[2].unlimit} 
            social={teleList[2].social} internetOutSide={teleList[2].internetOutSide} time={teleList[2].time} min={teleList[2].min} text={teleList[2].text} messageCount={teleList[2].messageCount} sms={teleList[2].sms} buyButton={teleList[2].buyButton}
            hit={teleList[2].hit} sale={teleList[2].sale} hitsale={teleList[2].hitsale} socialStatus={teleList[2].socialStatus} unlimitStatus={teleList[2].unlimitStatus} messageCountAndSmS={teleList[2].messageCountAndSmS} timeMinStatus={teleList[2].timeMinStatus} />
         
            <Tariff name={teleList[3].name} price={teleList[3].price} chase={teleList[3].chase} month={teleList[3].month} trafic={teleList[3].trafic} gb={teleList[3].gb} unlimit={teleList[3].unlimit} 
            social={teleList[3].social} time={teleList[3].time} min={teleList[3].min} text={teleList[3].text} messageCount={teleList[3].messageCount} sms={teleList[3].sms} buyButton={teleList[3].buyButton}
            hit={teleList[3].hit} sale={teleList[3].sale} hitsale={teleList[3].hitsale} socialStatus={teleList[3].socialStatus} unlimitStatus={teleList[3].unlimitStatus} messageCountAndSmS={teleList[3].messageCountAndSmS} internetOutSideStatus={teleList[3].internetOutSideStatus} timeMinStatus={teleList[3].timeMinStatus} />
         
            <Tariff name={teleList[4].name} price={teleList[4].price} chase={teleList[4].chase} month={teleList[4].month} trafic={teleList[4].trafic} gb={teleList[4].gb} unlimit={teleList[4].unlimit} 
            time={teleList[4].time} min={teleList[4].min} text={teleList[4].text} messageCount={teleList[4].messageCount} sms={teleList[4].sms} buyButton={teleList[4].buyButton}
            hit={teleList[4].hit} sale={teleList[4].sale} hitsale={teleList[4].hitsale} socialStatus={teleList[4].socialStatus} unlimitStatus={teleList[4].unlimitStatus} messageCountAndSmS={teleList[4].messageCountAndSmS} timeMinStatus={teleList[4].timeMinStatus} />
    
            <Tariff name={teleList[5].name} price={teleList[5].price} chase={teleList[5].chase} month={teleList[5].month} trafic={teleList[5].trafic} gb={teleList[5].gb} unlimit={teleList[5].unlimit} 
            social={teleList[5].social}  time={teleList[5].time} min={teleList[5].min} text={teleList[5].text} messageCount={teleList[5].messageCount} sms={teleList[5].sms} buyButton={teleList[5].buyButton}
            hit={teleList[5].hit} sale={teleList[5].sale} hitsale={teleList[5].hitsale} socialStatus={teleList[5].socialStatus} unlimitStatus={teleList[5].unlimitStatus} messageCountAndSmS={teleList[5].messageCountAndSmS} timeMinStatus={teleList[5].timeMinStatus} />
           
            <Tariff name={teleList[6].name} price={teleList[6].price} chase={teleList[6].chase} month={teleList[6].month} trafic={teleList[6].trafic} gb={teleList[6].gb} unlimit={teleList[6].unlimit} 
            social={teleList[6].social} time={teleList[6].time} min={teleList[6].min} text={teleList[6].text} messageCount={teleList[6].messageCount} sms={teleList[6].sms} buyButton={teleList[6].buyButton}
            hit={teleList[6].hit} sale={teleList[6].sale} hitsale={teleList[6].hitsale} socialStatus={teleList[6].socialStatus} unlimitStatus={teleList[6].unlimitStatus} messageCountAndSmS={teleList[6].messageCountAndSmS} timeMinStatus={teleList[6].timeMinStatus} />
         
            <Tariff name={teleList[7].name} titleText={teleList[7].titleText}price={teleList[7].price} chase={teleList[7].chase} month={teleList[7].month} trafic={teleList[7].trafic} gb={teleList[7].gb} unlimit={teleList[7].unlimit} 
            social={teleList[7].social} time={teleList[7].time} min={teleList[7].min} text={teleList[7].text} messageCount={teleList[7].messageCount} sms={teleList[7].sms} buyButton={teleList[7].buyButton}
            hit={teleList[7].hit} sale={teleList[7].sale} hitsale={teleList[7].hitsale} socialStatus={teleList[7].socialStatus} unlimitStatus={teleList[7].unlimitStatus} messageCountAndSmS={teleList[7].messageCountAndSmS} timeMinStatus={teleList[7].timeMinStatus} />
         
             <Tariff name={teleList[8].name} titleText={teleList[7].titleText} price={teleList[8].price} chase={teleList[8].chase} month={teleList[8].month} trafic={teleList[8].trafic} gb={teleList[8].gb} unlimit={teleList[8].unlimit} 
            social={teleList[8].social} time={teleList[8].time} min={teleList[8].min} text={teleList[8].text} messageCount={teleList[8].messageCount} sms={teleList[8].sms} buyButton={teleList[8].buyButton}
            hit={teleList[8].hit} sale={teleList[8].sale} hitsale={teleList[8].hitsale} socialStatus={teleList[8].socialStatus} unlimitStatus={teleList[8].unlimitStatus} messageCountAndSmS={teleList[8].messageCountAndSmS} timeMinStatus={teleList[8].timeMinStatus} />
         
             <Tariff name={teleList[9].name} price={teleList[9].price} chase={teleList[9].chase} month={teleList[9].month} trafic={teleList[9].trafic} gb={teleList[9].gb} unlimit={teleList[9].unlimit} 
            social={teleList[9].social} time={teleList[9].time} min={teleList[9].min} text={teleList[9].text} messageCount={teleList[9].messageCount} sms={teleList[9].sms} buyButton={teleList[9].buyButton}
            hit={teleList[9].hit} sale={teleList[9].sale} hitsale={teleList[9].hitsale} socialStatus={teleList[9].socialStatus} unlimitStatus={teleList[9].unlimitStatus} messageCountAndSmS={teleList[9].messageCountAndSmS} timeMinStatus={teleList[9].timeMinStatus} />
         </>
    )
}
