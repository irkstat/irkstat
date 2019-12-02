Chart.defaults.global.defaultFontColor = 'black'; //глобально цвет шрифта
Chart.defaults.global.defaultFontFamily = "Lato"; // тип шрифта
Chart.defaults.global.defaultFontSize = 16; // глобально размер шрифта

// Аренда помесячно Братск
var ctx = document.getElementById('apartment_rent_month').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['12.18', '01.19', '02.19', '03.19','04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19', '11.19'],
        datasets: [
           //Однокомнатные
         {
            label: '1-ком.',
            backgroundColor: 'rgba(163,179,221,0.4)',
            borderColor: 'gray',
            data: [9260, 9770, 10150, 10270, 9720, 10590, 9840, 11570, 11600, 13930, 12920, 12730],
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
            data: [12630, 13130, 13640, 12150, 14580, 12940, 14440, 16950, 18900, 19130, 17230, 15820],
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
            data: [18470, 19040, 14270, 15080, 16920, 17330, 21210, 24730, 24940, 21700, 20610, 21210],
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
               min: 5000, // минимальное значение шкалы
               stepSize: 5000 //шаг горизонтальной сетки
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

// Аренда посуточно Братск
var ctx = document.getElementById('apartment_rent_day').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['12.18', '01.19', '02.19', '03.19','04.19', '05.19', '06.19', '07.19', '08.19', '09.19', '10.19', '11.19'],
        datasets: [
           //Однокомнатные
         {
            label: '1-ком.',
            backgroundColor: 'rgba(163,179,221,0.4)',
            borderColor: 'gray',
            data: [1150, 1170, 1120, 1200, 1170, 1230, 1290, 1280, 1300, 1300, 1320, 1260],
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
            data: [1470, 1500, 1520, 1520, 1560, 1730, 1720, 1920, 1830, 1760, 1710, 1700],
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
            data: [2090, 2010, 2020, 2160, 2160, 2090, 2260, 2280, 2250, 2080, 2090, 2210],
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