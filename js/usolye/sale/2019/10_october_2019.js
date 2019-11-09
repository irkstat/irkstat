Chart.defaults.global.defaultFontColor = 'black'; //глобально цвет шрифта
Chart.defaults.global.defaultFontFamily = "Lato"; // тип шрифта
Chart.defaults.global.defaultFontSize = 16; // глобально размер шрифта


// Вторичный рынок жилья Усолье-Сибирское
var ctx = document.getElementById('apartment2');
var apartment2 = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['07.19', '08.19', '09.19', '10.19','11.19','12.19','01.20','02.20'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [ 28480, 28750, 29180, 28890, , , ,],
         backgroundColor: 'gray',
         borderColor: '#293133',
         borderWidth: 1,
      }]
   },
   options: {
      //Управление легендой диаграммы
      legend: {
         display: true,
         position: 'bottom'
      },
      scales: {

         yAxes: [{
            ticks: {
               beginAtZero: false,
               min: 24000,
               stepSize: 2000,
            },
            gridLines: {
               color: "black",
               borderDash: [2, 5],
            },
         }],

         xAxes: [{
            gridLines: {
               display: false,
            },
         }]
      }
   }
});

// Гаражи железобетонный Усолье-Сибирское
var ctx = document.getElementById('garage');
var garage = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['07.19', '08.19', '09.19', '10.19','11.19','12.19','01.20','02.20'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [ 8980, 9180, 9290, 9710, , , ,],
         backgroundColor: 'gray',
         borderColor: '#293133',
         borderWidth: 1,
      }]
   },
   options: {
      //Управление легендой диаграммы
      legend: {
         display: true,
         position: 'bottom'
      },
      scales: {

         yAxes: [{
            ticks: {
               beginAtZero: false,
               min: 4000,
               stepSize: 2000,
            },
            gridLines: {
               color: "black",
               borderDash: [2, 5],
            },
         }],

         xAxes: [{
            gridLines: {
               display: false,
            },
         }]
      }
   }
});

// Гаражи кирпич Усолье-Сибирское
var ctx = document.getElementById('garage2');
var garage2 = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['07.19', '08.19', '09.19', '10.19','11.19','12.19','01.20','02.20'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [ 8040, 7930, 6420, 8470, , , ,],
         backgroundColor: '#ab7d5c',
         borderColor: '#293133',
         borderWidth: 1,
      }]
   },
   options: {
      //Управление легендой диаграммы
      legend: {
         display: true,
         position: 'bottom'
      },
      scales: {

         yAxes: [{
            ticks: {
               beginAtZero: false,
               min: 4000,
               stepSize: 2000,
            },
            gridLines: {
               color: "black",
               borderDash: [2, 5],
            },
         }],

         xAxes: [{
            gridLines: {
               display: false,
            },
         }]
      }
   }
});

// Земли поселений Усолье-Сибирское
var ctx = document.getElementById('earth');
var earth = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['07.19', '08.19', '09.19', '10.19','11.19','12.19','01.20','02.20'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [ 33870, 39250, 43840, 45680, , , ,],
         backgroundColor: 'gray',
         borderColor: '#293133',
         borderWidth: 1,
      }]
   },
   options: {
      //Управление легендой диаграммы
      legend: {
         display: true,
         position: 'bottom'
      },
      scales: {

         yAxes: [{
            ticks: {
               beginAtZero: false,
               min: 20000,
               stepSize: 10000,
            },
            gridLines: {
               color: "black",
               borderDash: [2, 5],
            },
         }],

         xAxes: [{
            gridLines: {
               display: false,
            },
         }]
      }
   }
});

// Земли промназначения Усолье-Сибирское
var ctx = document.getElementById('earth2');
var earth2 = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['07.19', '08.19', '09.19', '10.19','11.19','12.19','01.20','02.20'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [ 117690, 130080, 145360, 199190, , , ,],
         backgroundColor: '#ab7d5c',
         borderColor: '#293133',
         borderWidth: 1,
      }]
   },
   options: {
      //Управление легендой диаграммы
      legend: {
         display: true,
         position: 'bottom'
      },
      scales: {

         yAxes: [{
            ticks: {
               beginAtZero: false,
               min: 50000,
               stepSize: 50000,
            },
            gridLines: {
               color: "black",
               borderDash: [2, 5],
            },
         }],

         xAxes: [{
            gridLines: {
               display: false,
            },
         }]
      }
   }
});

// Земли сельхозназначения Усолье-Сибирское
var ctx = document.getElementById('earth3');
var earth3 = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['07.19', '08.19', '09.19', '10.19','11.19','12.19','01.20','02.20'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [ 15880, 17030, 17410, 17840, , , ,],
         backgroundColor: '#BAAF96',
         borderColor: '#293133',
         borderWidth: 1,
      }]
   },
   options: {
      //Управление легендой диаграммы
      legend: {
         display: true,
         position: 'bottom'
      },
      scales: {

         yAxes: [{
            ticks: {
               beginAtZero: false,
               min: 5000,
               stepSize: 5000,
            },
            gridLines: {
               color: "black",
               borderDash: [2, 5],
            },
         }],

         xAxes: [{
            gridLines: {
               display: false,
            },
         }]
      }
   }
});

// Дома блоки Усолье-Сибирское
var ctx = document.getElementById('house');
var house = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['07.19', '08.19', '09.19', '10.19','11.19','12.19','01.20','02.20'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [ 29380, 33550, 35710, 33710, , , ,],
         backgroundColor: 'gray',
         borderColor: '#293133',
         borderWidth: 1,
      }]
   },
   options: {
      //Управление легендой диаграммы
      legend: {
         display: true,
         position: 'bottom'
      },
      scales: {

         yAxes: [{
            ticks: {
               beginAtZero: false,
               min: 25000,
               stepSize: 5000,
            },
            gridLines: {
               color: "black",
               borderDash: [2, 5],
            },
         }],

         xAxes: [{
            gridLines: {
               display: false,
            },
         }]
      }
   }
});

// Дома брус Усолье-Сибирское
var ctx = document.getElementById('house2');
var house2 = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['07.19', '08.19', '09.19', '10.19','11.19','12.19','01.20','02.20'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [ 23320, 25540, 27390, 26750, , , ,],
         backgroundColor: '#ab7d5c',
         borderColor: '#293133',
         borderWidth: 1,
      }]
   },
   options: {
      //Управление легендой диаграммы
      legend: {
         display: true,
         position: 'bottom'
      },
      scales: {

         yAxes: [{
            ticks: {
               beginAtZero: false,
               min: 15000,
               stepSize: 5000,
            },
            gridLines: {
               color: "black",
               borderDash: [2, 5],
            },
         }],

         xAxes: [{
            gridLines: {
               display: false,
            },
         }]
      }
   }
});

// Дома кирпич Усолье-Сибирское
var ctx = document.getElementById('house3');
var house3 = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['07.19', '08.19', '09.19', '10.19','11.19','12.19','01.20','02.20'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [ 30580, 29840, 30950, 29200, , , ,],
         backgroundColor: '#BAAF96',
         borderColor: '#293133',
         borderWidth: 1,
      }]
   },
   options: {
      //Управление легендой диаграммы
      legend: {
         display: true,
         position: 'bottom'
      },
      scales: {

         yAxes: [{
            ticks: {
               beginAtZero: false,
               min: 20000,
               stepSize: 5000,
            },
            gridLines: {
               color: "black",
               borderDash: [2, 5],
            },
         }],

         xAxes: [{
            gridLines: {
               display: false,
            },
         }]
      }
   }
});