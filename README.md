# Cấu trúc dự án

**View Layer (app):**

Đây là nơi chứa các component giao diện người dùng (UI components) mà người dùng tương tác trực tiếp. Các file trong thư mục này có thể là các trang (page components) hoặc các component con được tái sử dụng.

**UseCase Layer (/usecases):**

Chứa các logic nghiệp vụ cụ thể của ứng dụng. Các hàm ở đây sẽ thực hiện công việc như xử lý dữ liệu, các tác vụ mà UI sẽ yêu cầu.

**Repository Layer (/repositories):**

Chứa các lớp quản lý dữ liệu, bao gồm việc gọi API hoặc truy xuất dữ liệu từ các nguồn khác. Các repository này sẽ cung cấp dữ liệu cho các use case.

**Adapter Layer (/adapters):**

Đóng vai trò là cầu nối giữa các repository và use cases, giúp chuyển đổi dữ liệu từ dạng này sang dạng khác nếu cần. Ví dụ: chuyển đổi dữ liệu từ API sang một định dạng mà use case có thể sử dụng.

**Service Layer (/services):**

Chứa các dịch vụ có thể liên quan đến các tính năng của hệ thống, như quản lý xác thực, lưu trữ, thông báo, hoặc bất kỳ logic nào không thuộc về một use case cụ thể.

**Shared Folder:**

Đây là nơi chứa các thành phần dùng chung cho toàn bộ ứng dụng như component UI, các hàm tiện ích (utils), và styles (CSS hoặc styled-components).
