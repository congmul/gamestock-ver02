import React from 'react'
import Plot from 'react-plotly.js';


export default function ChartPlotly(props) {
    // console.log("In ChartPlotlyInfo")
    // console.log(props.company.graphData)
    // console.log(props.style)

    return (
        <Plot
            data={[
                {
                    x: props.company.graphData.x,
                    y: props.company.graphData.y,
                    type: 'scatter',
                    mode: 'lines',
                    marker: props.company.graphData.marker,
                },
            ]}

            layout={{
                dragmode: 'zoom',
                margin: {
                    l: 0,
                    r: 0,
                    b: 0,
                    t: 0
                },
                xaxis: {
                    // get range date!!,
                    range: [props.company.graphData.x[0], props.company.graphData.x[props.company.graphData.x.length -1]],
                    rangeslider: {
                        visible: false
                    },
                    type: 'date',
                    // type: props.type,
                    visible: false,
                    tickmode: 'array',
                    // fixedrange: true,
                    // autorange: "reversed"

                },
                yaxis: {
                    visible: false
                },
                font: {
                    family: "Raleway",
                    color: "#fff"
                },
                paper_bgcolor: "#000",
                plot_bgcolor: "#000",
            }}
            style={ props.style }
            config={{ displayModeBar: false }}
            useResizeHandler={ true }
        />
    )
}
