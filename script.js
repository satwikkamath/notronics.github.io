function reveal1() {
    let r1 = document.querySelectorAll(".reveal1");
    for (i = 0; i < r1.length; i++) {
        let wh = window.innerHeight;     /*wh= window height */
        let th = r1[i].getBoundingClientRect().top;   /*th= top height */
        let vh = 150;    /*view height  */
        if (th < wh - vh) {
            r1[i].classList.add("active1");
        }
        else {
            r1[i].classList.remove("active1");
        }
    }
}

function reveal2() {
    let r2 = document.querySelectorAll(".reveal2");
    for (i = 0; i < r2.length; i++) {
        let wh = window.innerHeight;
        let th = r2[i].getBoundingClientRect().top;
        let vh = 150;
        if (th < wh - vh) {
            r2[i].classList.add("active2");
        }
        else {
            r2[i].classList.remove("active2");
        }
    }
}


window.addEventListener("scroll", reveal1);
window.addEventListener("scroll", reveal2);


let i, j;
let credits = [3, 3, 3, 3, 3, 2, 1, 1, 1, 1];
let subjects = ["Transform Techniques and Linear Programming", "Data Structures Using C++", "Analog Electronics Circuits", "Network Analysis and Control Systems", "Digital Design with HDL", "Analog Electronics Lab", "Digital Design and HDL Lab", "Universal Human Values", "Kannada", "Ability Enhancement Course"]


document.getElementById("cgCalButton").addEventListener("click", function () {
    let marks = [];
    let allMarks;
    // let marks = document.querySelectorAll(".gpaCalMarks").value;
    let range = 0;
    allMarks = document.querySelectorAll('.gpaCalMarks');
    allMarks.forEach(element => {
        if (element.value < 0 || element.value > 100 || element.value == "")
            range = 1;
    });
    if (range == 1)
        alert("Please Enter the value in the indicated range.");
    else {
        for (i = 0; i < allMarks.length - 1;) {
            marks.push([parseInt(allMarks[i].value), parseInt(allMarks[i + 1].value)]);

            i = i + 2;
        }

        // console.log(sgpa());
        // console.log(marks);
        // console.log(grades);


        function sgpa() {
            grades = []
            for (i = 0; i < marks.length; i++) {
                if (i < 6) {
                    g = getgrade(marks[i], 1)
                }
                else {
                    g = getgrade(marks[i], 0)
                }
                if (g[0] == 'F') {
                    grades.push(['F', 0])
                }
                else {
                    grades.push(g)
                }

            }

            f = credits.map(function (value, index) {
                return value * grades[index][1]
            })
            return (sum(f) / sum(credits))
        }

        function sum(array) {
            s = 0
            for (i = 0; i < array.length; i++) {
                s += array[i]
            }
            return s
        }

        function getgrade(a, type) {

            if (a[0] >= 0 || a[1] >= 0) {
                var g = null
                if (type == 0) {
                    final_marks = a[0] + a[1]
                }
                else {
                    var final_marks = a[0] + Math.round(a[1] / 2)
                }
                if (a[0] < 20 || a[1] < 35) {
                    g = 'F'; gp = 0;
                }
                else
                    if (final_marks >= 90) {
                        g = 'O'; gp = 10;
                    }
                    else if (80 <= final_marks) {
                        g = 'A+'; gp = 9;
                    }
                    else if (70 <= final_marks) {
                        g = 'A'; gp = 8;
                    }
                    else if (60 <= final_marks) {
                        g = 'B+'; gp = 7;
                    }
                    else if (55 <= final_marks) {
                        g = 'B'; gp = 6;
                    }
                    else if (50 <= final_marks) {
                        g = 'C'; gp = 5;
                    }
                    else if (40 <= final_marks) {
                        g = 'P'; gp = 4;
                    }
                    else if (0 <= final_marks < 40) {
                        g = 'F'; gp = 0;
                    }
                console.log(final_marks)
            }
            else {
                g = 'Entered marks is invaid'; gp = None;

            }
            return [g, gp]
        }
        let gpa = sgpa().toFixed(3);

        let gpaResultString = `  <thead>
        <tr>
          
          <th scope="col">Subject</th>
          <th scope="col">Grade</th>
          <th scope="col">Grade Point</th>
        </tr>
      </thead>`

        for (i = 0; i < marks.length; i++) {
            gpaResultString += `<tr>
            <th scope="row"><strong>${subjects[i]}</strong></th>
            <td>${grades[i][0]}</td>
            <td>${grades[i][1]}</td>
            </tr>`
        }


        let gpaResult = document.getElementById("gpaResult");
        let res = document.getElementById("result");
        gpaResult.innerHTML = gpaResultString;
        res.innerHTML = `<h5><strong>Your expected GPA is ${gpa}</strong></h5>`
    }
});

let credits4 = [3, 3, 3, 3, 3, 1, 1, 1, 1, 1];
let subjects4 = ["Numerical Methods And Probability Models", "Engineering Electromagnetics", "Communication System-I", "Microprocessors", "Signal Processing", "Communication System Lab-I", "Microprocessors Lab", "Signal Processing Lab", "Constitution of India and Professional ", "Ability Enhancement Course"]

document.getElementById("cgCalButton4").addEventListener("click", function () {
    let marks = [];
    let allMarks;
    // let marks = document.querySelectorAll(".gpaCalMarks").value;
    let range = 0;
    allMarks = document.querySelectorAll('.gpaCalMarks4');
    allMarks.forEach(element => {
        if (element.value < 0 || element.value > 100 || element.value == "")
            range = 1;
    });
    if (range == 1)
        alert("Please Enter the value in the indicated range.");
    else {
        for (i = 0; i < allMarks.length - 1;) {
            marks.push([parseInt(allMarks[i].value), parseInt(allMarks[i + 1].value)]);

            i = i + 2;
        }

        // console.log(sgpa());
        // console.log(marks);
        // console.log(grades);


        function sgpa() {
            grades = []
            for (i = 0; i < marks.length; i++) {
                if (i < 5) {
                    g = getgrade(marks[i], 1)
                }
                else {
                    g = getgrade(marks[i], 0)
                }
                if (g[0] == 'F') {
                    grades.push(['F', 0])
                }
                else {
                    grades.push(g)
                }

            }

            f = credits4.map(function (value, index) {
                return value * grades[index][1]
            })
            return (sum(f) / sum(credits4))
        }

        function sum(array) {
            s = 0
            for (i = 0; i < array.length; i++) {
                s += array[i]
            }
            return s
        }

        function getgrade(a, type) {

            if (a[0] >= 0 || a[1] >= 0) {
                var g = null
                if (type == 0) {
                    final_marks = a[0] + a[1]
                }
                else {
                    var final_marks = a[0] + Math.round(a[1] / 2)
                }
                if (a[0] < 20 || a[1] < 35) {
                    g = 'F'; gp = 0;
                }
                else
                    if (final_marks >= 90) {
                        g = 'O'; gp = 10;
                    }
                    else if (80 <= final_marks) {
                        g = 'A+'; gp = 9;
                    }
                    else if (70 <= final_marks) {
                        g = 'A'; gp = 8;
                    }
                    else if (60 <= final_marks) {
                        g = 'B+'; gp = 7;
                    }
                    else if (55 <= final_marks) {
                        g = 'B'; gp = 6;
                    }
                    else if (50 <= final_marks) {
                        g = 'C'; gp = 5;
                    }
                    else if (40 <= final_marks) {
                        g = 'P'; gp = 4;
                    }
                    else if (0 <= final_marks < 40) {
                        g = 'F'; gp = 0;
                    }
                console.log(final_marks)
            }
            else {
                g = 'Entered marks is invaid'; gp = None;

            }
            return [g, gp]
        }
        let gpa = sgpa().toFixed(3);

        let gpaResultString = `  <thead>
        <tr>
          
          <th scope="col">Subject</th>
          <th scope="col">Grade</th>
          <th scope="col">Grade Point</th>
        </tr>
      </thead>`

        for (i = 0; i < marks.length; i++) {
            gpaResultString += `<tr>
            <th scope="row"><strong>${subjects4[i]}</strong></th>
            <td>${grades[i][0]}</td>
            <td>${grades[i][1]}</td>
            </tr>`
        }


        let gpaResult = document.getElementById("gpaResult4");
        let res = document.getElementById("result4");
        gpaResult.innerHTML = gpaResultString;
        res.innerHTML = `<h5><strong>Your expected GPA is ${gpa}</strong></h5>`
    }
});





document.getElementById("minMarkCal").addEventListener("click", function () {
    let minMark = document.getElementById("minMark").value;
    let minMarkSub = document.getElementById("minMarkSub").value;
    if (minMark < 0 || minMark > 50)
        alert("Enter the marks in the indicated range.");
    else if (minMark < 20)
        alert("Sorry. You Are not eligible for SEE.");
    else {
        let allGrades = ["O", "A+", "A", "B+", "B", "C", "P"];
        let x;
        let minMarksForGrade = [];
        if (minMarkSub == 1) {
            x = ((minMark - 40) * 2) + 1;
            let y = 100 - x;
            minMarksForGrade.push(y);
            for (i = 0; i < 3; i++) {
                y = y - 20;
                minMarksForGrade.push(y);
            }
            for (i = 0; i < 2; i++) {
                y = y - 10;
                minMarksForGrade.push(y);
            }

            y = y - 20;
            minMarksForGrade.push(y);


            for (i = 1; i < minMarksForGrade.length; i++) {
                if (minMarksForGrade[i - 1] > 100)
                    minMarksForGrade[i - 1] = "You cannot get this grade";
                if (minMarksForGrade[i - 1] >= 40 && minMarksForGrade[i] < 40)
                    minMarksForGrade[i] = 40;
            }
            for (i = 0; i < minMarksForGrade.length; i++) {
                if (minMarksForGrade[i] == 40 && i != minMarksForGrade.length - 1) {
                    for (j = i + 1; j < minMarksForGrade.length; j++) {
                        minMarksForGrade[j] = "";
                    }
                }
            }


        }
        else {
            x = (minMark - 40);
            let y = 50 - x;
            minMarksForGrade.push(y);
            for (i = 0; i < 3; i++) {
                y = y - 10;
                minMarksForGrade.push(y);
            }
            for (i = 0; i < 2; i++) {
                y = y - 5;
                minMarksForGrade.push(y);
            }

            y = y - 10;
            minMarksForGrade.push(y);


            for (i = 1; i < minMarksForGrade.length; i++) {
                if (minMarksForGrade[i - 1] > 50)
                    minMarksForGrade[i - 1] = "You cannot get this grade";
                if (minMarksForGrade[i - 1] >= 20 && minMarksForGrade[i] < 20)
                    minMarksForGrade[i] = 20;
            }

            for (i = 0; i < minMarksForGrade.length; i++) {
                if (minMarksForGrade[i] == 20 && i != minMarksForGrade.length - 1) {
                    for (j = i + 1; j < minMarksForGrade.length; j++) {
                        minMarksForGrade[j] = "";
                    }
                }
            }
        }

        let minMarkResultString = `  <thead>
        <tr>    
          <th scope="col">Grade</th>
          <th scope="col">Minimum Marks</th>         
        </tr>
      </thead>`;
        for (i = 0; i < minMarksForGrade.length; i++) {
            minMarkResultString += `<tr>
            <th scope="row"><strong>${allGrades[i]}</strong></th>
            <td>${minMarksForGrade[i]}</td>
            </tr>`
        }

        let minMarkRes = document.getElementById("minMarkRes");
        minMarkRes.innerHTML = minMarkResultString;


    }
})

document.getElementById("minMarkCal4").addEventListener("click", function () {
    let minMark = document.getElementById("minMark4").value;
    let minMarkSub = document.getElementById("minMarkSub4").value;
    if (minMark < 0 || minMark > 50)
        alert("Enter the marks in the indicated range.");
    else if (minMark < 20)
        alert("Sorry. You Are not eligible for SEE.");
    else {
        let allGrades = ["O", "A+", "A", "B+", "B", "C", "P"];
        let x;
        let minMarksForGrade = [];
        if (minMarkSub == 1) {
            x = ((minMark - 40) * 2) + 1;
            let y = 100 - x;
            minMarksForGrade.push(y);
            for (i = 0; i < 3; i++) {
                y = y - 20;
                minMarksForGrade.push(y);
            }
            for (i = 0; i < 2; i++) {
                y = y - 10;
                minMarksForGrade.push(y);
            }

            y = y - 20;
            minMarksForGrade.push(y);


            for (i = 1; i < minMarksForGrade.length; i++) {
                if (minMarksForGrade[i - 1] > 100)
                    minMarksForGrade[i - 1] = "You cannot get this grade";
                if (minMarksForGrade[i - 1] >= 40 && minMarksForGrade[i] < 40)
                    minMarksForGrade[i] = 40;
            }
            for (i = 0; i < minMarksForGrade.length; i++) {
                if (minMarksForGrade[i] == 40 && i != minMarksForGrade.length - 1) {
                    for (j = i + 1; j < minMarksForGrade.length; j++) {
                        minMarksForGrade[j] = "";
                    }
                }
            }


        }
        else {
            x = (minMark - 40);
            let y = 50 - x;
            minMarksForGrade.push(y);
            for (i = 0; i < 3; i++) {
                y = y - 10;
                minMarksForGrade.push(y);
            }
            for (i = 0; i < 2; i++) {
                y = y - 5;
                minMarksForGrade.push(y);
            }

            y = y - 10;
            minMarksForGrade.push(y);


            for (i = 1; i < minMarksForGrade.length; i++) {
                if (minMarksForGrade[i - 1] > 50)
                    minMarksForGrade[i - 1] = "You cannot get this grade";
                if (minMarksForGrade[i - 1] >= 20 && minMarksForGrade[i] < 20)
                    minMarksForGrade[i] = 20;
            }

            for (i = 0; i < minMarksForGrade.length; i++) {
                if (minMarksForGrade[i] == 20 && i != minMarksForGrade.length - 1) {
                    for (j = i + 1; j < minMarksForGrade.length; j++) {
                        minMarksForGrade[j] = "";
                    }
                }
            }
        }

        let minMarkResultString = `  <thead>
        <tr>    
          <th scope="col">Grade</th>
          <th scope="col">Minimum Marks</th>         
        </tr>
      </thead>`;
        for (i = 0; i < minMarksForGrade.length; i++) {
            minMarkResultString += `<tr>
            <th scope="row"><strong>${allGrades[i]}</strong></th>
            <td>${minMarksForGrade[i]}</td>
            </tr>`
        }

        let minMarkRes = document.getElementById("minMarkRes4");
        minMarkRes.innerHTML = minMarkResultString;


    }
})


function choose3Sem() {
    var sem3 = document.getElementById("sem3");
    var sem4 = document.getElementById("sem4");
    sem4.classList.remove("border-bottom");
    sem3.classList.add("border-bottom");

    var studymaterialForThirdSem = document.getElementById("studymaterialForThirdSem");
    var studymaterialForFourthSem = document.getElementById("studymaterialForFourthSem");
    studymaterialForThirdSem.classList.remove("semDisplay");
    studymaterialForFourthSem.classList.add("semDisplay");


    var scrollStudy = document.getElementById("scrollStudy");
    var scrollMincal = document.getElementById("scrollMincal");
    var scrollCgcal = document.getElementById("scrollCgcal");

    scrollStudy.href="#studymaterialForThirdSem";
    scrollMincal.href="#mincal3";
    scrollCgcal.href="#cgcal3";
}

function choose4Sem() {
    var sem3 = document.getElementById("sem3");
    var sem4 = document.getElementById("sem4");
    sem3.classList.remove("border-bottom");
    sem4.classList.add("border-bottom");
    
    
    var studymaterialForFourthSem = document.getElementById("studymaterialForFourthSem");
    var studymaterialForThirdSem = document.getElementById("studymaterialForThirdSem");
    studymaterialForThirdSem.classList.add("semDisplay");
    studymaterialForFourthSem.classList.remove("semDisplay");


    var scrollStudy = document.getElementById("scrollStudy");
    var scrollMincal = document.getElementById("scrollMincal");
    var scrollCgcal = document.getElementById("scrollCgcal");

    scrollStudy.href="#studymaterialForFourthSem";
    scrollMincal.href="#mincal4";
    scrollCgcal.href="#cgcal4";
}