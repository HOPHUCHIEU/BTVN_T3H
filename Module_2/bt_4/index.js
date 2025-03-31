// Quizzes
// 1. Khai báo 1 đối tượng để mô tả bản thân bao gồm: tên, tuổi, địa chỉ, giới tính, sở thích (nhiều sở thích), chiều cao, cân nặng, tình trạng hôn nhân, số điện thoại.
// const myself = {
//   name: "Hồ Phúc Hiếu",
//   age: 23,
//   address: "Đà Nẵng",
//   gender: "Nam",
//   hobbies: ["Đi dạo", "Đi chơi", "Đọc sách"],
//   height: 1.65,
//   weight: 55,
//   maritalStatus: "Độc thân",
//   phoneNumber: "03562446575",
// };

// 2. Khai báo 1 đối tượng là bạn trai/bạn gái của bạn: tên, tuổi, sự tốt bụng (1 - 10), nhà giàu (boolean).
// const partner = {
//   name: "Võ Thị Vỹ Vỹ",
//   age: 24,
//   kindness: 10,
//   isRich: true,
// };

// 3. Viết chương trình kiểm tra nếu tuổi của bạn và bạn gái (trai) đều lớn hơn 20, in ra màn hình “Tầm này cưới được rồi”. Ngược lại, in ra “Chờ thêm chút nữa”
// if (myself.age > 20 && partner.age > 20) {
//   console.log("Tầm này cưới được rồi");
// } else {
//   console.log("Chờ thêm chút nữa");
// }

// Quizzes
// 1. Khai báo 1 function nhận đầu vào là chuỗi name, thực hiện in ra màn hình “Hello world, ” + name.
// function greet(name) {
//   console.log("Hello you, " + name);
// }
// greet("Hồ Phúc Hiếu");
// 2. Khai báo 1 function nhận đầu vào là 2 số a, b. Đầu ra là kết quả của phép tính (a + b)^2 .
// function calculateSquare(a, b) {
//   return Math.pow(a + b, 2);
// }
// const result = calculateSquare(3, 4);
// console.log(result); // Output: 49

// 3. Khai báo 1 function để nhập vào a từ bàn phím, tiếp tục nhập đến khi a là một số lớn hơn 0. Đầu ra là giá trị số vừa nhập.
// function inputPositiveNumber() {
//   let a;
//   do {
//     a = parseFloat(prompt("Nhập vào một số lớn hơn 0:"));
//   } while (isNaN(a) || a <= 0);
//   return a;
// }

// Gọi hàm
// const positiveNumber = inputPositiveNumber();
// console.log("Số vừa nhập: ", positiveNumber);

// Thực hành
// 1. Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0).
// Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.

// function findRoots(a, b, c) {
//   if (a === 0) {
//     throw new Error("a không được bằng 0");
//   }
//   const discriminant = b * b - 4 * a * c;
//   if (discriminant < 0) {
//     return ["Phương trình vô nghiệm"];
//   } else if (discriminant === 0) {
//     return [-b / (2 * a)];
//   } else {
//     const sqrtDiscriminant = Math.sqrt(discriminant);
//     return [
//       (-b + sqrtDiscriminant) / (2 * a),
//       (-b - sqrtDiscriminant) / (2 * a),
//     ];
//   }
// }

// // Gọi hàm
// try {
//   console.log("Nghiệm của phương trình là: ", findRoots(1, -3, 2)); // Output: [2, 1]
//   console.log("Nghiệm của phương trình là: ", findRoots(1, 2, 3)); // Output: ["Phương trình vô nghiệm"]
//   console.log("Nghiệm của phương trình là: ", findRoots(1, 2, 1)); // Output: [-1]
//   console.log("Nghiệm của phương trình là: ", findRoots(0, 2, 1)); // Throws Error
// } catch (error) {
//   console.error(error.message);
// }
// 2. Khai báo 1 function với đầu vào là 3 số a, b, c. Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không.
//  Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.
// function isTriangle(a, b, c) {
//   return a + b > c && a + c > b && b + c > a;
// }

// Gọi hàm
// console.log(isTriangle(3, 4, 5)); // true
// console.log(isTriangle(1, 2, 3)); // false
// 3. Khai báo 1 function với đầu vào là day, month, year. Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.
// function isValidDate(day, month, year) {
//   const date = new Date(year, month - 1, day);
//   return (
//     date.getFullYear() === year &&
//     date.getMonth() === month - 1 &&
//     date.getDate() === day
//   );
// }

// // Gọi hàm
// console.log(isValidDate(29, 2, 2024)); // true (năm nhuận)
// console.log(isValidDate(31, 4, 2023)); // false (tháng 4 chỉ có 30 ngày)
// 4. Cho bộ dữ liệu về users như sau: data.js
// -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// -Đếm số lượng user có age > 50.
// -Đếm số lượng user đã kết hôn và chưa kết hôn.
// -Đếm số lượng user theo từng ngành nghề tương ứng.
//     Output:
//     {
//         "Dentist": 5,
//         "Developer": 13,
//         "Doctor": 6,
//         "Farmer": 8,
//         "Project Manager": 5,
//         "Teacher": 9,
//         "Worker" : 4
//     }
// Sample users array
// Import dữ liệu từ file data.js
const users = require("./data.js");

// 1. Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
function findUserById(users, n) {
  if (!Array.isArray(users)) {
    return "Dữ liệu users không hợp lệ";
  }
  return users.find((user) => user.id === n) || "Không tìm thấy user";
}

// Gọi hàm
console.log("User có id = 5:", findUserById(users, 5));

// 2. Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword
function findEmailsByKeyword(users, keyword) {
  return users
    .filter((user) =>
      (user.first_name + " " + user.last_name)
        .toLowerCase()
        .includes(keyword.toLowerCase())
    )
    .map((user) => user.email);
}

// Gọi hàm
console.log("Emails chứa keyword 'John':", findEmailsByKeyword(users, "John"));

// 3. Đếm số lượng user có age > 50
function countUsersAboveAge(users, age) {
  return users.filter((user) => user.age > age).length;
}

// Gọi hàm
console.log("Số lượng user có age > 50:", countUsersAboveAge(users, 50));

// 4. Đếm số lượng user đã kết hôn và chưa kết hôn
function countMaritalStatus(users) {
  return users.reduce(
    (acc, user) => {
      if (user.is_married) {
        acc.married++;
      } else {
        acc.single++;
      }
      return acc;
    },
    { married: 0, single: 0 }
  );
}

// Gọi hàm
console.log(
  "Số lượng user đã kết hôn và chưa kết hôn:",
  countMaritalStatus(users)
);

// 5. Đếm số lượng user theo từng ngành nghề tương ứng
function countUsersByJob(users) {
  return users.reduce((acc, user) => {
    acc[user.job] = (acc[user.job] || 0) + 1;
    return acc;
  }, {});
}

// Gọi hàm
console.log("Số lượng user theo từng ngành nghề:", countUsersByJob(users));
