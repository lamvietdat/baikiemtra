import React from 'react';
import axios from '../api/api';

export default function LvdSinhVienList({ renderlvdSinhVienList, onlvdDelete }) {
    console.log("lvdSinhVienList:", renderlvdSinhVienList);

    const lvdHandleDelete = async (param) => {
        if (window.confirm("Bạn có muốn xóa không?")) {
            try {
                const response = await axios.delete("lvdSinhVien/" + param.MaSV);
                console.log("Delete response:", response);
                onlvdDelete();
            } catch (error) {
                console.error("Error deleting student:", error);
            }
        }
    };

    // Render the list of students
    let lvdElementStudent = renderlvdSinhVienList.map((LVDSinhVien, index) => (
        <tr key={index}>
            <td>{LVDSinhVien.lvdMaSV}</td>
            <td>{LVDSinhVien.lvdHoSV}</td>
            <td>{LVDSinhVien.lvdTenSV}</td>
            <td>{LVDSinhVien.lvdPhai ? 'Nam' : 'Nữ'}</td>
            <td>{LVDSinhVien.lvdNgaySinh}</td>
            <td>{LVDSinhVien.lvdNoiSinh}</td>
            <td>{LVDSinhVien.lvdMaKH}</td>
            <td>{LVDSinhVien.lvdHocBong}</td>
            <td>{LVDSinhVien.lvdDiemTrungBinh}</td>
            <td>
                <button className='btn btn-success'>Edit</button>
                <button className='btn btn-danger' onClick={() => lvdHandleDelete(LVDSinhVien)}>Remove</button>
            </td>
        </tr>
    ));

    return (
        <div className='row'>
            <div className='col-md-12'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>MaSV</th>
                            <th>HoSV</th>
                            <th>TenSV</th>
                            <th>Phai</th>
                            <th>NgaySinh</th>
                            <th>NoiSinh</th>
                            <th>MaKH</th>
                            <th>HocBong</th>
                            <th>DiemTrungBinh</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lvdElementStudent}
                    </tbody>
                </table>
            </div>
        </div>
    );
}