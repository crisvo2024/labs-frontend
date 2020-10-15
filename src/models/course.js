export default class Course{
    constructor(id,courseName,durationHours,grade,periodName,roleId) {
        this.id=id;
        this.courseName = courseName;
        this.durationHours = durationHours;
        this.grade = grade;
        this.periodName = periodName;
        this.roleId = roleId;
    }
}