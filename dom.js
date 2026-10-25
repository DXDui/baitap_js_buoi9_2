const btnTuyenSinh = document.getElementById("btnTuyenSinh");

btnTuyenSinh.onclick = function () {
  const diemChuan = Number(document.getElementById("diemChuan").value);
  const diem1 = Number(document.getElementById("diem1").value);
  const diem2 = Number(document.getElementById("diem2").value);
  const diem3 = Number(document.getElementById("diem3").value);

  const khuVuc = document.getElementById("khuVuc").value;
  const doiTuong = document.getElementById("doiTuong").value;

  let diemUuTienKV = 0;
  let diemUuTienDT = 0;

  if (khuVuc === "A") {
    diemUuTienKV = 2;
  } else if (khuVuc === "B") {
    diemUuTienKV = 1;
  } else if (khuVuc === "C") {
    diemUuTienKV = 0.5;
  }

  if (doiTuong === "1") {
    diemUuTienDT = 2.5;
  } else if (doiTuong === "2") {
    diemUuTienDT = 1.5;
  } else if (doiTuong === "3") {
    diemUuTienDT = 1;
  }

  const tongDiem = diem1 + diem2 + diem3 + diemUuTienKV + diemUuTienDT;

  let ketQua = "";

  if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
    ketQua = "Rớt vì có môn đạt 0 điểm.";
  } else if (tongDiem >= diemChuan) {
    ketQua = "Đậu tuyển sinh.";
  } else {
    ketQua = "Rớt vì không đủ điểm chuẩn.";
  }

  const result = document.getElementById("resultTuyenSinh");

  result.innerText = ketQua + " - Tổng điểm: " + tongDiem;

  result.classList.remove(
    "bg-green-200",
    "text-green-800",
    "bg-red-200",
    "text-red-800",
  );

  if (ketQua === "Đậu tuyển sinh.") {
    result.classList.add("bg-green-200", "text-green-800");
  } else {
    result.classList.add("bg-red-200", "text-red-800");
  }
};

// Bai 2

const btnTinhTienDien = document.getElementById("btnTinhTienDien");

btnTinhTienDien.onclick = function () {
  const tenKhachHang = document.getElementById("tenKhachHang").value;
  const soKw = Number(document.getElementById("soKw").value);

  let tienDien = 0;

  if (soKw <= 50) {
    tienDien = soKw * 500;
  } else if (soKw <= 100) {
    tienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }

  const result = document.getElementById("resultTienDien");

  result.innerText =
    "Khách hàng: " +
    tenKhachHang +
    " - Tiền điện: " +
    tienDien.toLocaleString("vi-VN") +
    " VNĐ";

  result.classList.remove("bg-red-200", "text-red-800");

  result.classList.add("bg-green-200", "text-green-800");
};

// bai3

const btnTinhThueTNCN = document.getElementById("btnTinhThueTNCN");

btnTinhThueTNCN.onclick = function () {
  const hoTen = document.getElementById("hoTen").value;
  const thuNhapNam = Number(document.getElementById("thuNhapNam").value);
  const soNguoiPhuThuoc = Number(
    document.getElementById("soNguoiPhuThuoc").value,
  );

  const thuNhapChiuThue = thuNhapNam - 4 - soNguoiPhuThuoc * 1.6;

  let thueSuat = 0;

  if (thuNhapChiuThue <= 60) {
    thueSuat = 5;
  } else if (thuNhapChiuThue <= 120) {
    thueSuat = 10;
  } else if (thuNhapChiuThue <= 210) {
    thueSuat = 15;
  } else if (thuNhapChiuThue <= 384) {
    thueSuat = 20;
  } else if (thuNhapChiuThue <= 624) {
    thueSuat = 25;
  } else if (thuNhapChiuThue <= 960) {
    thueSuat = 30;
  } else {
    thueSuat = 35;
  }

  const tienThue = (Math.max(0, thuNhapChiuThue) * thueSuat) / 100;

  const result = document.getElementById("resultThueTNCN");

  result.innerText =
    "Họ tên: " +
    hoTen +
    " - Thuế phải trả: " +
    tienThue.toLocaleString("vi-VN") +
    " triệu đồng";

  result.classList.remove("bg-red-200", "text-red-800");
  result.classList.add("bg-green-200", "text-green-800");
};

// bai4

const loaiKhachHang = document.getElementById("loaiKhachHang");
const divSoKetNoi = document.getElementById("divSoKetNoi");

// Ẩn/hiện ô số kết nối
loaiKhachHang.onchange = function () {
  divSoKetNoi.classList.toggle("hidden", loaiKhachHang.value !== "doanhnghiep");
};

const btnTinhTienCap = document.getElementById("btnTinhTienCap");

btnTinhTienCap.onclick = function () {
  const maKhachHang = document.getElementById("maKhachHang").value.trim();
  const loai = loaiKhachHang.value;
  const soKetNoi = Number(document.getElementById("soKetNoi").value);
  const soKenh = Number(document.getElementById("soKenhCaoCap").value);

  if (maKhachHang === "" || soKenh < 0 || !Number.isInteger(soKenh)) {
    alert("Vui lòng nhập mã khách hàng và số kênh hợp lệ!");
    return;
  }

  let tienHoaDon = 0;

  if (loai === "nhadan") {
    tienHoaDon = 4.5 + 20.5 + soKenh * 7.5;
  } else {
    if (soKetNoi < 1 || !Number.isInteger(soKetNoi)) {
      alert("Số kết nối phải là số nguyên lớn hơn hoặc bằng 1!");
      return;
    }

    tienHoaDon = 15 + 75 + Math.max(0, soKetNoi - 10) * 5 + soKenh * 50;
  }

  const result = document.getElementById("resultTienCap");

  result.innerText =
    "Mã khách hàng: " + maKhachHang + " - Tổng tiền: $" + tienHoaDon.toFixed(2);

  result.classList.remove("bg-red-200", "text-red-800");
  result.classList.add("bg-green-200", "text-green-800");
};
