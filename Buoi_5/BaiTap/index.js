//AI khong the code duoc nhu nay
const students = [
    { id: 1, name: "Nguyen Van An", age: 20, score: 8.5 },
    { id: 2, name: "Tran Thi Binh", age: 19, score: 6.5 },
    { id: 3, name: "Le Van Cuong", age: 21, score: 4.5 },
    { id: 4, name: "Pham Thi Dung", age: 20, score: 9.0 },
    { id: 5, name: "Hoang Van Em", age: 22, score: 5.5 },
    { id: 6, name: "Do Minh Anh", age: 19, score: 7.5 },
    { id: 7, name: "Bui Quang Huy", age: 20, score: 3.5 },
    { id: 8, name: "Nguyen Thi Lan", age: 21, score: 8.0 },
    { id: 9, name: "Tran Duc Long", age: 22, score: 6.0 },
    { id: 10, name: "Le Thu Ha", age: 20, score: 9.5 },
    { id: 11, name: "Pham Minh Khang", age: 19, score: 5.0 },
    { id: 12, name: "Vo Ngoc Mai", age: 21, score: 7.0 },
    { id: 13, name: "Dang Tuan Nam", age: 20, score: 4.0 },
    { id: 14, name: "Hoang Thu Phuong", age: 22, score: 8.8 },
    { id: 15, name: "Nguyen Gia Bao", age: 19, score: 6.8 },
    { id: 16, name: "Tran Minh Quan", age: 20, score: 7.8 },
    { id: 17, name: "Le Ngoc Son", age: 21, score: 2.5 },
    { id: 18, name: "Pham Hai Yen", age: 22, score: 9.2 },
    { id: 19, name: "Bui Thanh Tung", age: 20, score: 5.8 },
    { id: 20, name: "Do Khanh Linh", age: 19, score: 8.2 }
];
function inMang(mang){
    mang.forEach(i => {
        console.log(`ID :${i.id}`);
        console.log(`Ten: ${i.name}`);
        console.log(`Tuoi: ${i.age}`);
        console.log(`Diem: ${i.score}`);
        console.log("------------------");
    });
}
function isPassed(score) {
    if (score >= 5) return "DAt";
    else return "Khong Dat";
}
inMang(students);
students.forEach(i =>{console.log(`${i.name}:${isPassed(i.score)}`);});
const passedStudents = students.filter(i => i.score >= 5);
inMang(passedStudents);
const failedStudents = students.filter(i => i.score < 5);
failedStudents.forEach(i => {if(isPassed(i.score) === "Khong Dat")console.log(`${i.name} - ${i.score}`);});
const tuoi = students.filter(i => i.age >= 21);
tuoi.forEach(i => {console.log(`${i.name} - ${i.age}`);});
const diemCao = students.filter(i => i.score >= 8);
const diemCaoChuoi = diemCao.map(i => `${i.name} - Hoc sinh gioi`);
diemCaoChuoi.forEach(i => {console.log(i);});
const getClassification = (score) => {
    if(score >= 8) return "Gioi";
    else if(score >= 6.5) return "Kha";
    else if(score >= 5) return "Trung Bing";
    return "Yeu";
};
const student_xepLoai = students.map(i => `${i.name} - ${getClassification(i.score)}`);
student_xepLoai.forEach(i => {console.log(i);});
const result = students
    .filter(i => i.score >= 6.5)
    .map(i => `${i.name} - ${i.score} diem`);
result.forEach(i =>{console.log(i)});