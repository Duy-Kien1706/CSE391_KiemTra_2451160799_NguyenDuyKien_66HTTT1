import { useState } from "react"

export default function ProductList( { products } ) {
    return (
        <>

            <div className="d-flex justify-content-between mt-3">
                <div className="d-flex gap-4 ms-3">
                    <button className="btn btn-primary" style={{ borderRadius: "20px", padding: "8px 24px" }}>Tất cả</button>
                    <button
                        className="btn"
                        style={{ borderRadius: "20px", padding: "10px 4px", border: "1px solid #f0f0f0", color: "gray" }}>Chưa bắt đầu</button>
                    <button
                        className="btn"
                        style={{ borderRadius: "20px", padding: "10px 4px", border: "1px solid #f0f0f0", color: "gray" }}>Đang triển khai</button>
                    <button
                        className="btn"
                        style={{ borderRadius: "20px", padding: "10px 4px", border: "1px solid #f0f0f0", color: "gray" }}>Hoàn thành</button>
                </div>
                <button className="btn btn-primary me-3" style = {{padding: "1px 8px"}} >{products.length} Hồ sơ</button>
            </div>

            

            {products.map( ( product ) => {
                return (
                    <div class="card">
                        <div class="card-header">
                            <div class="title">{product.ten_san_pham}</div>
                            <span class="badge success">{product.trang_thai}</span>
                        </div>

                        <div class="location">
                            {product.loai}
                        </div>

                        <div class="description">
                            {product.mo_ta}
                        </div>
                    </div>
                )
            } )}



        </>
    )
}




