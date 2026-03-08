// Write a program that takes a score (0-100) and categorizes it into grades.
function categorizeGrade(score) {
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else {
        console.log("Grade: D");
    }
}

// Test the function
categorizeGrade(85);  
categorizeGrade(92);  
categorizeGrade(75);