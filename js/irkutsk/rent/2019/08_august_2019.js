Chart.defaults.global.defaultFontColor = 'black'; //глобально цвет шрифта
Chart.defaults.global.defaultFontFamily = "Lato"; // тип шрифта
Chart.defaults.global.defaultFontSize = 16; // глобально размер шрифта

// Аренда помесячно Иркутск
var ctx = document.getElementById('apartment_rent_month').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19','04.19', '05.19', '06.19', '07.19', '08.19'],
        datasets: [
           //Однокомнатные
         {
            label: '1-ком.',
            backgroundColor: 'rgba(163,179,221,0.4)',
            borderColor: 'gray',
            data: [14340, 14640, 14640, 14950, 15010, 14900, 14840, 14520, 14920, 14780, 15030, 15120],
            pointBorderColor: '#282828',
            pointBackgroundColor: '#F5F5F5',
            pointRadius: 5,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 1,
            pointStyle: 'circle',
            borderWidth: 1,
        },
        //Двухкомнатные
         {
            label: '2-ком.',
            backgroundColor: 'rgba(246,182,156,0.3)',
            borderColor: '#FF5349',
            data: [19570, 19870, 18880, 19090, 18680, 19020, 18560, 18390, 18410, 18740, 18340, 19630],
            pointBorderColor: '#282828',
            pointBackgroundColor: '#FFDAB9',
            pointRadius: 5,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 1,
            pointStyle: 'circle',
            borderWidth: 1,
            
        },
        //Трехкомнатные
           {
            label: '3-ком.',
            backgroundColor: 'rgba(255,255,153,0.2)',
            borderColor: '#FFD800',
            data: [25000, 26220, 26150, 26070, 27230, 28180, 24820, 25820, 26820, 30110, 28110, 27670],
            pointBorderColor: '#282828',
            pointBackgroundColor: '#FFFF66',
            pointRadius: 5,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 1,
            pointStyle: 'circle',
            borderWidth: 1,
        },
      ]
    },

    options: {
      legend: {
         position: 'bottom',
      },
      scales: {

         yAxes: [{
            ticks: {
               beginAtZero: false,
               min: 10000, // минимальное значение шкалы
               stepSize: 10000 //шаг горизонтальной сетки
            },
            gridLines: {
               color: "gray",// цвет горизонтальных линий
               borderDash: [2, 7],
            },
         }],

         xAxes: [{
            gridLines: {
               color: "gray",
               borderDash: [2, 5],
            },
         }]
      },
      elements: {
         line: {
             tension: 0 // Отключение кривых Безье
         }
     }
    }
});

// Аренда посуточно Иркутск
var ctx = document.getElementById('apartment_rent_day').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['09.18', '10.18', '11.18', '12.18', '01.19', '02.19', '03.19','04.19', '05.19', '06.19', '07.19', '08.19'],
        datasets: [
           //Однокомнатные
         {
            label: '1-ком.',
            backgroundColor: 'rgba(163,179,221,0.4)',
            borderColor: 'gray',
            data: [1320, 1340, 1330, 1310, 1310, 1320, 1300, 1310, 1310, 1320, 1340, 1340],
            pointBorderColor: '#282828',
            pointBackgroundColor: '#F5F5F5',
            pointRadius: 5,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 1,
            pointStyle: 'circle',
            borderWidth: 1,
        },
        //Двухкомнатные
         {
            label: '2-ком.',
            backgroundColor: 'rgba(246,182,156,0.3)',
            borderColor: '#FF5349',
            data: [1780, 1820, 1800, 1800, 1780, 1780, 1780, 1790, 1770, 1820, 1810, 1870],
            pointBorderColor: '#282828',
            pointBackgroundColor: '#FFDAB9',
            pointRadius: 5,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 1,
            pointStyle: 'circle',
            borderWidth: 1,
            
        },
        //Трехкомнатные
           {
            label: '3-ком.',
            backgroundColor: 'rgba(255,255,153,0.2)',
            borderColor: '#FFD800',
            data: [2590, 2440, 2460, 2510, 2480, 2480, 2460, 2410, 2370, 2460, 2560, 2430],
            pointBorderColor: '#282828',
            pointBackgroundColor: '#FFFF66',
            pointRadius: 5,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 1,
            pointStyle: 'circle',
            borderWidth: 1,
        },
      ]
    },

    options: {
      legend: {
         position: 'bottom',
      },
      scales: {

         yAxes: [{
            ticks: {
               beginAtZero: false,
               min: 800, // минимальное значение шкалы
               stepSize: 800 //шаг горизонтальной сетки
            },
            gridLines: {
               color: "gray",// цвет горизонтальных линий
               borderDash: [2, 7],
            },
         }],

         xAxes: [{
            gridLines: {
               color: "gray",
               borderDash: [2, 5],
            },
         }]
      },
      elements: {
         line: {
             tension: 0 // Отключение кривых Безье
         }
     }
    }
});