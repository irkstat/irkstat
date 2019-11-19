Chart.defaults.global.defaultFontColor = 'black'; //глобально цвет шрифта
Chart.defaults.global.defaultFontFamily = "Lato"; // тип шрифта
Chart.defaults.global.defaultFontSize = 15; // глобально размер шрифта

// Первичный рынок жилья Иркутск
var ctx = document.getElementById('irkutsk_apartment_primary_scale');
var irkutskApartmentPrimaryScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [52400, 51410,52190, 53540, 54860, 56120, 56580, 56740, 56250, 57340, 58620, 60120],
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
               min: 40000,
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


// Вторичный рынок жилья Иркутск
var ctx = document.getElementById('irkutsk_apartment_secondary_scale');
var irkutskApartmentSecondaryScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [59170, 59040, 59860, 60430, 61050, 61490, 62510, 62030, 62510, 62630, 63210, 63850],
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
               min: 40000,
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

// Гаражи железобетонный Иркутск
var ctx = document.getElementById('irkutsk_garage_ferroconcrete_scale');
var irkutskGarageFerroconcreteScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [18900, 18440, 18650, 19990, 19050, 19310, 18610, 20140, 20230, 19670, 20070, 20150],
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

// Гаражи кирпич Иркутск
var ctx = document.getElementById('irkutsk_garage_brick_scale');
var irkutskGarageBrickScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [15190, 14310, 15100, 15350, 14270, 15260, 15180, 16040, 16650, 17510, 17510, 17200],
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
               min: 10000,
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

// Земли поселений Иркутск
var ctx = document.getElementById('irkutsk_earth_settlements_scale');
var irkutskEarthSettlementsScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоим. сотки',
         data: [287050, 293850, 330350, 338010, 328990, 286200, 293460, 291460, 288810, 316650, 318660, 258190],
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
               min: 100000,
               stepSize: 100000,
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

// Земли промназначения Иркутск
var ctx = document.getElementById('irkutsk_earth_industrial_scale');
var irkutskEarthIndustrialScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоим. сотки',
         data: [543590, 513770, 499230, 557880, 664850, 593880, 646350, 645490, 686440, 673560, 647410, 681460],
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
               min: 200000,
               stepSize: 200000,
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

// Земли сельхозназначения Иркутск
var ctx = document.getElementById('irkutsk_earth_agricultural_scale');
var irkutskEarthAgriculturalScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18','11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоим. сотки',
         data: [114480, 128140, 139420, 123250, 126590, 90240, 90320, 93980, 100400, 105490, 100950, 89650],
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

// Дома блоки Иркутск
var ctx = document.getElementById('irkutsk_house_block_scale');
var irkutskHouseBlockScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [36520, 37040, 36900, 37310, 38710, 36330, 34880, 36520, 37680, 36190, 36340, 36980],
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

// Дома брус Иркутск
var ctx = document.getElementById('irkutsk_house_timber_scale');
var irkutskHouseTimberScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [36540, 37490, 35600, 37150, 38170, 37200, 37240, 37170, 37270, 36910, 37480, 35040],
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

// Дома кирпич Иркутск
var ctx = document.getElementById('irkutsk_house_brick_scale');
var irkutskHouseBrickScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [42130, 43560, 42380, 43990, 42800, 43130, 43740, 45750, 44590, 43670, 46660, 50740],
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
               min: 30000,
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