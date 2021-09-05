import React from "react";
import ChartUserInfo from "../../components/ChartUserInfo"
import MyStockList from "../../components/MyStockList"
import MyWatchList from "../../components/MyWatchList"
import News from "../../components/News"
import "./style.scss";

export default function Userpage() {
    return (
        <div>
            <ChartUserInfo />

            <div>
                <div className="pt-5" style={{ color: "white" }}>
                    <MyStockList />
                </div>
                <div className="pt-5" style={{ color: "white" }}>
                    <MyWatchList />
                </div>
                <div className="pt-5" style={{ color: "white" }}>
                    <News />
                </div>
            </div>
        </div>
    );
}
