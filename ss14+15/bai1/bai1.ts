class Student {
    id: number;
    name: string;
    enrolledCourses: Course[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }

    enroll(course: Course) {
        this.enrolledCourses.push(course);
    }
}

class Instructor {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    createCourse(title: string) {
        return new Course(title, this);
    }

    createLesson(title: string) {
        return new Lesson(title);
    }

    createAssignment(title: string) {
        return new Assignment(title);
    }

    createAssessment(title: string) {
        return new Assessment(title);
    }
}

class Course {
    title: string;
    instructor: Instructor;
    lessons: Lesson[];
    assessments: Assessment[];

    constructor(title: string, instructor: Instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }

    addLesson(lesson: Lesson) {
        this.lessons.push(lesson);
    }

    addAssessment(assessment: Assessment) {
        this.assessments.push(assessment);
    }
}

class Lesson {
    title: string;
    assignments: Assignment[];

    constructor(title: string) {
        this.title = title;
        this.assignments = [];
    }

    addAssignment(assignment: Assignment) {
        this.assignments.push(assignment);
    }
}

class Assignment {
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}

class Assessment {
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}

const instructor = new Instructor(1, "Huyen");
const course = instructor.createCourse("Introduction to TypeScript");
const lesson1 = instructor.createLesson("Lesson 1");
const lesson2 = instructor.createLesson("Lesson 2");
const assignment1 = instructor.createAssignment("Assignment 1");
const assessment1 = instructor.createAssessment("Assessment 1");

course.addLesson(lesson1);
course.addLesson(lesson2);
lesson1.addAssignment(assignment1);
course.addAssessment(assessment1);

const student = new Student(101, "Chi");
student.enroll(course);

console.log(student.enrolledCourses);
