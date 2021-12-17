import React from 'react'

function StatTable({legend, stats}) {
   let i = 0;
   let legendStats = Object.entries(stats).map(([key, value]) => {
       //console.log(value.displayName + ": " + value.displayValue)
       i += 1; 
       return (
            <div key={i}>
               <h5 style ={{color: 'white'}}>{value.displayName}</h5>
               <h6 style ={{color: 'white'}}>{value.displayValue}</h6>
            </div>
        )
        
    }
   );

    return (
        <div className="legend-stat-container">
            <div className='legend-img'>
                <h2 style ={{color: 'white'}} > {legend.metadata.name} </h2>
                <img width = '200px' src={legend.metadata.imageUrl} alt=""/>
            </div>
            <div className='legend-stats'>
                {legendStats} 
            </div>  
        </div>
       
    )
}

export default StatTable
