import React from "react";

const CurrencyMainPage = ({
  selectedCurrency,
  symbols,
  id,
  setSymbols,
  apiResponse,
  currenciesModal,
  setCurrenciesModal,
  selectedModalCurrencies,
  setSelectedModalCurrencies,
}) => {
  let newSymbols = [...symbols];
  //method that deletes the selected symbol in the main page from the symbols list and returns the new list of symbols
  const currencyMainPageDeleteHandler = (symbol) => {
    const displayedCurrenciesMainPage = [...currenciesModal];
    const displayedCurrencies = displayedCurrenciesMainPage.find(
      (currency) => currency.symbol === symbol
    );
    displayedCurrencies.displayed = false;
    displayedCurrencies.active = !displayedCurrencies.active;
    newSymbols = newSymbols.filter(
      (symbol) => symbol !== displayedCurrencies.symbol
    );
    setSymbols(newSymbols);
    setCurrenciesModal(displayedCurrenciesMainPage);
  };
  //method to add base symbol to all currencies and to set the baseCurrency property to true for the base currency
  const currencyMainPageBaseCurrencyHandler = (id, symbol) => {
    let mainPageCurrencies = [...selectedModalCurrencies];
    let n = mainPageCurrencies.length;
    for (let i = 0; i < n; i++) {
      if (mainPageCurrencies[i].id === id) {
        mainPageCurrencies[i].baseCurrency = true;
      } else {
        mainPageCurrencies[i].baseCurrency = false;
      }
      mainPageCurrencies[i].baseSymbol = symbol;
      setSelectedModalCurrencies(mainPageCurrencies);
    }
  };
  //method to display the currencies values based on the base currency and its input
  const currencyMainPageInputHandler = (e) => {
    let inputBaseCurrency = e.target.value; //input value
    let resultedInput;
    let currencyValueOnBaseCurrency;
    let currenciesToExchange = [...selectedModalCurrencies];
    let mainBase = currenciesToExchange.find(
      (currency) => currency.baseCurrency === true
    );
    let mainBaseSymbol = mainBase.symbol; //base currency symbol
    for (let i = 0; i < currenciesToExchange.length; i++) {
      if (symbols.includes(currenciesToExchange[i].symbol)) {
        let responseApi = apiResponse;
        let responseApiCurrencies = Object.keys(responseApi.rates);
        let currencySymbolToChange = responseApiCurrencies.find(
          (currencySymbol) => currencySymbol === currenciesToExchange[i].symbol
        );
        let currencyExchangeValue = responseApi.rates[currencySymbolToChange];
        let baseCurrencyValue = responseApi.rates[mainBaseSymbol];
        if (currenciesToExchange[i].baseCurrency) {
          resultedInput = inputBaseCurrency; //input value for base currency
          currencyValueOnBaseCurrency = 1; //exchange value for base currency
        } else {
          resultedInput =
            inputBaseCurrency * (currencyExchangeValue / baseCurrencyValue); //input value for the other currencies
          currencyValueOnBaseCurrency =
            currencyExchangeValue / baseCurrencyValue; //exchange value for the other currencies
        }
        //store input value and exchange value for the currencies
        currenciesToExchange[i].currencyInputValue = resultedInput;
        currenciesToExchange[i].onBaseCurrencyValue =
          currencyValueOnBaseCurrency;
        setSelectedModalCurrencies(currenciesToExchange);
      }
    }
  };
  const currencyMainPageDefaultInputHandler = () => {
    let inputBaseCurrency = 1;
    let resultedInput;
    let currencyValueOnBaseCurrency;
    let currenciesToExchange = [...selectedModalCurrencies];
    let mainBase = currenciesToExchange.find(
      (currency) => currency.baseCurrency === true
    );
    let mainBaseSymbol = mainBase.symbol; //base currency symbol
    for (let i = 0; i < currenciesToExchange.length; i++) {
      if (symbols.includes(currenciesToExchange[i].symbol)) {
        let responseApi = apiResponse;
        let responseApiCurrencies = Object.keys(responseApi.rates);
        let currencySymbolToChange = responseApiCurrencies.find(
          (currencySymbol) => currencySymbol === currenciesToExchange[i].symbol
        );
        let currencyExchangeValue = responseApi.rates[currencySymbolToChange];
        let baseCurrencyValue = responseApi.rates[mainBaseSymbol];
        if (currenciesToExchange[i].baseCurrency) {
          resultedInput = inputBaseCurrency; //input value for base currency
          currencyValueOnBaseCurrency = 1; //exchange value for base currency
        } else {
          resultedInput =
            inputBaseCurrency * (currencyExchangeValue / baseCurrencyValue); //input value for the other currencies
          currencyValueOnBaseCurrency =
            currencyExchangeValue / baseCurrencyValue; //exchange value for the other currencies
        }
        //store input value and exchange value for the currencies
        currenciesToExchange[i].currencyInputValue = resultedInput;
        currenciesToExchange[i].onBaseCurrencyValue =
          currencyValueOnBaseCurrency;
        setSelectedModalCurrencies(currenciesToExchange);
      }
    }
  };
  return (
    <div
      className={`currencyMainPage ${
        selectedCurrency.displayed ? "" : "not-displayed"
      } ${selectedCurrency.baseCurrency ? "mainBase-currency" : ""}`}
    >
      <p onClick={() => currencyMainPageDeleteHandler(selectedCurrency.symbol)}>
        X
      </p>
      <div className="currency-detail">
        <div className="img-container">
          {selectedCurrency && <img src={selectedCurrency.flagImage} alt="" />}
        </div>
        <div className="symbol-container">
          {selectedCurrency && <p>{selectedCurrency.currencySign}</p>}
        </div>

        <div className="currency-input">
          <input
            type="text"
            placeholder="Add a numeric value"
            onClick={() => {
              currencyMainPageBaseCurrencyHandler(
                selectedCurrency.id,
                selectedCurrency.symbol
              );
              currencyMainPageDefaultInputHandler();
            }}
            onChange={currencyMainPageInputHandler}
            value={selectedCurrency.currencyInputValue}
          />
          {selectedCurrency && (
            <h3 className="currency-heading">
              {selectedCurrency.symbol} - {selectedCurrency.currencyName}
            </h3>
          )}
          {selectedCurrency && (
            <h2
              className={`currency-heading ${
                selectedCurrency.currencyInputValue ? "" : "not-displayed"
              }`}
            >
              <span>1 </span> {selectedCurrency.baseSymbol} ={" "}
              <span>{selectedCurrency.onBaseCurrencyValue} </span>{" "}
              {selectedCurrency.symbol}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};
export default CurrencyMainPage;
