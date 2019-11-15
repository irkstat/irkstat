Chart.defaults.global.defaultFontColor = 'black'; //глобально цвет шрифта
Chart.defaults.global.defaultFontFamily = "Lato"; // тип шрифта
Chart.defaults.global.defaultFontSize = 16; // глобально размер шрифта


// Вторичный рынок жилья Усолье-Сибирское
var ctx = document.getElementById('usolye_apartment_secondary_scale');
var usolyeApartmentSecondaryScale = new Chart(ctx, {
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
var ctx = document.getElementById('usolye_garage_ferroconcrete_scale');
var usolyeGarageFerroconcreteScale = new Chart(ctx, {
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
var ctx = document.getElementById('usolye_garage_brick_scale');
var usolyeGarageBrickScale = new Chart(ctx, {
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
var ctx = document.getElementById('usolye_earth_settlements_scale');
var usolyeEarthSettlementsScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['07.19', '08.19', '09.19', '10.19','11.19','12.19','01.20','02.20'],
      datasets: [{
         label: 'Стоим. сотки',
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
var ctx = document.getElementById('usolye_earth_industrial_scale');
var usolyeEarthIndustrialScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['07.19', '08.19', '09.19', '10.19','11.19','12.19','01.20','02.20'],
      datasets: [{
         label: 'Стоим. сотки',
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
var ctx = document.getElementById('usolye_earth_agricultural_scale');
var usolyeEarthAgriculturalScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['07.19', '08.19', '09.19', '10.19','11.19','12.19','01.20','02.20'],
      datasets: [{
         label: 'Стоим. сотки',
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
var ctx = document.getElementById('usolye_house_block_scale');
var usolyeHouseBlockScale = new Chart(ctx, {
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
var ctx = document.getElementById('usolye_house_timber_scale');
var usolyeHouseTimberScale = new Chart(ctx, {
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
var ctx = document.getElementById('usolye_house_brick_scale');
var usolyeHouseBrickScale = new Chart(ctx, {
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