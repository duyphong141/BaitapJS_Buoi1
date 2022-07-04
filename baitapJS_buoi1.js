//! Bài 1: Tính tiền lương nhân viên
/**
 * Sơ đồ 3 khối
 * Khối 1: Input
 * luong1Ngay
 * soNgayLam
 * 
 * Khối 2: Quy trình tính toán
 * luongTong = luong1Ngay * soNgayLam
 * 
 * Khối 3: Output
 * luongTong
 * 
 */

 var luong1Ngay = 100000;
 var soNgayLam = 28;
 
 var luongTong = luong1Ngay * soNgayLam;
 console.log('Bài 1: Tiền lương nhân viên 28 ngày là: ', luongTong.toLocaleString() + ' VNĐ');
 
 //! Bài 2: Tính giá trị trung bình  
 /**
  * Sơ đồ 3 khối
  * Input:
  * so1, so2, so3, so4, so5
  * 
  * Output:
  * giaTriTrungBinh
  * 
  * Tính toán:
  * 
  * giaTriTrungBinh = (so1 + so2 + so3 +so4 +so5)/5;
  */
 
 var so1 = 1;
 var so2 = 2;
 var so3 = 3;
 var so4 = 4;
 var so5 = 5;
 
 var giaTriTrungBinh = (so1 + so2 + so3 + so4 + so5)/5;
 console.log('Bài 2: Giá trị trung bình của 5 số 1,2,3,4,5 là: ', giaTriTrungBinh);
 
 //! Bài 3: Quy đổi tiền
 /**
  * Sơ đồ 3 khối
  * Input: gia_1Usd
  * Output: gia_2Usd
  * Tính toán: gia_2Usd = gia_1Usd * 2;
  */
 
 var gia_1Usd = 23500;
 var gia_2Usd = 23500 * 2;
 console.log('Bài 3: Giá 2 đô quy đổi ra là: ', gia_2Usd.toLocaleString() + ' VNĐ');
 
 //! Bài 4: Tính diện tích, chu vi hình chữ nhật
 /**
  * Sơ đồ 3 khối:
  * Input:
  * chieuDai
  * chieuRong
  * 
  * Output:
  * chuVi, dienTich
  * 
  * Tính toán:
  * chuVi = (chieuDai + chieuRong) * 2;
  * dienTich = chieuDai * chieuRong;
  */
 
 var chieuDai = 10;
 var chieuRong = 5;
 var chuVi = (chieuDai + chieuRong) * 2;
 var dienTich = chieuDai * chieuRong;
 console.log('Bài 4: Chu vi hình chữ nhật: ', chuVi);
 console.log('Diện tích hình chữ nhật: ', dienTich);
 
 //! Bài 5: Tính tổng 2 ký số
 /** Sơ đồ 3 khối
  * Input: Nhập vào 1 số có 2 chữ số
  * var number = 23
  * 
  * Tính toán:  Lấy số hàng chục và đơn vị
  * var soHangChuc = Math.floor(number/10);
  * var soHangDonVi = soHangChuc % 10;
  * 
  * Output:
  * tong = soHangChuc + soHangDonVi;
  */
 
 var number = 23;
 var soHangChuc = Math.floor(number/10);
 var soHangDonVi = number % 10;
 var tong = soHangChuc + soHangDonVi;
 console.log('Bài 5: Tổng 2 chữ số 23 là: ', tong);
 
 
 