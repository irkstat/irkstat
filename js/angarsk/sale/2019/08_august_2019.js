Chart.defaults.global.defaultFontColor = 'black'; //глобально цвет шрифта
Chart.defaults.global.defaultFontFamily = "Lato"; // тип шрифта
Chart.defaults.global.defaultFontSize = 16; // глобально размер шрифта

// Первичный рынок жилья Ангарск
var ctx = document.getElementById('angarsk_apartment_primary_scale');
var angarskApartmentPrimaryScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [40840, 48040, 47780, 42450, 48860, 48630, 45400, 44880, 46230, 51020, 45600, 46420],
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
               min: 35000,
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


// Вторичный рынок жилья Ангарск
var ctx = document.getElementById('angarsk_apartment_secondary_scale');
var angarskApartmentSecondaryScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [40710, 41020, 40740, 40740, 41300, 42260, 41850, 41880, 41710, 41820, 41880, 41870],
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
               min: 38000,
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

// Гаражи железобетонный Ангарск
var ctx = document.getElementById('angarsk_garage_ferroconcrete_scale');
var angarskGarageFerroconcreteScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [13070, 12710, 12060, 11990, 11610, 12020, 11830, 13250, 14490, 14500, 14880, 14030],
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

// Гаражи кирпич Ангарск
var ctx = document.getElementById('angarsk_garage_brick_scale');
var angarskGarageBrickScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [13630, 14280, 14170, 12300, 13750, 13390, 13910, 14680, 15330, 14920, 14990, 14210],
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

// Земли поселений Ангарск
var ctx = document.getElementById('angarsk_earth_settlements_scale');
var angarskEarthSettlementsScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18','11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоим. сотки',
         data: [40650, 40470, 38220, 46590, 41310, 47910, 40080, 44910, 51140, 57330, 63670, 60760],
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

// Земли промназначения Ангарск
var ctx = document.getElementById('angarsk_earth_industrial_scale');
var angarskEarthIndustrialScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоим. сотки',
         data: [116950, 68380, 66880, 94010, 124380, 95690, 83520, 81900, 99070, 69420, 57780, 62850],
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

// Земли сельхозназначения Ангарск
var ctx = document.getElementById('angarsk_earth_agricultural_scale');
var angarskEarthAgriculturalScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоим. сотки',
         data: [22980, 28290, 27550, 24640, 26510, 21890, 25170, 29470, 30600, 28420, 32090, 30600],
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

// Дома блоки Ангарск
var ctx = document.getElementById('angarsk_house_block_scale');
var angarskHouseBlockScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [30180, 29730, 29390, 28650, 30440, 30780, 29470, 30660, 31060, 31140, 32840, 32010],
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

// Дома брус Ангарск
var ctx = document.getElementById('angarsk_house_timber_scale');
var angarskHouseTimberScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [25830, 25100, 26650, 27360, 25290, 24700, 26420, 26950, 27120, 27980, 27600, 28250],
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

// Дома кирпич Ангарск
var ctx = document.getElementById('angarsk_house_brick_scale');
var angarskHouseBrickScale = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [34170, 27680, 33980, 38230, 37400, 32180, 30610, 38970, 38020, 37370, 36800, 36900],
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