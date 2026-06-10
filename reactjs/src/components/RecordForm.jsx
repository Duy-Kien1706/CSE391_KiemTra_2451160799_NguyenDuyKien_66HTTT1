import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Form({products,setProduct}) {
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        id: "",
        ten_san_pham: "",
        trang_thai: "",
        mo_ta: ""
    });

    const handleChange = (e)=>{
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleAdd = (e)=>{
        e.preventDefault();
        setProduct(
            [
                ...products,
                {
                    ...formData
                }
            ]
        );

    }


    return (
        <>
            <h2 style = {{color: "#0d6efd",padding: "20px"}}>Thêm hồ sơ mới</h2>

            <form className="mt-4" style={{ padding: "20px" }} onSubmit = {handleAdd}>
                <div className="mb-3">
                    <label className="form-label">Tên trường</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="VD: Trường THPT Nguyễn Huệ" 
                    name = "ten_san_pham"
                    onChange = {handleChange}
                    required />
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledSelect" className="form-label">Đơn vị quản lí</label>
                    <select id="disabledSelect" className="form-select" name = "loai" onChange = {handleChange} required>
                        <option selected disabled value = "">--Chọn đơn vị--</option>
                        <option>Phòng GD&ĐT TP.Thủy Lợi</option>
                        <option>Phòng GD&ĐT H.Thái Nguyên</option>
                        <option>Phòng GD&ĐT Q.Hồng Bàng</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label" >Trạng thái chuyển đổi</label>
                    <select className="form-select" name = "trang_thai" onChange = {handleChange} required>
                        <option value="" selected disabled>--Chọn trạng thái--</option>
                        <option>Chưa bắt đầu</option>
                        <option>Đang triển khai</option>
                        <option>Hoàn thành</option>
                    </select>
                </div>


                <div className="mb-3">
                    <label className="form-label">Mô tả tiến độ</label>
                    <textarea 
                    type="text" 
                    className="form-control" 
                    placeholder="Mô tả tình hình chuyển đổi số..." 
                    name = "mo_ta"
                    onChange = {handleChange}
                    required />
                </div>


                    <button className="btn btn-primary" type = "submit" style = {{width: "100%"}}>Thêm Hồ Sơ</button>
                
            </form>
        </>
    )
}