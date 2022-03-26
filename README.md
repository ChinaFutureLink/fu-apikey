# fu apikey

## 使用指南

### 安装

```shell
npm install fu-apikey
```

### 使用示例

```javascript
const apikey = require("fu-apikey");

apikey.setSalt("Your salt")

apikey.encode({url: "/pathname", method: "GET", params: {a: 1, b: 2}});

apikey.encode({url: "/pathname", method: "POST", data: {a: 1, b: 2}});
```