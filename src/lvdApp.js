import React, { useState, useEffect } from 'react';
import axios from './api/api';
import LvdSinhVienList from './components/lvdSinhVienList';
import LvdSinhVienAddOrEdit from './components/lvdSinhVienAddOrEdit';

const LvdApp = () => {
  const [lvdSinhVienList, setLvdSinhVienList] = useState([]);

  // Hàm để lấy dữ liệu từ API
  const lvdGetAllStudent = async () => {
    try {
      const response = await axios.get("lvdSinhVien");
      console.log("API Data:", response.data);
      setLvdSinhVienList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    lvdGetAllStudent();
    console.log("State Data:", lvdSinhVienList);
  }, []); // Dùng mảng rỗng để effect chỉ chạy một lần khi component mount

  const [lvdSinhVienAddOrEdit, setLvdSinhVienAddOrEdit] = useState(false);

  const lvdInitStudent = {
    lvdHoSV: "Lam",
    lvdTenSV: "Viet Dat",
    lvdPhai: true,
    lvdNgaySinh: 24042004,
    lvdNoiSinh: "Ha Noi",
    lvdMaKH: "CNT",
    lvdHocBong: "99999999999999",
    lvdDiemTrungBinh: "10",
    lvdMaSV: "2210900094"
  }

  const [lvdStudent, setLvdStudent] = useState(lvdInitStudent);

  // Hàm xử lý khi thêm mới
  const lvdHandleAddNew = () => {
    setLvdSinhVienAddOrEdit(true);
  }

  const lvdHandleClose = (param) => {
    setLvdSinhVienAddOrEdit(param);
  }

  const lvdHandleSubmit = (param) => {
    lvdGetAllStudent();
    setLvdSinhVienAddOrEdit(param);
  }

  const lvdHandleDelete = () => {
    lvdGetAllStudent();
  };

  let lvdElementForm = lvdSinhVienAddOrEdit === true ? <LvdSinhVienAddOrEdit renderStudent={lvdStudent} onLvdClose={lvdHandleClose} onLvdSubmitForm={lvdHandleSubmit} /> : null;

  return (
    <div className='container border my-3'>
      <h1>Làm việc với API</h1>
      <hr />
      <LvdSinhVienList renderlvdSinhVienList={lvdSinhVienList} onLvdDelete={lvdHandleDelete} />
      <button className='btn btn-primary' onClick={lvdHandleAddNew}>Thêm mới</button>
      <hr />
      {lvdElementForm}
    </div>
  )
}

export default LvdApp;