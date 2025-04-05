import {Bar} from "react-chartjs-2"
import {Chart as ChartJs} from "chart.js/auto"

function BarChart({chartData}){

return(
    <div>
        <Bar data={chartData} /> 
    </div>
     
     )

}
export default BarChart