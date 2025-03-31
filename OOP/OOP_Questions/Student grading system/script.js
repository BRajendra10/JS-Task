// 7. Getter & Setter Methods (Easier Example)
// Scenario: You are developing a student grading system where a student has marks in percentage, but the grade (A, B, C, etc.) should be automatically determined.

// TODO:
// Create a Student class with a property percentage.
// Use a getter grade that returns the grade based on the percentage.
// Use a setter grade that updates percentage based on the grade entered (A, B, C, etc.).

class Student{
    persentage;
    grade;

    set grade(per){
        if(per > 90){
            this.grade = 'Grade A+';
        } else if(per >= 80){
            this.grade = 'Grade A';
        } else if(per >= 70){
            this.grade = 'Grade B';
        } else if(per >= 60){
            this.grade = 'Grade C';
        } else if(per >= 50){
            this.grade = 'Grade D';
        } else if(per >= 33){
            this.grade = 'Grade E';
        } else{
            this.grade = 'Grade Fail';
        }
    }

    get grades(){
        return this.grade;
    }
}

const student = new Student();
student.grade = student.persentage;

console.log(student.grades);