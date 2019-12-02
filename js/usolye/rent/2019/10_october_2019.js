Chart.defaults.global.defaultFontColor = 'black'; //глобально цвет шрифта
Chart.defaults.global.defaultFontFamily = "Lato"; // тип шрифта
Chart.defaults.global.defaultFontSize = 16; // глобально размер шрифта

// Аренда помесячно Усолье-Сибирское
var ctx = document.getElementById('apartment_rent_month').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [ '07.19', '08.19', '09.19', '10.19'],
        datasets: [
           //Однокомнатные
         {
            label: '1-ком.',
            backgroundColor: 'rgba(163,179,221,0.4)',
            borderColor: 'gray',
            data: [ 6900, 7460, 7440, 7550],
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
            data: [ 8650, 9020, 8960, 8410],
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
            data: [ 10060, 9500, 10750, 9250],
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
               min: 6000, // минимальное значение шкалы
               stepSize: 2000 //шаг горизонтальной сетки
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

// Аренда посуточно Усолье-Сибирское
var ctx = document.getElementById('apartment_rent_day').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [ '07.19', '08.19', '09.19', '10.19'],
        datasets: [
           //Однокомнатные
         {
            label: '1-ком.',
            backgroundColor: 'rgba(163,179,221,0.4)',
            borderColor: 'gray',
            data: [ 1070, 1020, 1060, 1070],
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
            data: [ 1240, 1260, 1190, 1240],
            pointBorderColor: '#282828',
            pointBackgroundColor: '#FFDAB9',
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
               stepSize: 400 //шаг горизонтальной сетки
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