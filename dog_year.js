//1
let myAge = 28;  
/*let là từ khóa khai báo biến, myAge là tên biến được gán bằng 28.*/

//2
let earlyYears = 2;  
/*let là từ khóa khai báo biến, earlyYears là tên biến được gán bằng 2.*/

//3
earlyYears *= 10.5;  
/* lấy biến earlyYears nhân với 10.5 sau đó gán lại kết quả cho biến earlyYears.*/

//4
let laterYears = myAge - 2;  
/* Khai báo biến lateYears, lateYear sẽ hứng giá trị trả về của myAge trừ đi 2.*/

//5
laterYears *= 4;  
/* Lấy biến lateYears nhân với 4, sau đó lấy giá trị trả về gán bằng lại cho chính biến lateYears.*/

//6
console.log(earlyYears, laterYears); // >>> 21 104

//7
let myAgeInDogYears = earlyYears + laterYears;  
/* Khai báo biến myAgeInDogYears, thực hiện phép cộng giữa 2 biến earlyYears và laterYears,
 giá trị trả về gán cho biến myAgeInDogYears.*/


//8
let myName = "Dinh Quoc Tien".toLowerCase();  
/* Khai báo biến myName, gán bằng string "Dinh Quoc Tien",
 sau đó gọi tới phương thức toLowerCase.*/

//9
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
/* Dùng lệnh console.log() sau đó truyền vào 1 string muốn in ra,
trong string có các biến muốn truyền vào thì bọc biến đó trong dấu {},
phía trước có ký hiệu $. Khi in ra chuỗi string có chứa các biến ta truyền vào tại vị trí ${}.
*/

//10

/*
let myAge = 28;
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
let laterYears = myAge - 2;
laterYears = laterYears * 4;
console.log(earlyYears, laterYears);
let myAgeInDogYears = earlyYears + laterYears;
let myName = "Dinh Quoc Tien".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
*/
