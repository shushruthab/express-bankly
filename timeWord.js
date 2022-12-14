const hours = {
    0: "twelve",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve"
}

const noonMid = {
    "00:00": "midnight",
    "12:00": "noon"
}

const numminutes = {
    0: "oh",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
}

const aboveTwenties = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty"
}

const timeWord = (inpt) => {
    debugger;
    if (inpt === "00:00" || inpt === "12:00") {
        return noonMid[inpt];
    }

    inpt = inpt.split(":");
    let hrs = Number(inpt[0]);
    let minutes = inpt[1].split("");
    let minutesFirst = Number(minutes[0]);
    let minutesSecond;
    if (Number(minutes[1])) {
        minutesSecond = Number(minutes[1]);
    }
    
    let otpt = [];

    // converting minutes to words
    if (minutesFirst > 1 && minutesSecond) {
        otpt.push(aboveTwenties[minutesFirst]);
        otpt.push(numminutes[minutesSecond]);
    } else if (minutesFirst === 1) {
        otpt.push(numminutes[Number(minutes[0] + minutes[1])]);
    } else if (minutesFirst > 1) {
        otpt.push(aboveTwenties[minutesFirst]);
    } else if (minutesSecond) {
        otpt.push(numminutes[minutesFirst])
        otpt.push(numminutes[minutesSecond]);
    } 

    // converting hours to words
    if (hrs < 12) {
        otpt.unshift(hours[hrs]);
        otpt.push("am");
    } else {
        if (hrs !== 12) {
            hrs = hrs - 12;
            otpt.unshift(hours[hrs]);
            otpt.push("pm");
        } else {
            otpt.unshift(hours[hrs]);
            otpt.push("pm");
        }
        
    }

    return otpt.join(" ");

}

module.exports = timeWord;