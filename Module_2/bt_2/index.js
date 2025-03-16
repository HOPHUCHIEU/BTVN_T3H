// Quizz 0. Hãy viết chương trình nhập vào một chuỗi s. Nếu chuỗi s có độ dài >= 8, in ra màn hình console “Chuỗi này ok”. Ngược lại, in ra “Ngắn quá, dài thêm tí nữa”.
// let s = prompt("Nhập vào một chuỗi:"); // Nhập chuỗi từ người dùng
// if (s.length >= 8) {
//   console.log("Chuỗi này ok");
// } else {
//   console.log("Ngắn quá, dài thêm tí nữa");
// }

// 1. Hãy viết chương trình nhập vào một số a. Nếu a >= 18, in ra màn hình console “Đủ 18 thì quẩy tiếp”. Nếu a >= 16, in ra “Đợi thêm ít năm nữa”. Ngược lại, in ra “Còn quá nà trẻ”.
// let a = parseInt(prompt("Nhập vào một số:")); // Nhập số từ người dùng
// if (a >= 18) {
//   console.log("Đủ 18 thì quẩy tiếp");
// } else if (a >= 16) {
//   console.log("Đợi thêm ít năm nữa");
// } else {
//   console.log("Còn quá nà trẻ");
// }

// Quizz 0. Hãy tính tổng các số từ 1 đến 50.
// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//   sum += i;
// }
// console.log("Tổng các số từ 1 đến 50 là:", sum);

// 1. Hãy tính tổng các số chẵn từ -10 đến 50.
// let evenSum = 0;
// for (let i = -10; i <= 50; i++) {
//     if (i % 2 === 0) {
//         evenSum += i;
//     }
// }
// console.log("Tổng các số chẵn từ -10 đến 50 là:", evenSum);

// 2. Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]
// for(let i = -100; i <= 100; i++) {
//     if(i % 9 === 0) {
//         console.log(i);
//     }
// }

// 3. Hãy dùng while để in ra dãy số từ 1 đến 200.
// let i = 1;
// while (i <= 200) {
//   console.log(i);
//   i++;
// }

// 4. Hãy nhập vào 1 chuỗi s và 1 số l. Hãy thêm vào cuối chuỗi s ký tự ‘a’ cho đến khi độ dài chuỗi s >= l.
// let s = prompt("Nhập vào một chuỗi:");
// let l = parseInt(prompt("Nhập vào một số:"));
// while (s.length < l) {
//   s += "a";
// }
// console.log(s);

// 5. Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x, giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.
// let x = parseInt(prompt("Nhập vào số x (0 <= x < y <= 100):"));
// let y = parseInt(prompt("Nhập vào số y (0 <= x < y <= 100):"));
// while (x < y) {
//   console.log(`x: ${x}, y: ${y}`);
//   x++;
//   y--;
// }
// Thực hành

// 1. In ra dãy số từ 1 đến 500.
// for (let i = 1; i <= 500; i++) {
//   console.log(i);
// }

// 2. In ra các số chia hết cho 2 và 3 từ 1 đến 300.
// for (let i = 1; i <= 300; i++) {
//   if (i % 2 === 0 && i % 3 === 0) {
//     console.log(i);
//   }
// }

// 3. Tính tổng các số chẵn trong đoạn [-30, 50].
// let evenSum = 0;
// for (let i = -30; i <= 50; i++) {
//   if (i % 2 === 0) {
//     evenSum += i;
//   }
// }
// console.log("Tổng các số chẵn trong đoạn [-30, 50] là:", evenSum);

// 4. Nhập vào số n. Tính giai thừa của số n.
// let s = parseInt(prompt("Nhập vào số n:"));
// let factorial = 1;
// for (let i = 1; i <= s; i++) {
//   factorial *= i;
// }
// console.log(`Giai thừa của ${s} là:`, factorial);

// 5. Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.
// let a = parseInt(prompt("Nhập vào số a:"));
// let b = parseInt(prompt("Nhập vào số b:"));
// let x = parseInt(prompt("Nhập vào số x:"));
// let found = false;

// for (let i = a; i <= b; i++) {
//   if (i % x === 0) {
//     console.log(
//       `Số nhỏ nhất trong khoảng ${a} đến ${b} mà chia hết cho ${x} là:`,
//       i
//     );
//     found = true;
//     break;
//   }
// }

// if (!found) {
//   console.log(`Không có số nào trong khoảng ${a} đến ${b} chia hết cho ${x}`);
// }

// 6. Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau: S = 1/(1.2) + 1/(2.3) + ... + 1/n(n+1)
// let n = parseInt(prompt("Nhập vào số n:"));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += 1 / (i * (i + 1));
// }
// console.log(`Giá trị của biểu thức S là:`, sum);

// 7. Nhập vào số n. Hãy in ra số ước của n.
// let n = parseInt(prompt("Nhập vào số n:"));
// let count = 0;
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     count++;
//   }
// }
// console.log(`Số ước của ${n} là:`, count);

// 8. Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
// let n = parseInt(prompt("Nhập vào số n:"));
// let isPrime = true;
// if (n < 2) {
//   isPrime = false;
// } else {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// if (isPrime) {
//   console.log(`${n} là số nguyên tố`);
// } else {
//   console.log(`${n} không phải là số nguyên tố`);
// }

// 9. Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.
// let s = prompt("Nhập vào chuỗi s (chỉ gồm chữ số):");
// let l = parseInt(prompt("Nhập vào số l:"));
// while (s.length < l) {
//   s = "0" + s;
// }
// console.log(s);

// 10. Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất, bội chung nhỏ nhất của m, n.
// let m = parseInt(prompt("Nhập vào số m (m > 0):"));
// let n = parseInt(prompt("Nhập vào số n (n > 0):"));

// function gcd(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }

// function lcm(a, b) {
//   return (a * b) / gcd(a, b);
// }

// console.log(`Ước chung lớn nhất của ${m} và ${n} là:`, gcd(m, n));
// console.log(`Bội chung nhỏ nhất của ${m} và ${n} là:`, lcm(m, n));

// // 11. Trò chơi đoán số: Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20. Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”. Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer. Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.
// let correct = Math.floor(Math.random() * 20) + 1;
// let attempts = 0;
// let maxAttempts = 5;
// let guessedCorrectly = false;

// while (attempts < maxAttempts) {
//   let answer = parseInt(prompt("Nhập vào một số từ 1 đến 20:"));
//   attempts++;
//   if (answer === correct) {
//     console.log("Đoán đúng");
//     guessedCorrectly = true;
//     break;
//   } else {
//     console.log("Đoán sai");
//   }
// }

// if (!guessedCorrectly) {
//   console.log("Bạn đã thua cuộc");
// }

// 12. Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.
// let n = parseInt(prompt("Nhập vào số n (2 <= n <= 10):"));
// for (let i = 1; i <= 10; i++) {
//   console.log(`${n} x ${i} = ${n * i}`);
// }

// 13. Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n. VD: n = 3
// * * *
// * * *
// * * *
// let n = parseInt(prompt("Nhập vào số n (n >= 2):"));

// if (n >= 2) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
// } else {
//   console.log("Vui lòng nhập số n >= 2");
// }

// 14. Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n. VD: m = 4, n = 3
// * * * *
// * * * *
// * * * *
// let m = parseInt(prompt("Nhập vào chiều rộng m (m >= 2):"));
// let n = parseInt(prompt("Nhập vào chiều cao n (n >= 2):"));

// if (m >= 2 && n >= 2) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < m; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
// } else {
//   console.log("Vui lòng nhập m và n >= 2");
// }

// 15. Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n. VD: n = 3
// *
// * *
// * * *
// let n = parseInt(prompt("Nhập vào số n (n >= 3):"));

// if (n >= 3) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
// } else {
//   console.log("Vui lòng nhập số n >= 3");
// }

// 16. Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả: Nếu BMI < 18.5 → in ra “Nhẹ cân” Nếu 18.5 <= BMI < 23 → in ra “Bình thường” Nếu 23 <= BMI < 25 → in ra “Thừa cân” Nếu BMI >= 25 → in ra “Béo phì”
// let w = parseFloat(prompt("Nhập vào cân nặng (kg):"));
// let h = parseFloat(prompt("Nhập vào chiều cao (m):"));

// if (w > 0 && h > 0) {
//   let bmi = w / (h * h);
//   console.log("BMI của bạn:", bmi.toFixed(2));

//   if (bmi < 18.5) {
//     console.log("Nhẹ cân");
//   } else if (bmi < 23) {
//     console.log("Bình thường");
//   } else if (bmi < 25) {
//     console.log("Thừa cân");
//   } else {
//     console.log("Béo phì");
//   }
// } else {
//   console.log("Vui lòng nhập cân nặng và chiều cao hợp lệ");
// }

// 17. Tạo 1 biến a có giá trị là 1 số tự nhiên ngẫu nhiên trong [5, 10]. Hãy nhập vào số n cho đến khi giá trị của n bằng a.
// let a = Math.floor(Math.random() * 6) + 5; // Tạo số ngẫu nhiên từ 5 đến 10
// let n;

// do {
//   n = parseInt(prompt("Nhập vào số n:"));
// } while (n !== a);

// console.log("Bạn đã đoán đúng, số cần tìm là:", a);
