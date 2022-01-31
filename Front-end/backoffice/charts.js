
// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart

window.addEventListener("load", function() {
  let north
  let lisbon
  let alentejo
  let algarve
  let center
  
  fetchByBreed();
//fetch of data for pie


async function fetchByBreed() {
try {
const result = fetch(`https://54d82a4bef854785886ab91f701b592a.vfs.cloud9.us-east-1.amazonaws.com/OccurrencesReadDailyCountProcess/`)
const response = await result
const jsonData = await response.json()
lisbon = jsonData[0].Lisboa;
north = jsonData[0].Norte;
alentejo = jsonData[0].Alentejo;
algarve = jsonData[0].Algarve;
center = jsonData[0].Centro;

createPieChart();

} catch (e) {
throw Error(e) } }

function createPieChart() {
//Construction
var ctx = document.getElementById("PieChart");
var PieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Norte", "Centro", "Alentejo", "Lisboa", "Algarve"],
    datasets: [{
      data: [north, center, alentejo, lisbon, algarve],
      backgroundColor: ['#6C7F9A', '#2E569E', '#3A4F7B', '#C8E5FF', '#3890D0'],
      hoverBackgroundColor: ['#698ABB', '#1A499E', '#254381', '#99CFFF', '#0D82D7'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
      
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 2,
      xPadding: 15,
      yPadding: 10,
      displayColors: true,
      caretPadding: 0,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 0,
  },
});

}
});


//Bar Chart
// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}
window.addEventListener("load", function() {
  
  let requestPendents
  let activeOccurrences
  let pendentsOccurrences
  let solvedOccurrences
  
  fetchRegions();
  
//fetch of data for pie
  async function fetchRegions() {
try {
const result = fetch(`https://54d82a4bef854785886ab91f701b592a.vfs.cloud9.us-east-1.amazonaws.com/OccurrencesReadCountProcess`)
const response = await result
const jsonData = await response.json()
activeOccurrences = jsonData[0].activeOccurrences;
requestPendents = jsonData[0].requestPendents;
pendentsOccurrences= jsonData[0].pendentsOccurrences;
solvedOccurrences = jsonData[0].solvedOccurrences;

createBarChart();

} catch (e) {
throw Error(e) } }

//construction bar chart
// Bar Chart Example
var ctx = document.getElementById("BarChart");
function createBarChart(){
var BarChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["Pedidos Pendentes", "Ocorrências Ativas", "Ocorrências Pendentes", "Ocorrências Resolvidas"],
    datasets: [{
      label: false,
      backgroundColor: "#3890D0",
      hoverBackgroundColor: "#006EBD",
      borderColor: "#1779C0",
      data: [requestPendents , activeOccurrences, pendentsOccurrences,solvedOccurrences],
    }],
  },
  options: {
    responsive: true,
    
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 10,
        right: 5,
        top: 25,
        bottom: 20
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          padding: 10,
          
        },
        time: {
          unit: 'number'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 600,
          maxTicksLimit: 5,
          padding: 10,
          
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: true,
          borderDash: [2],
          zeroLineBorderDash: [10]
        }
      }],
    },
    legend: {
      display: false
    },
  }
});
}
});




window.addEventListener("load", function() {
  
  let north
  let lisbon
  let alentejo
  let algarve
  let center
  
  fetchRegions();
  
//fetch of data for pie
  async function fetchRegions() {
try {
const result = fetch(`https://54d82a4bef854785886ab91f701b592a.vfs.cloud9.us-east-1.amazonaws.com/OccurrencesReadActiveRegioesCountProcess/`)
const response = await result
const jsonData = await response.json()
lisbon = jsonData[0].Lisboa;
north = jsonData[0].Norte;
alentejo = jsonData[0].Alentejo;
algarve = jsonData[0].Algarve;
center = jsonData[0].Centro;

createBarChart();

} catch (e) {
throw Error(e) } }

//construction bar chart


// Bar Chart Example
var ctx2 = document.getElementById("BarChart2");

function createBarChart(){
var BarChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Lisboa','Norte', 'Centro',  'Alentejo','Algarve'],
    datasets: [{
      label: "Situação por Regiões",
      backgroundColor: "#8CB0DB",
      hoverBackgroundColor: "#A7C1E1",
      borderColor: "#1779C0",
      data: [lisbon, north, center, alentejo, algarve],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 5,
        right: 0,
        top: 25,
        bottom: 0
      }
    },
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
},
         title:{
           display: true,
           position: 'top',
           text: 'Número De Ocorrências Ativas Por Região'
         },
         legend:{
           display: false,
         } ,
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 10,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 0,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});
}
})