function formatDuration(seconds) {
    if (seconds === 0) {
        return `now`
    }
    const time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 }
    let arr = [];
    let year = 0;
    let myDay = 0;
    let hour = 0;
    let minute = 0;
    let second = 0;
    let res = ``;
    for (let key in time) {
        if (seconds >= time[key]) {
            arr.push({ [key]: time[key] })
        }
    }
    if (arr[0].year) {
        console.log('year')
        year = Math.floor(seconds / arr[0].year)
        day = Math.floor((seconds - (year * arr[0].year)) / arr[1].day)
        hour = Math.floor((seconds - ((day * arr[1].day) + (year * arr[0].year))) / arr[2].hour)
        minute = Math.floor((seconds - ((year * arr[0].year) + (day * arr[1].day) + (hour * arr[2].hour))) / arr[3].minute)
        second = Math.floor((seconds - ((year * arr[0].year) + (day * arr[1].day) + (hour * arr[2].hour) + (minute * arr[3].minute))) / arr[4].second)
        if (year === 1) {
            res = `${year} year`
        }
        else {
            res = `${year} years`
        }
        if (day !== 0) {
            if (day < 2) {
                res += `, ${day} day`
            }
            else {
                res += `, ${day} days`
            }
        }
        if (hour !== 0) {
            if (hour < 2) {
                res += `, ${hour} hour`
            }
            else {
                res += `, ${hour} hours`
            }
        }
        if (minute !== 0) {
            if (second === 0) {
                if (minute < 2) {
                    res += ` and ${minute} minute`
                }
                else {
                    res += ` and ${minute} minutes`
                }
            }
            else {
                if (minute < 2) {
                    res += `, ${minute} minute`
                }
                else {
                    res += `, ${minute} minutes`
                }
            }

        }
        if (second !== 0) {
            if (second < 2) {
                res += ` and ${second} second`
            }
            else {
                res += ` and ${second} seconds`
            }
        }
        return res
    }
    if (arr[0].hour) {
        hour = Math.floor(seconds / arr[0].hour)
        minute = Math.floor((seconds - (hour * arr[0].hour)) / 60)
        second = seconds - ((minute * 60) + (hour * 3600))

        if (hour === 1) {
            res = `${hour} hour`
        }
        else {
            res = `${hour} hous`
        }
        if (minute !== 0) {
            if (minute < 2) {
                res += `, ${minute} minute`
            }
            else {
                res += `, ${minute} minutes`
            }

        }
        if (second && second !== 0) {
            if (second < 2) {
                res += ` and ${second} second`
            }
            else {
                res += ` and ${second} seconds`
            }
        }
        return res
    }
    if (arr[0].day) {

        myDay = Math.floor(seconds / arr[0].day)
        hour = Math.floor((seconds - (myDay * arr[0].day)) / arr[1].hour)
        minute = Math.floor((seconds - ((hour * arr[1].hour) + (myDay * arr[0].day))) / 60)
        second = Math.floor(seconds - ((hour * arr[1].hour) + (myDay * arr[0].day) + (minute * arr[2].minute)))
        if (myDay === 1) {
            res = `${myDay} day`
        }
        else {
            res = `${myDay} days`
        }
        if (hour !== 0) {
            if (hour === 1) {
                res += `, ${hour} hour`
            }
            else {
                res += `, ${hour} hours`
            }
        }
        if (minute !== 0) {
            if (second === 0) {
                if (minute < 2) {
                    res += ` and ${minute} minute`
                }
                else {
                    res += ` and ${minute} minutes`
                }
            }
            else {
                if (minute < 2) {
                    res += `, ${minute} minute`
                }
                else {
                    res += `, ${minute} minutes`
                }
            }
        }
        if (second !== 0) {
            if (second === 1) {
                res += ` and ${second} second`
            }
            else {
                res += ` and ${second} seconds`
            }

        }
        return res
    }
    if (arr[0].minute) {
        console.log('minute')
        minute = Math.floor(seconds / arr[0].minute)
        second = seconds - (minute * 60)
        console.log(second)
        if (minute === 1) {
            res = `${minute} minute`
        }
        else {
            res = `${minute} minutes`
        }
        if (second && second !== 0) {
            if (second === 1) {
                res += ` and ${second} second`
            }
            else {
                res += ` and ${second} seconds`
            }
        }
        return res
    }
    if (arr[0].second) {
        if (seconds < 2) {
            res = `${seconds} second`
        }
        else {
            res = `${seconds} seconds`
        }
        return res
    }
}
formatDuration(1)