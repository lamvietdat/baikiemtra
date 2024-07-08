import React, { useEffect, useState } from 'react';
import axios from '../api/api';

export default function LvdSinhVienAddOrEdit({ onlvdClose, onlvdSubmitForm, renderStudent }) {
    console.log(renderStudent);

    const [lvdMaSV, setlvdMaSV] = useState(0);
    const [lvdHoSV, setlvdHoSV] = useState("");
    const [lvdTenSV, setlvdTenSV] = useState("");
    const [lvdPhai, setlvdPhai] = useState("");
    const [lvdNgaySinh, setlvdNgaySinh] = useState("");
    const [lvdNoiSinh, setlvdNoiSinh] = useState("");
    const [lvdMaKH, setlvdMaKH] = useState("");
    const [lvdHocBong, setlvdHocBong] = useState("");
    const [lvdDiemTrungBinh, setlvdDiemTrungBinh] = useState("");

    useEffect(() => {
        if (renderStudent) {
            setlvdMaSV(renderStudent.id);
            setlvdHoSV(renderStudent.HoSV);
            setlvdTenSV(renderStudent.TenSV);
            setlvdPhai(renderStudent.Phai);
            setlvdNgaySinh(renderStudent.NgaySinh);
            setlvdNoiSinh(renderStudent.NoiSinh);
            setlvdMaKH(renderStudent.MaKH);
            setlvdHocBong(renderStudent.HocBong);
            setlvdDiemTrungBinh(renderStudent.DiemTrungBinh);
        }
    }, [renderStudent]);

    const lvdHandleClose = () => {
        onlvdClose(false);
    };

    const lvdHandleSubmit = async (event) => {
        event.preventDefault();
        console.log(lvdMaSV, lvdHoSV, lvdTenSV, lvdPhai, lvdNgaySinh, lvdNoiSinh, lvdMaKH, lvdHocBong, lvdDiemTrungBinh);
        let lvdObjectStudent = {
            id: lvdMaSV,
            HoSV: lvdHoSV,
            TenSV: lvdTenSV,
            Phai: lvdPhai,
            NgaySinh: lvdNgaySinh,
            NoiSinh: lvdNoiSinh,
            MaKH: lvdMaKH,
            HocBong: lvdHocBong,
            DiemTrungBinh: lvdDiemTrungBinh
        };
        const lvdRes = await axios.post("lvdStudent", lvdObjectStudent);
        onlvdSubmitForm(false);
    };

    return (
        <div className='border'>
            <div className="input-group mb-3">
                <span className="input-group-text" id="MaSV">MaSV</span>
                <input type="text" className="form-control"
                    name='MaSV' value={lvdMaSV} onChange={(ev) => setlvdMaSV(ev.target.value)}
                    placeholder="MaSV" aria-label="MaSV" aria-describedby="MaSV" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="HoSV">HoSV</span>
                <input type="text" className="form-control"
                    name='HoSV' value={lvdHoSV} onChange={(ev) => setlvdHoSV(ev.target.value)}
                    placeholder="HoSV" aria-label="HoSV" aria-describedby="HoSV" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="TenSV">TenSV</span>
                <input type="text" className="form-control"
                    name='TenSV' value={lvdTenSV} onChange={(ev) => setlvdTenSV(ev.target.value)}
                    placeholder="TenSV" aria-label="TenSV" aria-describedby="TenSV" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="Phai">Phai</span>
                <input type="text" className="form-control"
                    name='Phai' value={lvdPhai} onChange={(ev) => setlvdPhai(ev.target.value)}
                    placeholder="Phai" aria-label="Phai" aria-describedby="Phai" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="NoiSinh">NoiSinh</span>
                <input type="text" className="form-control"
                    name='NoiSinh' value={lvdNoiSinh} onChange={(ev) => setlvdNoiSinh(ev.target.value)}
                    placeholder="NoiSinh" aria-label="NoiSinh" aria-describedby="NoiSinh" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="MaKH">MaKH</span>
                <input type="text" className="form-control"
                    name='MaKH' value={lvdMaKH} onChange={(ev) => setlvdMaKH(ev.target.value)}
                    placeholder="MaKH" aria-label="MaKH" aria-describedby="MaKH" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="HocBong">HocBong</span>
                <input type="text" className="form-control"
                    name='HocBong' value={lvdHocBong} onChange={(ev) => setlvdHocBong(ev.target.value)}
                    placeholder="HocBong" aria-label="HocBong" aria-describedby="HocBong" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="DiemTrungBinh">DiemTrungBinh</span>
                <input type="text" className="form-control"
                    name='DiemTrungBinh' value={lvdDiemTrungBinh} onChange={(ev) => setlvdDiemTrungBinh(ev.target.value)}
                    placeholder="DiemTrungBinh" aria-label="DiemTrungBinh" aria-describedby="DiemTrungBinh" />
            </div>
            
            <button className='btn btn-primary' name='btnlvdSave' onClick={(ev) => lvdHandleSubmit(ev)}>Ghi lai</button>
            <button className='btn btn-danger' onClick={lvdHandleClose}>Dong</button>
        </div>
    );
}