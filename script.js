
function yearCheck() {
    let mYyear = document.getElementById('year-input').value;
    let check = leapYearCheck(mYyear);
    function leapYearCheck(year) {
        first = year % 400;
        second = year % 4;
        third = year % 100;
        if (year <= 0) {
            return "Please enter a valid year to check"
        }
        else if (first == 0 && second == 0 && third == 0) {
            return "Leap Year";
        }
        else if ((first == 0 || second == 0) && third != 0) {
            return "Leap Year";
        }
        return "Normal Year";
    }
    return document.getElementById('answer').innerHTML = check;
}
