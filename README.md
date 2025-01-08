# Cấu trúc dự án

**config/:**

Tầng lưu trữ các thông tin các cấu hình của ứng dụng (oidc).

**data/:**

Chứa các logic liên quan đến việc lấy và lưu trữ dữ liệu, thường liên quan đến API và các thao tác với cơ sở dữ liệu.

**domain/**

Chứa các logic nghiệp vụ (business logic) và các mô hình (model) của ứng dụng.

- types: Chứa types cần thiết cho typescript.
- useCases: Chứa các logic

**presentation/**

Chứa các thành phần giao diện người dùng (UI) và các giao diện tương tác với người dùng.
