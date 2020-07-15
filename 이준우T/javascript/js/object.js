//object는 key와 value로 이루어짐

const school = {
    name: "IT School",
    firstName: "school",
    lastName: "IT",
    age: 38,
    classes: ['frontend', 'Java', 'S/W'],

    address: {
        city: "대구",
        nation: "한국",
        area: "동구"
    }
}

// school에 들어있는 프로퍼티 변경
school.name = "한국IT교육원";
console.log(school.name);

//classes에 's/w'빼기
school.classes.pop();
console.log(school.classes)

//address zip 4440 (프로퍼티) 추가
school.address.zip = 4440
console.log(school.address);






// console.log(school.age); //한 프로퍼티만 출력하고싶을때

// console.log(`이 학원의 이름은 ${person.lastName} ${person.firstName}입니다.`);
// console.log("이 학원의 이름은 " + person.lastName + " " + person.firstName + "입니다.");


const {
    name,
    firstName,
    address: {
        city,
        area
    }
} = school;

console.log(city);


//object 문자3개, 숫1개, 불리언,1 배열, 오브젝트

const me = {
    name: "Kumyunjung",
    age: 27,
    area: "Kyung-ju",
    hobby: "Watching netflx",
    female: true,
    likeFood: ["Sushi", "Chicken", "Pork"],
    school: {
        city: "Seoul",
        schoolName: "SeoulJazzAcademy",
        major: "Jazzpiano"
    }

}
//json형태로 으로 변환

const jsonData = JSON.stringify(me)

console.log(jsonData.name, jsonData);