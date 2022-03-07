function loadEvent () {
    let rootElement = document.getElementById("root");

    let data = ``;

    const months = [
        {
            monthName: `January`,
            dayCount: 31
        },
        {
            monthName: `February`,
            dayCount: 28
        },
        {
            monthName: `March`,
            dayCount: 31
        },
        {
            monthName: `April`,
            dayCount: 30
        },
        {
            monthName: `May`,
            dayCount: 31
        },
        {
            monthName: `June`,
            dayCount: 30
        },
        {
            monthName: `July`,
            dayCount: 31
        },
        {
            monthName: `August`,
            dayCount: 31
        },
        {
            monthName: `September`,
            dayCount: 30
        },
        {
            monthName: `October`,
            dayCount: 31
        },
        {
            monthName: `November`,
            dayCount: 30
        },
        {
            monthName: `December`,
            dayCount: 31
        }
    ]



    for (const month of months) {
        data += `
                <div class="card">
                    <div class='header'>
                        <time datetime="YYYY">2022</time>
                        <time datetime="MM">${month.monthName}</time><br>
                    </div>
                    <section id="${month.monthName}">
                `; 
                
        for (let i = 1; i <= month.dayCount; i++) {
            data += `<time datetime = "DD"><p>${i}</p></time>`;
        };

        data += `</section></div>`;
    }

    rootElement.insertAdjacentHTML("beforeend", data)
    const days = document.querySelectorAll('section time');

    for (const day of days) {
        day.addEventListener('click', event => { 
        if (day.className === '') {
            day.className = 'onclicked'
        } else {
            day.removeAttribute('class')
        }
        })
    }
}

window.addEventListener("load", loadEvent)



