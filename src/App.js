import React, { useState } from "react";
//importing Sass stylesheet
import "./style/appStyle.scss";
//importing the neccessary components
import HeaderComponent from "./components/HeaderComponent"; //header component
import CurrenciesMainPage from "./components/CurrenciesMainPage"; //main page component
import CurrenciesModal from "./components/CurrenciesModal"; //modal component
import currenciesData from "./currenciesData"; //data for currencies
function App() {
  let API_KEY = "ba742e0e267ecf9ca3241ecfc3c6497e"; //API key
  //states
  const [symbolToDisplay, setSymbolDisplay] = useState(); //string of symbols to retrieve data on API call
  const [symbols, setSymbols] = useState([]); //symbols of currencies selected from modal
  const [currenciesModal, setCurrenciesModal] = useState(currenciesData()); //data of currencies
  const [selectedModalCurrencies, setSelectedModalCurrencies] = useState([]); // selected currencies for main page
  const [modalStatus, setModalStatus] = useState(false); //state of modal(active/not active)
  const [apiResponse, setApiResponse] = useState(); //state of API response
  const [baseCurrency, setBaseCurrency] = useState(); //the baseCurrency

  return (
    <div className="App">
      <HeaderComponent />
      <CurrenciesMainPage
        modalStatus={modalStatus} //active/not active modal
        setModalStatus={setModalStatus}
        symbols={symbols} //symbols of currencies for API call
        setSymbols={setSymbols}
        baseCurrency={baseCurrency} //base currency
        setBaseCurrency={setBaseCurrency}
        apiResponse={apiResponse} //API response state
        setApiResponse={setApiResponse}
        selectedModalCurrencies={selectedModalCurrencies} //selected currencies state
        setSelectedModalCurrencies={setSelectedModalCurrencies}
        currenciesModal={currenciesModal} //data of currencies
        setCurrenciesModal={setCurrenciesModal}
      />
      <CurrenciesModal
        API_KEY={API_KEY} // API key
        symbolToDisplay={symbolToDisplay} //string of symbols of currencies selected from modal  for API call
        setSymbolDisplay={setSymbolDisplay}
        modalStatus={modalStatus} //modal state
        setModalStatus={setModalStatus}
        symbols={symbols} //symbols list chosen from modal for API call
        setSymbols={setSymbols}
        currenciesModal={currenciesModal} //data of currencies
        setCurrenciesModal={setCurrenciesModal}
        //selected currencies in main page
        setSelectedModalCurrencies={setSelectedModalCurrencies}
        setApiResponse={setApiResponse} //api response
      />
    </div>
  );
}

export default App;
