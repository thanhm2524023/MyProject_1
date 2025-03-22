const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danh sách sinh viên</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
    </style>
</head>
<body>
    <h2>Bảng Thông Tin Cá Nhân</h2>
    <table>
        <thead>
            <tr>
                <th>MSHV</th>
                <th>Họ tên</th>
                <th>Ngày sinh</th>
                <th>Quê quán</th>
                <th>Email</th>
                <th>SĐT</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>M2524023</td>
                <td>Ngô Quốc Thanh</td>
                <td>02/05/1994</td>
                <td>Sóc Trăng</td>
                <td>thanhm2524023@gstudent.ctu.edu.vn</td>
                <td>0123456789</td>
            </tr>
            <tr>
                <td>M2524025</td>
                <td>Trần Minh Trí</td>
                <td>11/06/1999</td>
                <td>Sóc Trăng</td>
                <td>trim2524025@gstudent.ctu.edu.vn</td>
                <td>0124568932</td>
            </tr>
            <!-- Bạn có thể thêm nhiều hàng tương tự tại đây -->
        </tbody>
    </table>
</body>
</html>
`);
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
