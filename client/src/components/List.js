import React from 'react'
import {useState} from 'react'
import StatTable from './StatTable'
function List({legendsArray}) {
    const [selectedLegendName, setLegend] = useState(legendsArray[0].metadata.name);
    const [selectedLegendObject, setLegendObject] = useState(legendsArray[0])
    let selectedObject = legendsArray[0];
    
    const onChangeLegend = (event) =>{
        setLegend(event.target.value);
        updateLegendObject(event.target.value);
        setLegendObject(selectedObject);
    }

    let legendsList = legendsArray.map((legend, i) => {
        return (
            <option key={i} value ={legend.metadata.name}> {legend.metadata.name} </option>
        )        
    });

    function updateLegendObject (event){
        legendsArray.forEach(legend => {
            if(legend.metadata.name === event){
                selectedObject = legend;
            }
        } 
    ); }
    
    return (
        <div>
            <select className='select-legend' id='legend' value={selectedLegendName} onChange = {onChangeLegend}>
                    {legendsList}
            </select>
            <StatTable legend={selectedLegendObject} stats = {selectedLegendObject.stats}/>
        </div>
    )
}

export default List
