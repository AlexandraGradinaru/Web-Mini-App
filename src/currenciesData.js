import { v4 as uuidv4 } from "uuid";

function currenciesData() {
  return [
    {
      country: "US",
      flagImage: "https://www.countryflags.io/us/flat/64.png",
      currencySign: "$",
      symbol: "USD",
      currencyName: "US Dollar",
      id: uuidv4(),
      active: false,
      displayed: false,
      baseCurrency: false,
      baseSymbol: "",
    },
    {
      country: "EU",
      flagImage: "https://www.countryflags.io/eu/flat/64.png",
      currencySign: "€",
      symbol: "EUR",
      currencyName: "Euro",
      id: uuidv4(),
      active: false,
      displayed: false,
      baseCurrency: false,
      baseSymbol: "",
    },
    {
      country: "JP",
      flagImage: "https://www.countryflags.io/jp/flat/64.png",
      currencySign: "¥",
      symbol: "JPY",
      currencyName: "Japanese Yen",
      id: uuidv4(),
      active: false,
      displayed: false,
      baseCurrency: false,
      baseSymbol: "",
    },
    {
      country: "AU",
      flagImage: "https://www.countryflags.io/au/flat/64.png",
      currencySign: "$",
      symbol: "AUD",
      currencyName: "Australian Dollar",
      id: uuidv4(),
      active: false,
      displayed: false,
      baseCurrency: false,
      baseSymbol: "",
    },
    {
      country: "GB",
      flagImage: "https://www.countryflags.io/gb/flat/64.png",
      currencySign: "£",
      symbol: "GBP",
      currencyName: "British pound",
      id: uuidv4(),
      active: false,
      displayed: false,
      baseCurrency: false,
      baseSymbol: "",
    },
    {
      country: "RU",
      flagImage: "https://www.countryflags.io/ru/flat/64.png",
      currencySign: "	₽",
      symbol: "RUB",
      currencyName: "Russian ruble",
      id: uuidv4(),
      active: false,
      displayed: false,
      baseCurrency: false,
      baseSymbol: "",
    },
    {
      country: "MX",
      flagImage: "https://www.countryflags.io/mx/flat/64.png",
      currencySign: "$",
      symbol: "MXN",
      currencyName: "	Mexican peso",
      id: uuidv4(),
      active: false,
      displayed: false,
      baseCurrency: false,
      baseSymbol: "",
    },
    {
      country: "NO",
      flagImage: "https://www.countryflags.io/no/flat/64.png",
      currencySign: "kr",
      symbol: "NOK",
      currencyName: "	Norwegian krone",
      id: uuidv4(),
      active: false,
      displayed: false,
      baseCurrency: false,
      baseSymbol: "",
    },
    {
      country: "TR",
      flagImage: "https://www.countryflags.io/tr/flat/64.png",
      currencySign: "₺",
      symbol: "TRY",
      currencyName: "	Turkish lira",
      id: uuidv4(),
      active: false,
      displayed: false,
      baseCurrency: false,
      baseSymbol: "",
    },
  ];
}
export default currenciesData;
