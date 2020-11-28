import React,{useState, useEffect} from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

function Graph() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const runCall =async() => {
            let apiValue = await fetchData();
            const header = apiValue.split('\n').slice(0).map(line => (line.split(',')))[0].slice(4);

            const frData = apiValue.split('\n').slice(0).map(line => (line.split(',')))[129].slice(4);
            
            const chartData =[];
            for (let i=0; i<header.length ; i++){
                const newRow ={};
                newRow.name = header[i];
                newRow.data = parseInt(frData[i]);
                chartData.push(newRow);
                console.log(chartData);
            }
            setData(chartData);
            setIsLoading(false);
            return null;
        }
        const fetchData = async() => {
            const requestOption = {
                method: "GET",
                redirect: "follow"
            }
            const URL= `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv`

            try {
                const response = await fetch(URL,requestOption);
                return response.ok ? response.text() : null
            } catch (err) {
                console.log(err);
                return null;
            }
        }
        runCall();
    },[])
        return(
            <div className="chart-wrapper">
                {isLoading ?
                    <div>Loading...</div> :
                    <LineChart
                        width={1000}
                        height={700}
                        data={data}
                        margin={{
                            top: 5, right: 30, left:20, bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="data" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>

                }
            </div>
        );
    
}export default Graph;