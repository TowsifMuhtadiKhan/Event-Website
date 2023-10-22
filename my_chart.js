const ctx = document.getElementById('myChart1');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1-10', '11-20', '21-30', '31-40', '41-50', '51-60'],
    datasets: [{
      label: 'Person Count',
      data: [16, 0, 253, 315, 9, 8],
     
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  },
  options: {   
    scales: {
      y: {
        beginAtZero: true
      }
    },
    animation:{
      duration: 5000,
    }
  }
});

const ctx2 = document.getElementById('myChart2');
new Chart(ctx2, {
  type: 'polarArea',
  data: {
    labels: ['Total Guest', 'Registered Guest', 'Not Registered Guest', 'Male', 'Female'],
    datasets: [{
      label: 'Number is',
      data: [601, 71, 530, 277, 324],
      borderWidth: 1
    }]
  },
  options: {
    
    scales: {
      y: {
        beginAtZero: true
      }
    },
    animation:{
      duration: 5000,
    }
  }
});

//IN CAM

//Male Female Hourwise

var data = {
  labels: ['Male', 'Female'],
  datasets: [{
    label: 'Gender Count',
    data: [12, 35],
    backgroundColor: [
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 99, 132, 0.2)'
      ],
		
  }]
};

// Chart.js configuration
var config = {
  type: 'doughnut',
  data: data,
  options: {
    
  }
};

// Create the chart
var myChart1 = new Chart(document.getElementById('myChart3').getContext('2d'), config);

// Get the hour select element
var hourSelect1 = document.getElementById('hour_select');

// Add an event listener to the hour select element
hourSelect1.addEventListener('change', function() {
// Get the selected hour
var hour1 = hourSelect1.value;

// Update the chart data based on the selected hour
  switch (hour1) { 
    case '1':
      myChart1.data.datasets[0].data = [62, 79];
      break;
    case '2':
      myChart1.data.datasets[0].data = [65, 51];
      break;
    case '3':
      myChart1.data.datasets[0].data = [35, 10];
      break;
    case '4':
      myChart1.data.datasets[0].data = [74, 61];
      break;
    case '5':
      myChart1.data.datasets[0].data = [86, 58];
      break;
    case '6':
      myChart1.data.datasets[0].data = [70, 43];
      break;
    case '7':
      myChart1.data.datasets[0].data = [74, 68];
      break;
      
  }

  // Update the chart
  myChart1.update();
});
//bar Charrt 1 (Hourly Gender) 
var data = {
  'hour1': [3, 0, 47, 87, 2, 2],
  'hour2': [2, 0, 49, 64, 0, 1],
  'hour3': [1, 0, 17, 27, 0, 0],
  'hour4': [4, 0, 49, 75, 5, 2],
  'hour5': [6, 0, 46, 87, 3, 2],
  'hour6': [4, 0, 35, 68, 1, 5],
  'hour7': [3, 0, 58, 76, 1, 4]
};

var ctx3 = document.getElementById('myChart4').getContext('2d');
var chart1 = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ['1-10', '11-20', '21-30', '31-40', '41-50', '51-60'],
    datasets: [{
      label: 'Person Count',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1,
      data: data.hour1,
    }]
  },
  options: {
    
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Person Count by Age Group',
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

document.getElementById('hourSelect').addEventListener('change', function() {
  var selectedHour = this.value;
  chart1.data.datasets[0].data = data[selectedHour];
  chart1.update(); 
});

// OUT CAM

//Male Female Hourwise

var data = {
  labels: ['Male', 'Female'],
  datasets: [{
    label: 'Gender Count',
    data: [53, 84],
    backgroundColor: [
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 99, 132, 0.2)'
      ],
		
  }]
};

// Chart.js configuration
var config = {
  type: 'doughnut',
  data: data,
  options: {
    
  }
};

// Create the chart4
var myChart = new Chart(document.getElementById('myChart5').getContext('2d'), config);

// Get the hour select element
var hourSelect = document.getElementById('hour-select4');

// Add an event listener to the hour select element
hourSelect.addEventListener('change', function() {
// Get the selected hour
var hour = hourSelect.value;

// Update the chart data based on the selected hour
  switch (hour) {
    case '1':
      myChart.data.datasets[0].data = [53, 84];
      break;
    case '2':
      myChart.data.datasets[0].data = [69, 80];
      break;
    case '3':
      myChart.data.datasets[0].data = [28, 23];
      break;
    case '4':
      myChart.data.datasets[0].data = [78, 71];
      break;
    case '5':
      myChart.data.datasets[0].data = [80, 101];
      break;
    case '6':
      myChart.data.datasets[0].data = [100, 72];
      break;
    case '7':
      myChart.data.datasets[0].data = [72, 82];
      break;
       
  }

  // Update the chart
  myChart.update();
});
//bar Charrt 1 (Hourly Gender) 
var data = {
  'hour1': [1, 0, 66, 69, 0, 1],
  'hour2': [2, 0, 65, 81, 1, 0],
  'hour3': [1, 0, 22, 27, 0, 1],
  'hour4': [5, 0, 66, 73, 3, 2],
  'hour5': [3, 0, 80, 91, 2, 5],
  'hour6': [8, 0, 58, 99, 2, 5],
  'hour7': [5, 0, 60, 83, 1, 5]
};

var ctx5 = document.getElementById('myChart6').getContext('2d');
var chart = new Chart(ctx5, {
  type: 'bar',
  data: {
    labels: ['1-10', '11-20', '21-30', '31-40', '41-50', '51-60'],
    datasets: [{
      label: 'Person Count',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1,
      data: data.hour1,
    }]
  },
  options: {
    responsive: true,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Person Count by Age Group',
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

document.getElementById('hourSelect5').addEventListener('change', function() {
  var selectedHour = this.value;
  chart.data.datasets[0].data = data[selectedHour];
  chart.update();
});