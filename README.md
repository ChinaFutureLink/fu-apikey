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

apikey.encode({url: "/pathname", method: "POST", params: {a: 1, b: 2}});
```