// 1. Hãy khai báo 2 mảng. Mỗi mảng đều có 3 phần tử lần lượt là ‘a’, ‘b’, ‘c’.
//  Cho biết kiểu dữ liệu của 2 mảng đó? -Sử dụng toán tử ‘+’ để ‘cộng’ 2 mảng đó và cho biết kết quả? -Sử dụng toán tử ‘==’ để so sánh 2 mảng đó và cho biết kết quả?
// Khai báo hai mảng
// const array1 = ["a", "b", "c"];
// const array2 = ["a", "b", "c"];

// Kiểu dữ liệu của hai mảng
// console.log(typeof array1);
// console.log(typeof array2);

// Sử dụng toán tử '+' để cộng hai mảng
// const toancong = array1 + array2;
// console.log("ket qua cua array1 + array2 la: ", toancong);

// So sánh hai mảng bằng toán tử '=='
// const sosanh = array1 == array2;
// console.log("ket qua cua array1 == array2 la: ", sosanh);

// - typeof array1 sẽ trả về 'object' vì mảng trong JavaScript là một loại object.
// - array1 + array2 sẽ không hợp nhất hai mảng mà sẽ chuyển đổi chúng thành chuỗi và nối lại.
// - array1 == array2 sẽ trả về false vì hai mảng là hai đối tượng khác nhau trong bộ nhớ.

// 2. Khai báo 1 mảng gồm 4 số bất kỳ khác nhau. -In ra phần tử có chỉ số 0 và 3 trong mảng.
//  -Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2. -Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.
// const numbers = [1, 2, 3, 4];

//in ra phan tu co chi so 0 va 3
// console.log("phan tu tai 0: ", numbers[0]);
// console.log("phan tu tai 3: ", numbers[3]);

//thuc hien phep cong giua phan tu co chi so 1 va 2
// const sum = numbers[1] + numbers[2];
// console.log("phep cong giua phan tu co chi so 1 va 2 la: ", sum);

//hoan doi gia tri cua phan tu co chi so 1 va 3
// [numbers[1], numbers[3]] = [numbers[3], numbers[1]];
// console.log("mang sau khi hoan doi: ", numbers);

// 3. Khai báo 1 mảng gồm các số bất kỳ. -Hãy in ra các số chẵn trong mảng đó. -Hãy tính tổng các phần tử trong mảng. -Hãy tìm phần tử nhỏ nhất trong mảng.
// const randomNumbers = [12, 7, 25, 8, 30, 3];

// // In ra các số chẵn
// console.log(
//   "Các số chẵn trong mảng:",
//   randomNumbers.filter((num) => num % 2 === 0)
// );

// // Tính tổng các phần tử trong mảng
// const totalSum = randomNumbers.reduce((acc, num) => acc + num, 0);
// console.log("Tổng các phần tử trong mảng:", totalSum);

// // Tìm phần tử nhỏ nhất trong mảng
// const minNumber = Math.min(...randomNumbers);
// console.log("Phần tử nhỏ nhất trong mảng:", minNumber);

// 4. Khai báo 1 mảng rỗng. Nhập vào số n (n > 0). Hãy điền n số có giá trị ngẫu nhiên vào trong mảng đó.
// const emptyArray = [];
// const n = 5;
// for (let i = 0; i < n; i++) {
//   emptyArray.push(Math.floor(Math.random() * 100));
// }
// console.log("Mảng sau khi thêm n số ngẫu nhiên:", emptyArray);

// // 5. Khai báo 1 mảng gồm 2 phần tử. Nhập vào số n (n > 2). Hãy thêm vào đầu mảng phần tử có giá trị ‘0’ cho đấu khi độ dài của mảng bằng n.
// const smallArray = [5, 10];
// const targetLength = 3;
// while (smallArray.length < targetLength) {
//   smallArray.unshift(0);
// }
// console.log("Mảng sau khi thêm 0 vào đầu:", smallArray);

// // 6. Khai báo 1 mảng bất kỳ nhiều hơn 1 phần tử. Hãy thực hiện xóa phần tử cuối cùng trong mảng đến khi độ dài mảng bằng 1.
// const removeArray = [4, 7, 9, 15, 22];
// while (removeArray.length > 1) {
//   removeArray.pop();
// }
// console.log("Mảng sau khi chỉ còn 1 phần tử:", removeArray);

// 7. Nhập vào 1 dãy số s và 1 số n Mỗi số cách nhau bởi dấu ‘,’. -In ra dãy số mới gồm các phần tử có giá trị là bình phương của các số trong dãy s.
//  -Tìm tất cả số trong dãy s có giá trị lớn hơn hoặc bằng n. -Tìm 1 số đầu tiên trong dãy s có giá trị bằng n.

// Thực hành
// 1. Khai báo 1 mảng gồm các số bất kỳ.
// -Tính tích của các phần tử trong mảng đó.
// -Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// -Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// -Tính giá trị trung bình của mảng.
// -Lọc ra các số nguyên tố trong mảng.
// -Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// -Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// -Nhập vào số n cho đến khi n là 1 số trong mảng s.
// -Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần. (https://www.geeksforgeeks.org/bubble-sort/)
// Khai báo một mảng số bất kỳ
// Khai báo một mảng số bất kỳ
const numbers = [12, 7, 25, 8, 30, 3];

// Tính tích của các phần tử trong mảng
// const product = numbers.reduce((acc, num) => acc * num, 1);
// console.log("Tích của các phần tử trong mảng:", product);

// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng
// const minEven = Math.min(...numbers.filter((num) => num % 2 === 0));
// console.log("Số nhỏ nhất chia hết cho 2:", minEven);

// // Tìm số lớn nhất mà chia hết cho 3 trong mảng
// const maxDivBy3 = Math.max(...numbers.filter((num) => num % 3 === 0));
// console.log("Số lớn nhất chia hết cho 3:", maxDivBy3);

// // Tính giá trị trung bình của mảng
// const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
// console.log("Giá trị trung bình của mảng:", average);

// // Lọc ra các số nguyên tố trong mảng
// const isPrime = (num) => {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };
// const primeNumbers = numbers.filter(isPrime);
// console.log("Các số nguyên tố trong mảng:", primeNumbers);

// // Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không
// let nhohon10 = false;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 10) {
//     nhohon10 = true;
//     break;
//   }
// }
// console.log("Mảng có số nhỏ hơn 10 không:", nhohon10);

// // Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không
// let lonhon20 = true;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] <= 20) {
//     lonhon20 = false;
//     break;
//   }
// }
// console.log("Tất cả phần tử có lớn hơn 20 không:", lonhon20);

// // Nhập vào số n cho đến khi n là 1 số trong mảng
// let n;
// let found = false;
// while (!found) {
//   n = parseInt(window.prompt("Nhập số n:"));
//   if (numbers.includes(n)) {
//     found = true;
//     console.log("Số n hợp lệ trong mảng:", n);
//   } else {
//     console.log("Số bạn nhập không có trong mảng. Vui lòng nhập lại.");
//   }
// }

// 2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
// -Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// -Tìm những chuỗi trong mảng có chứa giá trị text.
// -Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// -Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.

// Khai báo một mảng s gồm các chuỗi bất kỳ
// let s = ["apple", "banana", "kiwi", "grape", "mango", "blueberry"];

// // Nhập vào một chuỗi text từ người dùng
// // let text = prompt("Nhập vào một chuỗi:");s
// let text = "an";

// // Tìm chuỗi đầu tiên có độ dài nhỏ nhất trong mảng
// let minLengthString = s.reduce(
//   (shortest, current) =>
//     current.length < shortest.length ? current : shortest,
//   s[0]
// );
// console.log("Chuỗi có độ dài nhỏ nhất:", minLengthString);

// // Tìm những chuỗi trong mảng có chứa giá trị text
// let containingText = s.filter((str) => str.includes(text));
// console.log("Các chuỗi chứa giá trị '" + text + "':", containingText);

// // Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s
// let newS = s.map((str) => str.substring(0, 3));
// console.log("Mảng chứa 3 ký tự đầu tiên của mỗi chuỗi:", newS);

// // Tạo ra một chuỗi là sự kết hợp của các phần tử trong s, ngăn cách bởi dấu '-'
// let combinedString = s.join("-");
// console.log("Chuỗi kết hợp từ mảng:", combinedString);

// 3. Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.
// -Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
// -Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// -Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
// -Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Sort).
// (https://www.geeksforgeeks.org/merge-sort/?ref=lbp)
// Nhập vào 2 dãy số d1, d2 từ người dùng
// let d1 = prompt("Nhập dãy số thứ nhất, cách nhau bởi dấu ','")
//   .split(",")
//   .map(Number);
// let d2 = prompt("Nhập dãy số thứ hai, cách nhau bởi dấu ','")
//   .split(",")
//   .map(Number);

// // Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không
// let allInD2 = d1.every((num) => d2.includes(num));
// console.log("Tất cả số trong d1 có nằm trong d2 không:", allInD2);

// // Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không
// let sumD1 = d1.reduce((acc, num) => acc + num, 0);
// let divisibleInD2 = d2.some((num) => num % sumD1 === 0);
// console.log(
//   "Có số nào trong d2 chia hết cho tổng của d1 không:",
//   divisibleInD2
// );

// // Tạo mảng mới gồm các số chia hết cho 2 lần lượt trong d2 và d1
// let evenNumbers = [
//   ...d2.filter((num) => num % 2 === 0),
//   ...d1.filter((num) => num % 2 === 0),
// ];
// console.log("Mảng chứa các số chia hết cho 2 trong d2 và d1:", evenNumbers);

// // Hợp nhất d1 và d2 theo thứ tự tăng dần sử dụng thuật toán Merge Sort
// function mergeSortedArrays(arr1, arr2) {
//   let merged = [];
//   let i = 0,
//     j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       merged.push(arr1[i]);
//       i++;
//     } else {
//       merged.push(arr2[j]);
//       j++;
//     }
//   }
//   // Thêm các phần tử còn lại
//   return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
// }

// let mergedArray = mergeSortedArrays(d1, d2);
// console.log("Mảng hợp nhất theo thứ tự tăng dần:", mergedArray);

// 4. Cho mảng đa chiều biểu thị mức độ tăng trưởng của 1 công ty qua các quý và năm tương ứng.
// Dữ liệu của năm: theo hàng.
// Dữ liệu của quý: theo cột.
// let growth = [
//     [5,8,9,16],
//     [2,7,1,9],
//     [5,6,8,12],
//     [10,2,1,8],
//     [20,4,9,1]
// ]
// -Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm (Tính trung bình theo hàng).
// -Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.
// -Tìm giá trị tăng trưởng theo quý lớn nhất.
// -Tính giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột).

// Mảng đa chiều biểu thị mức độ tăng trưởng của công ty qua các quý và năm
let growth = [
  [5, 8, 9, 16],
  [2, 7, 1, 9],
  [5, 6, 8, 12],
  [10, 2, 1, 8],
  [20, 4, 9, 1],
];

// Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm
let avgGrowthPerYear = growth.map(
  (year) => year.reduce((sum, val) => sum + val, 0) / year.length
);
console.log("Trung bình tăng trưởng từng năm:", avgGrowthPerYear);

// Tìm giá trị tăng trưởng trung bình theo năm lớn nhất
let maxAvgGrowth = Math.max(...avgGrowthPerYear);
console.log("Giá trị tăng trưởng trung bình theo năm lớn nhất:", maxAvgGrowth);

// Tìm giá trị tăng trưởng theo quý lớn nhất
let maxGrowth = Math.max(...growth.flat());
console.log("Giá trị tăng trưởng theo quý lớn nhất:", maxGrowth);

// Tính giá trị tăng trưởng trung bình theo quý của các năm
let avgGrowthPerQuarter = growth[0].map(
  (_, colIndex) =>
    growth.reduce((sum, row) => sum + row[colIndex], 0) / growth.length
);
console.log("Giá trị tăng trưởng trung bình theo quý:", avgGrowthPerQuarter);

// 5. Tạo ra 1 mảng gồm các số bất kỳ. Hãy tính tổng của các số lẻ có trong mảng.
// Tạo một mảng gồm các số ngẫu nhiên từ 1 đến 100
// const numbers = Array.from(
//   { length: 10 },
//   () => Math.floor(Math.random() * 100) + 1
// );

// // Tính tổng các số lẻ trong mảng
// const sumOddNumbers = numbers.reduce((sum, num) => {
//   return num % 2 !== 0 ? sum + num : sum;
// }, 0);

// console.log("Mảng số:", numbers);
// console.log("Tổng các số lẻ:", sumOddNumbers);
