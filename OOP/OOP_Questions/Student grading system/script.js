// 7. Getter & Setter Methods (Easier Example)
// Scenario: You are developing a student grading system where a student has marks in percentage, but the grade (A, B, C, etc.) should be automatically determined.

// TODO:
// Create a Student class with a property percentage.
// Use a getter grade that returns the grade based on the percentage.
// Use a setter grade that updates percentage based on the grade entered (A, B, C, etc.).

class Student{
    get grade(){
        if(this.persentage > 90){
            return 'Grade A+';
        }else if(this.persentage >= 80){
            return 'Grade A';
        }else if(this.persentage >= 70){
            return 'Grade B';
        }else if(this.persentage >= 60){
            return 'Grade C';
        }else if(this.persentage >= 50){
            return 'Grade D';
        }else if(this.persentage >= 33){
            return 'Grade E';
        }else{
            return 'Grade Fail';
        }
    }
    
    set persent(per){
        if(per > 100){
            alert('persentage can not be greater then 100');
        }else if(per < 0){
            alert('persentage can not be less then 0');
        }else{
            this.persentage = per
        }
    }
}

const student = new Student();
student.persent = 50;

document.writeln(`persentage: ${student.persentage} <br> grade: ${student.grade} <br>`);