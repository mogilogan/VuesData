import steam from "../../assets/apis/steam.jpg";
import yahoo from "../../assets/apis/yahoo.jpg";
import realtor from "../../assets/apis/realtor.jpg";
import bestbuy from "../../assets/apis/bestbuy.jpg";
import stockus from "../../assets/apis/stockus.jpg";
import stockind from "../../assets/apis/stockind.jpg";

export const apis = [
  {
    title: "SteamGames API for Special Offers",
    description:
      "Steam Games API will get data from SteamGames Special Offers Section. There 2 endpoints one will provide the APP IDs of Games on Offer and other one provides the Game Name, Discount Price and Actual Price by accepting app_id.​",
    url: "https://rapidapi.com/vuesdata/api/steamgames-special-offers",
    free: "20 Req/Mon",
    pro: "3,000 Req ($12/Mon)",
    ultra: "6,000 Req ($30/Mon)",
    mega: "100,000 Req ($200/Mon)",
    img: steam,
  },
  {
    title: "Yahoo Finance India API for News",
    description:
      "Yahoo Finance API will get data from Yahoo Finance News Section. This will accept a ticker or symbol as a parameter and get the latest news based on that stock symbol.",
    url: "https://rapidapi.com/vuesdata/api/yahoo-finance-india1",
    free: "20 Req/Mon",
    pro: "10,000 Req ($8.99/Mon)",
    ultra: "50,000 Req ($26.99/Mon)",
    mega: "Unlimited Req ($279.99/Mon)",
    img: yahoo,
  },
  {
    title: "US Stock Prices API Live!",
    description:
      "US Stock Price API will accept a ticker or symbol as a parameter and get the live price based on that time.",
    url: "https://rapidapi.com/vuesdata/api/us-stock-prices-live1",
    free: "20 Req/Mon",
    pro: "3,000 Req ($20.99/Mon)",
    ultra: "8,000 Req ($60.99/Mon)",
    mega: "100,000 Req ($299/Mon)",
    img: stockus,
  },
  {
    title: "Indian Stock Prices API Live!",
    description:
      "Indian Stock Price API will accept a ticker or symbol as a parameter and get the live price based on that time.",
    url: "https://rapidapi.com/vuesdata/api/indian-stock-exchange-api1",
    free: "10 Req/Mon",
    pro: "10,000 Req ($9.99/Mon)",
    ultra: "50,000 Req ($49.99/Mon)",
    mega: "100,000 Req ($99.99/Mon)",
    img: stockind,
  },
  {
    title: "BestBuy Data API",
    description:
      "BestBuy API provides you with a JSON data which will contain the product name, product price, SKU, Model Number, Color, Availability etc. It will accept a keyword and pageNum as parameter. This API scrapes the product search page of BestBuy.",
    url: "https://rapidapi.com/vuesdata/api/bestbuy-product-data-api/",
    free: "20 Req/Mon",
    pro: "12,000 Req ($20.99/Mon)",
    ultra: "43,000 Req ($72.99/Mon)",
    mega: "100,000 Req ($299.99/Mon)",
    img: bestbuy,
  },
  {
    title: "Realtor Data API",
    description:
      "Realtor API has 3 endpoints: 1st is fetching data from the Realtor Property search page here you have to enter the city and state code with offset value, 2nd is fetching data from the Realtor Agents page, here you have to enter the City, state code and pageNum to get the data, 3rd is fetching data from the Realtor Schools page, here you have to enter the city, state code, school level and pageNum to get the data",
    url: "https://rapidapi.com/vuesdata/api/realtor-data-api-for-real-estate/",
    free: "500 Req/Mon",
    pro: "12,000 Req ($20.99/Mon)",
    ultra: "52,000 Req ($100/Mon)",
    mega: "2,000,000 Req ($1000/Mon)",
    img: realtor,
  },
];
