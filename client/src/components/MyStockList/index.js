import React, { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';

import UserPageAPI from '../../utils/UserPageAPI';
import API from '../../utils/API';
import { useAuth } from '../../contexts/AuthContext';

import StockChart from './StockChart';

import "./style.scss";

export default function MyStockList() {

    //Dummy Data
    const { currentUser } = useAuth();
    const [ myStockLists , setMyStockLists] = useState([
        {
            symbol: "MSFT",
            amount: 175,
            currentValue: "245.29"
        },
        {
            symbol: "TSLA",
            amount: 10,
            currentValue: "817.90"
        },
        {
            symbol: "ORCL",
            amount: 7,
            currentValue: "63.15"
        },
        {
            symbol: "IBM",
            amount: 12,
            currentValue: "120.90"
        },
        {
            symbol: "AMZN",
            amount: 125,
            currentValue: "3276.50"
        },
        {
            symbol: "AMD",
            amount: 55,
            currentValue: "93.79"
        }
    ])

    useEffect(() => {
        let StockArr = []

        UserPageAPI.getStockList(currentUser.email)
        .then(res => {
            console.log(res.data);
            res.data.map(stock => {
                API.getIntraMarketData(stock.symbol, "15min")
                    .then(stock => {
                        console.log(stock)
                        StockArr.push(stock);
                    })
                    .catch(err => console.log(err))
            })
        })
        .catch(err => console.log(err))

    // Get Current Value inside API.getIntraMarketDATA
    function currentValue(stock) {

    }

    // Put Currten Value with symbols and shares which are from Stock DB to setMyStockLists
        
    }, [])
    return (
        <>
            <h4>Stocks</h4>
            <div className="myStockLists">
                {myStockLists.map(company => {
                    return(<div>
                        <Row>
                            <Col>
                                <Row style={{ margin: "auto" }}>
                                    {company.symbol}
                                </Row>
                                <Row style={{ margin: "auto", color: "grey", fontSize: "10px" }}>
                                    {company.amount} shares
                                </Row>
                            </Col>
                            <Col className="text-center" style={{ margin: "auto" }}>
                                <StockChart />
                            </Col>
                            <Col className="text-right" style={{ margin: "auto" }}>
                                ${company.currentValue}
                            </Col>
                        </Row>
                        <hr className="myHr" />
                    </div>)
                   })}
            </div>

        </>
    )
}
