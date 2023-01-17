import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, 
HiloSeries, Category, Tooltip, Zoom, Crosshair,DateTime, Logarithmic } from '@syncfusion/ej2-react-charts';

import { financialChartData, FinancialPrimaryYAxis, FinancialPrimaryXAxis } from '../../data/dummy'

import { Header } from '../../components'
import { useStateContext } from '../../contexts/ContextProvider';

const date1 = new Date('2017, 1, 1');

// eslint-disable-next-line consistent-return
function filterValue(value) {
  if (value.x >= date1) {
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const {currentMode}= useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Financial' title='AAPLE Historical'/>
      <ChartComponent 
      id='charts' 
      primaryXAxis={FinancialPrimaryXAxis} 
      primaryYAxis={FinancialPrimaryYAxis} 
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true, shared: true }}
      crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }} 
      background={currentMode==='Dark' ?
      '#33373E': '#fff'}
      >
          <Inject services={[HiloSeries, DateTime, Logarithmic,Tooltip, Category, Crosshair, Zoom]}/>
          <SeriesCollectionDirective>
            <SeriesDirective 
            dataSource={returnValue} 
            xName='x' 
            yName='low' 
            name='Apple Inc.' 
            type='Hilo' 
            low='low' 
            high='high'>
            </SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>;  
    </div>
    )
}

export default Financial