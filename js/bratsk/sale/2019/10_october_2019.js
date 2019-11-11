Chart.defaults.global.defaultFontColor = 'black'; //глобально цвет шрифта
Chart.defaults.global.defaultFontFamily = "Lato"; // тип шрифта
Chart.defaults.global.defaultFontSize = 16; // глобально размер шрифта

// Первичный рынок жилья Братск
var ctx = document.getElementById('bratsk_apartment_primary_scale');
var bratskApartmentPrimaryScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [33530, 34730, 36760, 35760, 36460, 36590, 37400, 38620, 39100, 37950, 38260, 36610],
         backgroundColor: 'gray',
         borderColor: '#293133',
         borderWidth: 1,
      }]
   },
   options: {
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


// Вторичный рынок жилья Братск
var ctx = document.getElementById('bratsk_apartment_secondary_scale');
var bratskApartmentSecondaryScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [36160, 37040, 36980, 37850, 38310, 38700, 38670, 39390, 39590, 40330, 41440, 42480],
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
               min: 30000,
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

// Гаражи железобетонный Братск
var ctx = document.getElementById('bratsk_garage_ferroconcrete_scale');
var bratskGarageFerroconcreteScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [8050, 8140, 8330, 7900, 8800, 8070, 8040, 8210, 7880, 8760, 8570, 8610],
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

// Гаражи кирпич Братск
var ctx = document.getElementById('bratsk_garage_brick_scale');
var bratskGarageBrickScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [8490, 9120, 8050, 9020, 8100, 9130, 8420, 8150, 8090, 8270, 8310, 8680],
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

// Земли поселений Братск
var ctx = document.getElementById('bratsk_earth_settlements_scale');
var bratskEarthSettlementsScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [43970, 42690, 34370, 25870, 35200, 35160, 31280, 35430, 34180, 37880, 39410, 34040],
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

// Земли промназначения Братск
var ctx = document.getElementById('bratsk_earth_industrial_scale');
var bratskEarthIndustrialScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [110380, 112150, 94090, 79970, 70740, 102060, 91820, 99450, 76930, 84390, 82360, 74600],
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
               min: 00000,
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

// Земли сельхозназначения Братск
var ctx = document.getElementById('bratsk_earth_agricultural_scale');
var bratskEarthAgriculturalScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [13970, 11050, 11120, 9600, 10440, 12000, 8420, 9640, 9330, 9730, 10420, 10770],
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
               min: 0000,
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

// Дома блоки Братск
var ctx = document.getElementById('bratsk_house_block_scale');
var bratskHouseBlockScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [31420, 31420, 25000, 21960, 18100, 20380, 28330, 22980, 23410, 26400, 29730, 28940],
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
               min: 10000,
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

// Дома брус Братск
var ctx = document.getElementById('bratsk_house_timber_scale');
var bratskHouseTimberScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [22280, 20210, 21550, 22400, 21490, 23450, 23820, 24620, 24110, 24730, 25160, 25940],
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

// Дома кирпич Братск
var ctx = document.getElementById('bratsk_house_brick_scale');
var bratskHouseBrickScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [28820, 26200, 25530, 25500, 26900, 25550, 24760, 25830, 28030, 26930, 25810, 27070],
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