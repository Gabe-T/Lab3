"use strict"

let submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true,
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true,
    },
];

const addSubmission = (array, newName, newScore, newDate) => {
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60
    };
    array.push(newSubmission);
};
addSubmission(submissions, "Gabe", 82, "2020-04-24")
//    console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1)
};

// console.log(deleteSubmissionByIndex(submissions, 1));
// console.log(submissions);

const deleteSubmissionByName = (array, name) => {
    let index = array.findIndex((item) => {
        return item.name === name;
    });
    deleteSubmissionByIndex(array, index)
};

deleteSubmissionByName(submissions, "Jill");
// console.log(submissions);

const editSubmission = (array, index, score) => {
    let student = array.find((student) => {
        return student === array[index]
    });
    student.score = score;
    student.passed = score >= 60;
};

editSubmission(submissions, 3, 78)
// console.log(submissions)

const findSubmissionByName = (array, name) => {
    return array.find((arrayName) => {
        return arrayName.name === name;
    });
};

// console.log(findSubmissionByName(submissions, "Gabe"));

const findLowestScore = (array) => {
    let currentLowestObject = array[0];
    array.forEach((object) => {
        if (object.score < currentLowestObject.score) {
            currentLowestObject = object;
        }
    });
    return currentLowestObject;
};
// console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
    let total = 0;
    for (let person of array) {
        total += person.score;
    }
    return total / array.length;
};
// console.log(findAverageScore(submissions));

const filterPassing = (array) => {
    let passingGrade = array.filter((submission) => {
        return submission.passed === true;
    });
    return passingGrade;
};
// // console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
    let above90 = array.filter((item) => {
        return item.score >= 90;
    });
    return above90;
};
// console.log(filter90AndAbove(submissions));