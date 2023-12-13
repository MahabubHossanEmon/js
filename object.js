var phone={
    brand:'iphone',
    price: 90000,
    camera: '14Mp',
    stroage:'512Gb',
}

var students={
    name :'emon',
    totalStudent:50,
    rollNumber:5,
    subject:['bangle','english','physics'],
    marks:80
}

var propertiesName='rollNumber';
var propertiesValue=students[propertiesName];
console.log(propertiesName,propertiesValue);
var properties=Object.keys(students);
var objectValue=Object.values(students);
console.log(properties);
console.log(objectValue);
console.log(phone);
phone.year=12;
phone['omner']='emon';
phone.brand='samsung';
console.log(phone);