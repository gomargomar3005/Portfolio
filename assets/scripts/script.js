// HIGHCHARTS

Highcharts.chart('skills-chart', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: '',
        align: 'center'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}%'
    },
    plotOptions: {
        packedbubble: {
            minSize: '30%',
            maxSize: '120%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.01
            },
            dataLabels: {

                enabled: true,
                format: '{point.name}',
                allowOverlap: true, 
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal',
                    textOverflow: 'none',
                },
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 100
                }
            }
        }
    },
    series: [{
        name: 'Front-End',
        color: "#86E831",
        data: [{
            name: 'HTML5',
            value: 80
        }, {
            name: 'CSS3',
            value: 80
        },
        {
            name: 'XML',
            value: 70
        },
        {
            name: 'Angular',
            value: 50
        },
        {
            name: 'jQuery',
            value: 60
        },
        {
            name: 'Javascript',
            value: 60
        },
        {
            name: 'AJAX',
            value: 50
        }],
    },

    {
        name: 'Back-End',
        color: "#E1CCCC",
        data: [{
            name: 'PHP',
            value: 70
        }, {
            name: 'Symfony',
            value: 60
        },
        {
            name: 'C#',
            value: 40
        },
        {
            name: 'Python',
            value: 50
        }],

    },

    {
        name: 'Graphic Design',
        color: "#F559F5",
        data: [{
            name: 'Illustrator',
            value: 100
        }, {
            name: 'Photoshop',
            value: 100
        },
        {
            name: 'Indesign',
            value: 90
        },
        {
            name: 'CorelDraw',
            value: 100
        },
        {
            name: 'Premiere Pro',
            value: 90
        }, {
            name: 'After Effect',
            value: 75
        }, {
            name: 'Audition',
            value: 70
        },
        {
            name: 'CCVision',
            value: 75
        }, {
            name: 'C4D',
            value: 40
        }],
    },

    {
        name: 'Project Management',
        color: "#534A51",
        data: [{
            name: 'Pack Office',
            value: 90
        }, {
            name: 'Toggl Track',
            value: 80
        },
        {
            name: 'Trello',
            value: 90
        },
        {
            name: 'GitHub',
            value: 60
        }]
    }]
})

// CURSOR

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px",
        cursor.style.top = e.clientY + "px";
});


// GALLERY SLIDER PORTFOLIO

document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const container = document.querySelector(".carousel-container");
    const items = document.querySelectorAll(".carousel-item");

    let currentIndex = 0;

    // Fonction pour mettre à jour l'affichage du carousel
    function updateCarousel() {
        container.style.transform = `translateX(-${currentIndex * 33.33}%)`;

        items.forEach((item, index) => {
            item.classList.remove("active");
            if (index === currentIndex + 1) {
                item.classList.add("active");
            }
        });

        items[currentIndex + 1].querySelector("img").style.transform = "scale(1.2)";
    }

    // Gestionnaire d'événement pour le bouton précédent
    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    // Gestionnaire d'événement pour le bouton suivant
    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    // Mise à jour initiale du carousel
    updateCarousel();
});


//TIMELINE BUBBLE SLIDER

let currentIndex = 0;
const bubbles = document.querySelector('.bubble-container');

function changeSlide(direction) {
    currentIndex += direction;
    const newTransformValue = `translateX(${-currentIndex * 100}%)`;
    bubbles.style.transform = newTransformValue;
}