let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    document.addEventListener('DOMContentLoaded', function () {
        updateCalendar(currentMonth, currentYear);
    });

    function updateCalendar(month, year) {
        const monthYearText = document.getElementById('month-year');
        const calendarBody = document.getElementById('calendar-body');

        monthYearText.textContent = ${getMonthName(month)} ${year};
        calendarBody.innerHTML = '';

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let dateCounter = 1;

        for (let i = 0; i < 5; i++) {
            let row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                let cell = document.createElement('td');

                if (i === 0 && j < firstDayOfMonth) {
                    // Previous month's days
                    cell.textContent = '';
                } else if (dateCounter > daysInMonth) {
                    // Next month's days
                    cell.textContent = '';
                } else {
                    // Current month's days
                    cell.textContent = dateCounter;
                    cell.addEventListener('click', function () {
                        // Handle booking logic here
                        alert(You clicked on ${getMonthName(month)} ${dateCounter}, ${year});
                    });
                    dateCounter++;
                }

                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }
    }

    function previousMonth() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar(currentMonth, currentYear);
    }

    function nextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar(currentMonth, currentYear);
    }

    function getMonthName(month) {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return monthNames[month];
    }
