Chart.defaults.global.defaultFontColor = 'black'; //глобально цвет шрифта
Chart.defaults.global.defaultFontFamily = "Lato"; // тип шрифта
Chart.defaults.global.defaultFontSize = 16; // глобально размер шрифта

// Первичный рынок жилья Иркутск
var ctx = document.getElementById('apartment');
var apartment = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [52190, 53540, 54860, 56120, 56580, 56740, 56250, 57340, 58620, 60120, 60290, 61720],
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
               min: 45000,
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


// Вторичный рынок жилья Иркутск
var ctx = document.getElementById('apartment2');
var apartment2 = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [59860, 60430, 61050, 61490, 62510, 62030, 62510, 62630, 63210, 63850, 64330, 65520],
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

// Гаражи железобетонный Иркутск
var ctx = document.getElementById('garage');
var garage = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [18650, 19990, 19050, 19310, 18610, 20140, 20230, 19670, 20070, 20150, 19590, 20450],
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
var ctx = document.getElementById('garage2');
var garage2 = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [15100, 15350, 14270, 15260, 15180, 16040, 16650, 17510, 17510, 17200, 17270, 18070],
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
var ctx = document.getElementById('earth');
var earth = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [330350, 338010, 328990, 286200, 293460, 291460, 288810, 316650, 318660, 258190, 235230, 206300],
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
               min: 150000,
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

// Земли промназначения Иркутск
var ctx = document.getElementById('earth2');
var earth2 = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [499230, 557880, 664850, 593880, 646350, 645490, 686440, 673560, 647410, 681460, 770800, 700060],
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
               min: 400000,
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

// Земли сельхозназначения Иркутск
var ctx = document.getElementById('earth3');
var earth3 = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [139420, 123250, 126590, 90240, 90320, 93980, 100400, 105490, 100950, 89650, 81550, 90610],
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
               min: 60000,
               stepSize: 20000,
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
var ctx = document.getElementById('house');
var house = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [36900, 37310, 38710, 36330, 34880, 36520, 37680, 36190, 36340, 36980, 37300, 36950],
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

// Дома брус Иркутск
var ctx = document.getElementById('house2');
var house2 = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [35600, 37150, 38170, 37200, 37240, 37170, 37270, 36910, 37480, 35040, 35760, 37860],
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

// Дома кирпич Иркутск
var ctx = document.getElementById('house3');
var house3 = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['11.18', '12.18', '01.19', '02.19', '03.19', '04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19'],
      datasets: [{
         label: 'Стоимость кв.м.',
         data: [42380, 43990, 42800, 43130, 43740, 45750, 44590, 43670, 46660, 50740, 51970, 52550],
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