import React,{useState, useEffect} from 'react'
import {
    Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart,
  } from 'recharts';
  import Select from 'react-select';


function Graph() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [options, setOptions] = useState([])
    const [firstLabel, setFirstLable] = useState('FR');
    const [secondLable, setSecondLable] = useState('ITALY');
    const [firstSelect, setFirstSelect] = useState(129);
    const [secondSelect, setSecondSelect] = useState(152);

        const runCall =async() => {
            let apiValue = await fetchData();
            const header = apiValue.split('\n').slice(0).map(line => (line.split(',')))[0].slice(4);

            const firstPrep = apiValue.split('\n').slice(0).map(line => (line.split(',')))[firstSelect]
            const secondPrep = apiValue.split('\n').slice(0).map(line => (line.split(',')))[secondSelect]

            const firstLbl = firstPrep[1].toUpperCase();
            const secondLbl = secondPrep[1].toUpperCase();
            
            const chartData =[];
            for (let i=0; i<header.length ; i++){
                const newRow ={};
                newRow.name = header[i];
                newRow[firstLbl] = parseInt(firstPrep[i]);
                newRow[secondLbl] = parseInt(secondPrep[i]);
                chartData.push(newRow);
            }
            const countriesList = apiValue.split('\n').slice(1).map(line => (line.split(',').slice(0, 2)));
            const countriesArr = [];
            for (let i = 0; i < countriesList.length; i++) {
            countriesArr.push({ label: countriesList[i].reverse().join(' : '), value: i + 1 })
            }

            setFirstLable(firstLbl);
            setSecondLable(secondLbl);
            setOptions(countriesArr)
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
        useEffect(() => {
            runCall();
          }, [firstSelect, secondSelect])
        
          const firstInput = (input) => {
            setFirstSelect(input.value)
          }
        
          const secondInput = (input) => {
            setSecondSelect(input.value)
          }
        return(
            <div className="chart-wrapper">
                {isLoading ?
                    <div>loading...</div> :
                    <div className="content-wrap" style={{ width: '100%', height: '70%' }}>
                    <ResponsiveContainer aspect={1.5}>
                    <LineChart
                    width={800}
                    height={500}
                        data={data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={firstLabel} stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey={secondLable} stroke="#87d110" activeDot={{ r: 8 }} />
                    </LineChart>
                    </ResponsiveContainer>
                    <div className="selector-wrap">
                        <Select options={options} onChange={firstInput} placeholder="FRANCE" />
                        <Select options={options} onChange={secondInput} placeholder="ITALY" />
                    </div>
                    </div>
                }
            </div>
        );
    
}export default Graph;