"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(course) {
        this.enrolledCourses.push(course);
    }
}
class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    createCourse(title) {
        return new Course(title, this);
    }
    createLesson(title) {
        return new Lesson(title);
    }
    createAssignment(title) {
        return new Assignment(title);
    }
    createAssessment(title) {
        return new Assessment(title);
    }
}
class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
    addLesson(lesson) {
        this.lessons.push(lesson);
    }
    addAssessment(assessment) {
        this.assessments.push(assessment);
    }
}
class Lesson {
    constructor(title) {
        this.title = title;
        this.assignments = [];
    }
    addAssignment(assignment) {
        this.assignments.push(assignment);
    }
}
class Assignment {
    constructor(title) {
        this.title = title;
    }
}
class Assessment {
    constructor(title) {
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
