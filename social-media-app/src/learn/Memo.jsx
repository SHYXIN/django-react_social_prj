import React, { useMemo } from 'react';


function Component({ data }){
    // Use useMemo to memoize the expensive calculation
    const processedData = useMemo(()=>{
        // Do some expensive calculation with the data
        return expensiveCalculation(data);
    }, [data]);

    return (
        <div>
            {/* Use the processed data in the component */}
            <p>{processedData.message}</p>
        </div>
    )
}
