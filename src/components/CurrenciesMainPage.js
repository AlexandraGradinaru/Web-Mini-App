import React from "react";
import CurrencyMainPage from "./CurrencyMainPage";
const CurrenciesMainPage = ({
  modalStatus, //modal status(active/not active)
  setModalStatus,
  symbols,
  setSymbols,
  apiResponse, //API response
  selectedModalCurrencies, //selected data of currencies
  setSelectedModalCurrencies,
  currenciesModal, //data of currencies
  setCurrenciesModal,
}) => {
  const displayModalHandler = () => {
    //method that displays/hides modal
    modalStatus = !modalStatus;
    setModalStatus(modalStatus);
    console.log(modalStatus);
  };
  return (
    <div className="currenciesMainPage">
      <div className="currenciesMainPage-box">
        {selectedModalCurrencies.map((selectedCurrency) => (
          <CurrencyMainPage
            id={selectedCurrency.id}
            key={selectedCurrency.id}
            selectedCurrency={selectedCurrency}
            //currency symbols list for the API call
            symbols={symbols}
            setSymbols={setSymbols}
            //selected currencies from modal to display on main page
            selectedModalCurrencies={selectedModalCurrencies}
            setSelectedModalCurrencies={setSelectedModalCurrencies}
            //data of currencies
            currenciesModal={currenciesModal}
            setCurrenciesModal={setCurrenciesModal}
            apiResponse={apiResponse} //API response
          />
        ))}
      </div>
      <button
        className={`mainPageBtn btn ${modalStatus ? "disable-btn" : ""}`}
        onClick={displayModalHandler}
      >
        Add Currency
      </button>
    </div>
  );
};
export default CurrenciesMainPage;
