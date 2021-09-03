/*
    1. Get Company lists with symbol from DB
    2. Show the 10 company depending on user input
    3. Get Stock Data of selected company from alphaVantage API
    4. Check Invalid API call. Display nothing if there is error of invalid API call.
    4. Pass symbol and company name data to three components, ChartCompanyinfoMain, CompanyInformation, CompanyNews
*/

import React, { useState, useEffect } from 'react';
import API from "../utils/API";

import ChartCompanyinfoMain from '../components/ChartCompanyinfoMain';
import CompanyInformation from '../components/CompanyInformation';
import Autocomplete from "react-autocomplete";

export default function Search() {
    const [searchInput, setSearchInput] = useState();
    const [searchListFromDB, setSearchListFromDB] = useState();
    const [searchList, setSearchList] = useState([]);
    const [searchResult, setSearchResult] = useState({ "symbol": "", "companyName": "" });

    const [isSymbol, setIsSymbol] = useState(false);

    // call All Symbols data from DB
    useEffect(() => {
        API.getSymbols()
            .then(res => {
                // console.log(res.data)
                setSearchListFromDB(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        // console.log(isSymbol);
    }, [isSymbol])

    const handleChange = e => {
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

    return (
        <>
            { searchListFromDB ? (
                <div style={{ zIndex: 10, marginTop: "", position: "absolute" }} >
                    <Autocomplete
                        getItemValue={(item) => item.Symbol + "/" + item["Company Name"]}
                        items={searchList}
                        renderItem={(item, isHighlighted) =>
                            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}
                                key={item.Symbol}>
                                {item.Symbol} {item["Company Name"]}
                            </div>
                        }
                        inputProps={{ placeholder: 'Search' }}
                        value={searchInput}
                        onChange={handleChange}
                        onSelect={(item) => {
                            // console.log(item.split("/")[0]);
                            API.getIntraMarketData(item.split("/")[0], "60min")
                                .then(res => {
                                    // Check Invalid API call
                                    if (res["data"]["Error Message"]) {
                                        setIsSymbol(false)
                                    } else {
                                        setIsSymbol(true)
                                    }
                                })
                                .then(err => {
                                    if (err !== undefined) {
                                        setIsSymbol(false)
                                    }
                                })
                            setSearchResult({
                                "symbol": item.split("/")[0],
                                "companyName": item.split("/")[1]
                            })
                        }}
                    />
                </div>
            )
                :
                (<h3><i className="fas fa-spinner fa-spin"></i> Loading Search bar....</h3>)
            }
            {isSymbol ? (
                <>
                    <ChartCompanyinfoMain companyName={searchResult["companyName"]} symbol={searchResult["symbol"]} />
                    <CompanyInformation symbol={searchResult["symbol"]} />
                </>
            ) : (<div style={{ textAlign: "center", color: "white", paddingTop: "100px" }}>Search by Company name or Symbol</div>)}

        </>
    )
}
