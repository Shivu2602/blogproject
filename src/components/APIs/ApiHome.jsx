import React, { createContext, useState } from "react";
export const home = createContext();
const ApiHome = (props) => {
  const [dataHome, setDataHome] = useState([
   
   {
    "source": {
    "id": null,
    "name": "PRNewswire"
    },
    "author": null,
    "title": "AG&P gana el premio Compañía del año en APAC 2022 en GNL en los Premios Anuales de Excelencia del Energy Council",
    "description": "NEW YORK, May 25, 2022 /PRNewswire/ -- InvestorsObserver issues critical PriceWatch Alerts for AMD, PZZA, LNT, NOC, and TSLA. Click a link below then choose between in-depth options trade idea report or a stock score report. Options Report – Ideal trade ideas…",
    "url": "https://www.prnewswire.com/news-releases/ag-amp-p-gana-el-premio-compania-del-ano-en-apac-2022-en-gnl-en-los-premios-anuales-de-excelencia-del-energy-council-820323815.html",
    "urlToImage": "https://mma.prnewswire.com/media/1836165/Joe_Sigelman_AG_P.jpg?w=500",
    "publishedAt": "2022-05-25T13:31:00Z",
    "content": "NEW YORK, May 25, 2022 /PRNewswire/ -- InvestorsObserver issues critical PriceWatch Alerts for AMD, PZZA, LNT, NOC, and TSLA.\r\nClick a link below then choose between in-depth options trade idea repor… [+796 chars]"
    },


   {
    "source": {
    "id": null,
    "name": "FX Empire"
    },
    "author": "Reuters",
    "title": "U.S. automated electric truck startup Solo AVT picks battery supplier ABS",
    "description": "By Paul Lienert (Reuters) -   Silicon Valley startup Solo Advanced Vehicle Technologies has partnered with Michigan-based Advanced Battery Solutions (ABS) to develop battery packs for its new driverless electric heavy-duty truck, Solo AVT’s chief executive to…",
    "url": "https://www.fxempire.com/news/article/u-s-automated-electric-truck-startup-solo-avt-picks-battery-supplier-abs-1013091",
    "urlToImage": "https://responsive.fxempire.com/width/600/webp-lossy-70.q50/_fxempire_/2022/05/tagreuters.com2022newsml_LYNXNPEI4O0MG1.jpg",
    "publishedAt": "2022-05-25T13:22:51Z",
    "content": "Were focused on decarbonizing the logistics industry, CEO and founder Graham Doorley said in an interview, adding the company is raising money to assemble its Class 8 truck, the SD1, in the United St… [+1575 chars]"
    },
   
 
   {
    "source": {
    "id": null,
    "name": "The Boston Globe"
    },
    "author": "Aaron Pressman",
    "title": "Tesla owners less likely to crash their EV than their other cars",
    "description": "A new study from Cambridge Mobile Telematics compared the safety performance of Tesla drivers when they drove their EV versus when they drove other vehicles.",
    "url": "https://www.bostonglobe.com/2022/05/25/business/tesla-owners-less-likely-crash-their-ev-than-their-other-cars/",
    "urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/EPYL_ezG6YShiuCjOyNPVwtiGAM=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/7WBU7ER3MU5FBJBHPFL7UFFBKA.jpg",
    "publishedAt": "2022-05-25T13:06:52Z",
    "content": "People who drive a Tesla are a lot less likely to get in an accident in their electric car than when they drive another brand of vehicle they own, according to new research from Cambridge Mobile Tele… [+3866 chars]"
    },
  
   {
    "source": {
    "id": null,
    "name": "The Truth About Cars"
    },
    "author": "Matt Posky",
    "title": "Volkswagen Board Displeased With Current Software Situation",
    "description": "Last week, Volkswagen’s supervisory board reportedly told management that it needed to work on improving the company’s software division. Though that should hardly be surprising considering how often digital glitches have delayed product launches and forced t…",
    "url": "https://www.thetruthaboutcars.com/2022/05/volkswagen-board-displeased-with-current-software-situation/",
    "urlToImage": "https://www.thetruthaboutcars.com/wp-content/uploads/2021/03/DB2020AU01865_large.jpg",
    "publishedAt": "2022-05-25T13:00:29Z",
    "content": "Last week, Volkswagen’s supervisory board reportedly told management that it needed to work on improving the company’s software division. Though that should hardly be surprising considering how often… [+5684 chars]"
    },

    {
      "source": {
      "id": null,
      "name": "Dagospia.com"
      },
      "author": null,
      "title": "SILICON FAIDA - SECONDO IL SITO \"BREITBART\", BILL GATES AVREBBE FINANZIATO,- NELL'ARTICOLO SI PARLA DI \"DENARO OSCURO\" GIRATO A 11 DEI 26 FIRMATARI DI UNA LETTERA APERTA CHE SPINGEVA AL BOICOTTAGGIO DI MUSK...",
      "description": "Bill Gates commented on Elon Musk's plan to purchase Twitter and how he could make misinformation online worse. #WSJCEOCouncil https://t.co/0E4mtWvjQI pic.twitter.com/xkQMpurrcO — The Wall Street Journal (@WSJ) May 4, 2022   Dagotraduzione dal Daily Mail   Tw…",
      "url": "https://www.dagospia.com/rubrica-29/cronache/silicon-faida-secondo-sito-quot-breitbart-quot-bill-gates-avrebbe-311435.htm",
      "urlToImage": "https://cdn-static.dagospia.com/img/patch/05-2022/elon-musk-bill-gates-tweet-1662669.jpg",
      "publishedAt": "2022-05-25T13:07:00Z",
      "content": "Dagotraduzione dal Daily Mail\r\nTweet di Elon Musk\r\nContinua la faida tra Elon Musk e Bill Gates. I due miliardari si stuzzicano su Twitter da anni. L’ultimo episodio riguarda un tweet di Elon Musk. I… [+1626 chars]"
      },

   {
    "source": {
    "id": null,
    "name": "The Information"
    },
    "author": "Sarah Krouse, Kevin McLaughlin",
    "title": "While Battling Musk, Twitter CEO Agrawal Shows Decisive Side",
    "description": "Years before Elon Musk set his sights on Twitter, Parag Agrawal, a senior engineering executive at the social media company, was asked in an all-hands meeting what his hobbies were. He nervously replied that he enjoyed growing plants in water, without soil. N…",
    "url": "https://www.theinformation.com/articles/while-battling-musk-twitter-ceo-agrawal-shows-decisive-side",
    "urlToImage": "https://tii.imgix.net/production/articles/8021/d114bb07-78f2-409a-90a5-59339a19f535.png?w=800&fm=jpg&auto=compress&frame=0",
    "publishedAt": "2022-05-25T13:00:10Z",
    "content": "Years before Elon Musk set his sights on Twitter, Parag Agrawal, a senior engineering executive at the social media company, was asked in an all-hands meeting what his hobbies were. He nervously repl… [+1024 chars]"
    },
   {
    "source": {
    "id": null,
    "name": "Newsbusters.org"
    },
    "author": "Jeffrey Clark Contributing Writer",
    "title": "VILLAINS, UNITED? Soros Poured Millions into Groups Trying to Bring Down Musk",
    "description": "Two notorious leftist billionaires funneled millions into some of the same organizations that attacked Tesla CEO Elon Musk as a threat to democracy.",
    "url": "https://newsbusters.org/blogs/business/jeffrey-clark/2022/05/24/villains-united-soros-poured-millions-groups-trying-bring",
    "urlToImage": "https://cdn.newsbusters.org/styles/mobile_thumb_700x400_/s3/2022-05/Gates%20and%20Soros.jpg?itok=nhDsbdL_",
    "publishedAt": "2022-05-25T12:57:52Z",
    "content": "Two notorious leftist billionaires funneled millions into some of the same organizations that attacked Tesla CEO Elon Musk as a threat to democracy. \r\nLiberal billionaire mega-donor George Soros fund… [+2993 chars]"
    },
    
   {
    "source": {
    "id": null,
    "name": "Motley Fool"
    },
    "author": "newsfeedback@fool.com (Anthony Di Pizio)",
    "title": "Lost Among the Stock Splits: 1 Unstoppable Stock You'll Regret Not Buying on the Dip",
    "description": "Stock splits might get investors excited, but here's a stock that's a big winner without one.",
    "url": "https://www.fool.com/investing/2022/05/25/lost-among-the-stock-splits-1-unstoppable-stock-yo/",
    "urlToImage": "https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/681453/a-person-using-a-virtual-reality-headset-while-sitting-in-a-cafe.jpg&w=2000&op=resize",
    "publishedAt": "2022-05-25T12:55:00Z",
    "content": "Stock splits have grabbed headlines in the financial world this year. Although stock splits don't fundamentally change a company's value, the need for them could hint at significant gains in the comp… [+5296 chars]"
    },
    {
      "source": {
      "id": null,
      "name": "Seeking Alpha"
      },
      "author": "Rex Crum",
      "title": "DocuSign erases 20%+",
      "description": "Over the past 6 months, the massive value compressions have brought down the tech generals. Read why we think the QQQ is no longer overvalued.",
      "url": "https://seekingalpha.com/news/3847497-docusign-gets-erased-as-earnings-miss-wall-streets-estimates",
      "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1162476186/image_1162476186.jpg?io=getty-c-w750",
      "publishedAt": "2022-05-25T13:30:09Z",
      "content": "asbe/iStock via Getty Images\r\nInvestment Thesis\r\n Tech stocks have been massacred since the start of 2022. We noticed that the decline in high-growth stocks has fallen since November 2021, as the Fed… [+6027 chars]"
      },


]);
return (
  <div>
    <home.Provider value={[dataHome, setDataHome]}>
      {props.children}
    </home.Provider>
  </div>
);
};
export default ApiHome;
