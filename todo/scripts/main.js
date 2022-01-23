// The course class
class Course {
    constructor(name, priority) {
        this.name = name;
        this.priority = priority;
        // this.assignments = assignments;
    }

    get name() {
        return this.name;
    }

    get priority() {
        return this.priority;
    }
}

// The assignment class
class Assignment {
    constructor(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
    }

    get name() {
        return this.name;
    }

    get dueDate() {
        return this.dueDate;
    }
}

function addCourse(that) {
    let course = new Course(that.courseName.value, that.coursePriority.value);
    localStorage.setItem('course', course);
}

console.log(localStorage.getItem('course'));
