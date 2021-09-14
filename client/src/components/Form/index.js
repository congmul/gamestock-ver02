/* 
    1. 
*/

import React, { useState, useEffect } from 'react';
import "./style.scss";
import API from '../../utils/API'
import { useAuth } from '../../contexts/AuthContext'
import { Alert, Card, Button, Form } from 'react-bootstrap'

import Autocomplete from "react-autocomplete";

export default function PurchaseForm() {
    const [searchInput, setSearchInput] = useState();
    const [searchListFromDB, setSearchListFromDB] = useState();
    const [searchList, setSearchList] = useState([]);
    // const [searchResult, setSearchResult] = useState({ "symbol": "", "companyName": "" });
    // const [isSymbol, setIsSymbol] = useState(false);

    // const history = useHistory();
    const [formObject, setFormObject] = useState({
        symbol: "",
        amount: 0
    });
    const [currentPrice, setCurrentPrice] = useState();
    const [buyOrSell, setbuyOrSell] = useState("buy");
    const [message, setMessage] = useState();
    const [userBalance, setUserBalance] = useState(0)
    const [stocksPortfolio, setStocksPortfolio] = useState([])
    const [foundStock, setfoundStock] = useState("")
    const [numberOfStocks, setNumberOfStocks] = useState(0)

    const { currentUser } = useAuth();

    // call All Symbols data from DB
    useEffect(() => {
        API.getSymbols()
            .then(res => {
                // console.log(res.data)
                setSearchListFromDB(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    const handleChangeCompanySearch = e => {
        e.preventDefault();
        let userInput = e.target.value.trim();
        // console.log(userInput);
        setSearchInput(userInput);
        let searchQuery = searchListFromDB.filter(list => {
            // console.log(list["Symbol"].toLowerCase())
            // console.log(userInput);
            return ((list["Symbol"] + list["Company Name"]).toLowerCase().includes(userInput.toLowerCase()))
        })
        let searchLists = []

        // If there are bunch of search lists, then display only 10 result.
        if (searchQuery.length > 10) {
            for (let i = 0; i < 10; i++) {
                searchLists.push(searchQuery[i])
            }
        } else {
            for (let i = 0; i < searchQuery.length; i++) {
                searchLists.push(searchQuery[i])
            }
        }
        setSearchList(searchLists)
    };

    function calculateTotal() {
        let total;
        if (formObject.symbol && formObject.amount) {
            total = Number(currentPrice) * Number(formObject.amount)
        } else {
            total = ""
        }
        return parseFloat(total).toFixed(2);
    }

    function handleClick(event) {
        const { name, value } = event.target;
        setbuyOrSell(value);
    }

    function handleChangeAmountForm(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        // GetCurrentPrice(formObject.symbol)
        let newArr = stocksPortfolio.filter(stock => {
            // console.log(stock.symbol === formObject.symbol.toUpperCase().trim())
            return stock.symbol === formObject.symbol.toUpperCase().trim()
        });
        if (newArr.length) {
            setfoundStock(newArr[0].symbol)
            setNumberOfStocks(newArr[0].amount)
        }
    };

    function GetCurrentPrice(symbol) {
        API.getCurrentPrice(symbol)
            .then(res => {
                setCurrentPrice(parseFloat(res.data['Global Quote']['05. price']).toFixed(2))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        API.getUserData(currentUser.email)
            .then(data => setUserBalance(data.data.balance))
        API.getAllStocks(currentUser.email)
            // .then(data => console.log(data.data)) 
            .then(data => setStocksPortfolio(data.data))

    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        // console.log("userBalance", userBalance)
        // console.log(buyOrSell)
        // console.log(stocksPortfolio)
        if (buyOrSell === "buy") {
            if (calculateTotal() > userBalance) {
                setMessage(`You don't have enough money. Your balance is ${userBalance}`)
            }
            else {
                API.saveBuyTransaction({
                    email: currentUser.email,
                    symbol: formObject.symbol.toUpperCase().trim(),
                    amount: formObject.amount,
                    price: currentPrice
                })
                    .then(res => setMessage(`Successfully bought ${formObject.amount} ${formObject.symbol.toUpperCase().trim()} shares`))
                    .catch(err => console.log(err))

                // setMessage(`Successfully bought ${formObject.amount} ${formObject.symbol.toUpperCase().trim()} shares`)
                // history.push("/gamestock/user")
            }
        }
        if (buyOrSell === "sell") {
            // console.log(foundStock)
            // console.log(numberOfStocks)
            if (foundStock === "") {
                setMessage(`You don't own any ${formObject.symbol.toUpperCase().trim()} shares`)
            }
            else if (parseInt(formObject.amount) > parseInt(numberOfStocks)) {
                setMessage(`You only have ${numberOfStocks} ${formObject.symbol.toUpperCase().trim()} shares to sell`)
            } else {
                API.saveSellTransaction({
                    email: currentUser.email,
                    symbol: formObject.symbol.toUpperCase().trim(),
                    amount: formObject.amount,
                    price: currentPrice
                })
                    .then(data => setMessage(`Successfully sold ${formObject.amount} ${formObject.symbol.toUpperCase().trim()} shares`))
                    .catch(err => console.log(err))
                // setMessage(`Successfully sold ${formObject.amount} ${formObject.symbol.toUpperCase().trim()} shares`)
                // history.push("/gamestock/user")
            }
        }
    }

    return (
        <>
            <Card className="trade-card">
                <Card.Body>
                    <h1 className="text-center mb-4 p-3 text-white" style={{ backgroundColor: "#FD0000" }}>Trade Shares</h1>
                    {message && <Alert variant="info">{message}</Alert>}
                    {searchListFromDB
                    ? <Form >
                    <Form.Group id="symbol">
                        <Form.Label>Search Company</Form.Label>
                        <Autocomplete 
                            getItemValue={(item) => item.Symbol + "/" + item["Company Name"]}
                            items={searchList}
                            renderItem={(item, isHighlighted) =>
                                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}
                                    key={item.Symbol}>
                                    {item.Symbol} {item["Company Name"]}
                                </div>
                            }
                            inputProps={{ placeholder: 'Company Name or Symbol', style: { paddingLeft:'15px' ,width: '275px', height: '40px', borderRadius: '5px', border: '0.5px solid rgb(180, 180, 180)'}}}
                            value={searchInput}
                            onChange={handleChangeCompanySearch}
                            onSelect={(item) => {
                                // console.log(item.split("/")[0]);
                                GetCurrentPrice(item.split("/")[0]);
                                setFormObject({
                                    ...formObject,
                                    "symbol": item.split("/")[0]
                                })
                            }}
                        />
                        <div id="previewPrice" className="form-text text-muted">Market price: {currentPrice? '$' + currentPrice: <></>}</div>
                    </Form.Group>
                    <Form.Group id="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number"
                            name="amount"
                            onChange={handleChangeAmountForm}
                        />
                        <div id="previewTotal" className="form-text text-muted">Total: {formObject.symbol && formObject.amount ? "$"+calculateTotal(): ""}</div>
                    </Form.Group>

                    <label>
                        Buy
                        <input className="mx-1"
                            type="radio"
                            value="buy"
                            checked={buyOrSell === "buy"}
                            onChange={handleClick} />
                    </label>
                    <label className="ml-3">
                        Sell
                        <input className="mx-1"
                            type="radio"
                            value="sell"
                            checked={buyOrSell === "sell"}
                            onChange={handleClick} />
                    </label>
                    <Button onClick={handleSubmit} type="submit" className="btn w-100" style={{ backgroundColor: "#FD0000" }}>Complete Transaction</Button>
                </Form>
                    : <h3><i className="fas fa-spinner fa-spin"></i> Loading Trading Form....</h3>}
                    
                </Card.Body>
            </Card>

        </>
    )
}
