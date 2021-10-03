import React from "react";

const CurrencyModal = ({ modalCurrency, id, currenciesModalAddHandler }) => {
  return (
    <div
      className={`currencyModal ${modalCurrency.active ? "active" : ""} ${
        modalCurrency.displayed ? "displayed" : ""
      }`}
      onClick={() => currenciesModalAddHandler(modalCurrency.symbol)}
    >
      {modalCurrency && <img src={modalCurrency.flagImage} alt="" />}
      {modalCurrency && (
        <h2>
          {modalCurrency.symbol} - {modalCurrency.currencyName}
        </h2>
      )}
    </div>
  );
};
export default CurrencyModal;
