# Taxi Sounds 🚕🔊

Ứng dụng phát âm thanh thông báo và nhạc hiệu chuyên nghiệp dành cho tài xế taxi và xe dịch vụ công nghệ. Ứng dụng tích hợp công nghệ chuyển đổi văn bản thành giọng nói (Text-To-Speech) và trí tuệ nhân tạo Gemini để hỗ trợ tài xế giao tiếp với hành khách một cách lịch sự, tự động và chuyên nghiệp nhất.

---

## ✨ Tính năng nổi bật

*   **🎵 Nhạc hiệu thông báo chuyên nghiệp:**
    *   Tích hợp sẵn các âm hiệu thông báo đa dạng.
    *   Tùy chọn nhạc hiệu đặc trưng độc quyền từ hãng hàng không **Vietnam Airlines** (`vn_airline.mp3`) để tạo không gian sang trọng như trên khoang máy bay.
*   **🗣️ Phát giọng đọc thông báo tự động:**
    *   Sử dụng công nghệ Text-To-Speech với giọng đọc nữ tiêu chuẩn (Standard Cloud).
    *   Tự động phát nhạc hiệu (Chime) làm tiền đề trước khi đọc lời thoại thông báo.
*   **🤖 Tích hợp Trí tuệ nhân tạo Gemini AI:**
    *   Hỗ trợ ô nhập khóa **Gemini API Key** ngay trong phần Cài đặt của ứng dụng.
    *   Tự động tối ưu, dịch thuật hoặc tạo kịch bản chào mừng hành khách, thông báo giá cước, nhắc nhở an toàn một cách thông minh và chuyên nghiệp dựa trên ngữ cảnh.
*   **📱 Trải nghiệm ứng dụng di động độc lập (Offline):**
    *   Được đóng gói bằng công nghệ **Ionic Capacitor** hiện đại.
    *   Ứng dụng nhúng sẵn toàn bộ giao diện, hiệu ứng và tệp âm thanh bên trong file `.apk`.
    *   **Chạy trực tiếp 100% không cần kết nối máy tính**, tự động hoạt động ngoại tuyến (Offline) khi mất mạng và kết nối thẳng tới Cloud của Google khi có internet.
*   **🎨 Giao diện tối (Dark Mode) cao cấp:**
    *   Thiết kế giao diện hiện đại, dễ thao tác ngay cả khi đang lái xe ban đêm, hạn chế mỏi mắt cho tài xế.

---

## 📂 Cấu trúc thư mục dự án

```text
Taxisound/
├── www/                     # Mã nguồn ứng dụng Web Frontend chính
│   ├── index.html           # Giao diện chính của ứng dụng
│   ├── app.js               # Logic xử lý phát nhạc, Text-To-Speech và gọi Gemini API
│   ├── style.css            # Thiết kế giao diện Dark Mode & các hiệu ứng
│   ├── vn_airline.mp3       # File âm thanh nhạc hiệu Vietnam Airlines
│   ├── manifest.json        # Cấu hình PWA
│   └── service-worker.js    # Quản lý bộ nhớ đệm (caching)
├── android/                 # Thư mục chứa dự án Android Native (Capacitor)
├── package.json             # Các thư viện phụ thuộc và lệnh build
├── capacitor.config.json    # File cấu hình của Ionic Capacitor
└── README.md                # Tài liệu giới thiệu dự án
```

---

## 🛠️ Hướng dẫn cài đặt & Phát triển

### Yêu cầu hệ thống
*   **Node.js** (Phiên bản mới nhất)
*   **Java JDK 21**
*   **Android SDK** (để biên dịch APK)

### 1. Chạy thử nghiệm cục bộ (Development)
Để chạy thử giao diện Web trên máy tính:
```bash
# Cài đặt thư viện
npm install

# Khởi chạy máy chủ nội bộ (cổng 3000)
npm run dev
```
Sau đó truy cập địa chỉ: `http://localhost:3000` trên trình duyệt.

### 2. Biên dịch và Đóng gói file APK cho Android
Để đóng gói lại ứng dụng thành file cài đặt trên điện thoại:
```bash
# Đồng bộ mã nguồn từ www/ vào Android Project
npx cap sync

# Biên dịch ứng dụng sang APK (sử dụng Gradle)
cd android
.\gradlew assembleDebug
```
Tệp cài đặt sau khi biên dịch thành công sẽ nằm tại đường dẫn:
`android/app/build/outputs/apk/debug/app-debug.apk`

---

## 🛡️ Hướng dẫn sử dụng trên điện thoại

1.  Cài đặt file `app-debug.apk` lên điện thoại Android của bạn.
2.  Mở ứng dụng, vào biểu tượng **Cài đặt** (Settings) ở góc màn hình.
3.  Nhập mã **Gemini API Key** của bạn và chọn nhạc hiệu **Vietnam Airlines**.
4.  Quay lại màn hình chính, gõ nội dung thông báo hoặc nhấn nút để ứng dụng tự động phát âm hiệu chuyên nghiệp kèm giọng đọc chuẩn cho hành khách.

---

*Dự án được xây dựng và phát triển độc lập.*
