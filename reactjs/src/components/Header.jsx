export default function Header() {
    return (
        <div 
            className="px-4 py-4 text-center text-white mb-4" 
            style={{ 
                background: "linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)",
                borderRadius: "0 0 16px 16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
        >
            <h2 className="fw-bold d-flex align-items-center justify-content-center gap-2">
                 Hệ thống quản lý hồ sơ chuyển đổi số
            </h2>
            <p className="mb-0 opacity-90" style={{ fontSize: "1.1rem", fontWeight: "300" }}>
                Sở Giáo dục & Đào tạo — Ứng dụng quản lý tiến trình chuyển đổi số các trường học
            </p>
        </div>
    );
}