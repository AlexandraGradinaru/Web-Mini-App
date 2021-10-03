import React from "react";
import CurrencyModal from "./CurrencyModal";
import axios from "axios";
const CurrenciesModal = ({
  currenciesModal,
  setCurrenciesModal,
  symbols,
  setSymbols,
  symbolToDisplay,
  setSymbolDisplay,
  modalStatus,
  setModalStatus,
  API_KEY,
  setSelectedModalCurrencies,
  setApiResponse,
}) => {
  let newSymbols = [...symbols];
  //method to add currencies symbols to main page
  //functie pentru adaugarea simbolurilor valutelor selectate in pagina principala si stergerea lor din modal
  const currenciesModalAddHandler = (symbol) => {
    if (!symbols.find((symbolNew) => symbolNew === symbol)) {
      newSymbols = [symbol, ...symbols];
    } else {
      newSymbols = newSymbols.filter((symbolNew) => symbolNew !== symbol);
    }
    setSymbols(newSymbols); //updating the state of symbols
    let newCurrenciesModal = [...currenciesModal];
    const currencyActiveModal = newCurrenciesModal.find(
      (currency) => currency.symbol === symbol
    );
    currencyActiveModal.active = !currencyActiveModal.active;
    setCurrenciesModal(newCurrenciesModal); //updating the data of currencies with active state
    const newSetSymbolDisplay = newSymbols.join(","); //creating a string of symbols
    setSymbolDisplay(newSetSymbolDisplay); //updating the state of the symbols string used on API call
  };
  //method to get data from the API
  const call = async () => {
    await axios
      .get(
        `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=${symbolToDisplay}`
      )
      .then((response) => {
        const newMainPageCurrencies = response.data;
        setApiResponse(newMainPageCurrencies); //updating the API response state
        symbols.map((symbol) => {
          let newDisplayedCurrenciesModal = [...currenciesModal];
          const displayedCurrencies = newDisplayedCurrenciesModal.find(
            (currency) => currency.symbol === symbol
          );
          displayedCurrencies.displayed = true; //setting the displayed property to true(currency has been added to the main page)
          setCurrenciesModal(newDisplayedCurrenciesModal); //updating the currencies data
          setSelectedModalCurrencies(newDisplayedCurrenciesModal);
        });
      })
      .catch((error) => console.log(error));
    modalHideHandler();
  };
  //method to display/hide the modal
  const modalHideHandler = () => {
    modalStatus = !modalStatus;
    setModalStatus(modalStatus);
  };
  return (
    <div className={`currenciesModal ${modalStatus ? "active-modal" : ""}`}>
      <div className="modal-background" onClick={modalHideHandler}></div>
      <div className="currencies-modal-content">
        {currenciesModal.map((modalCurrency) => (
          <CurrencyModal
            modalCurrency={modalCurrency}
            id={modalCurrency.id}
            key={modalCurrency.id}
            currenciesModalAddHandler={() =>
              currenciesModalAddHandler(modalCurrency.symbol)
            }
          />
        ))}
      </div>

      <button className="modalBtn btn" onClick={call}>
        Add Currency
      </button>
    </div>
  );
};
export default CurrenciesModal;
