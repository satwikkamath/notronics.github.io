
function getgrade(a,type) {

    if (a[0] >= 0 || a[1] >= 0) {
        var g = null
        if (type == 0) {
            final_marks = a[0] + a[1]
        }
        else {
            var final_marks = a[0] + Math.round(a[1] / 2)
        }
        if (final_marks >= 90) {
            g = 'O'; gp = 10;
        }
        else if (80 <= final_marks) {
            g = 'A<sup>+</sup>'; gp = 9;
        }
        else if (70 <= final_marks) {
            g = 'A'; gp = 8;
        }
        else if (60 <= final_marks) {
            g = 'B'; gp = 7;
        }
        else if (45 <= final_marks) {
            g = 'B<sup>+</sup>'; gp = 6;
        }
        else if (40 <= final_marks) {
            g = 'C'; gp = 5;
        }
        else if (0 <= final_marks < 40) {
            g = 'F'; gp = 4;
        }
    
    }
    else {
        g = 'Entered marks is invaid'; gp = None;
    
    }
    return [g,gp]
}




function sum(array) {
    s=0
    for (i = 0; i < array.length; i++){
        s+=array[i]
    }
    return s
}



function getmarks(type) {
    if (type == 1) {
        return [Math.floor(Math.random() * 51) + 10, Math.floor(Math.random() * 101) + 20]
    }
    else {
        return [Math.floor(Math.random() * 51) + 10, Math.floor(Math.random() * 51) + 10]

    }
}

function cgpa() {
    grades = []
    for (i = 0; i < marks.length; i++) {
        if (i <= 6) {
            g = getgrade(marks[i], 1)
        }
        else {
            g = getgrade(marks[i], 0)
        }
        grades.push(g)
    }
    f = credits.map(function (value, index) {
        return value*grades[index][1]
    })
    return sum(f)/sum(credits)
}


function sgpa() {
    grades=[]
    for (i = 0; i < marks.length; i++) {
        if (i <= 6) {
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

// getgrade()

//ignore germarks()

// order: maths,nacs,aec,ddh,dsa,uhv,AE,kannada,ddh lab,aec lab
marks = [[48,98], [38,98], [48,98], [48,98], [48,98], [48,98], [48,48], [48,48], [48,48], [48,48]]
credits = [3, 3, 3, 3, 3, 2, 1, 1, 1, 1]
// call the functions based on your usage : cgpa(),sgpa()


console.log(sgpa())
console.log(grades);
// console.log(getmarks(2));
