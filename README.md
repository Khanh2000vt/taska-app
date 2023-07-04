# Base React Native 0.71

Đây là một base react native do Nguyễn Ngọc Khánh dựng. Base được dựa trên các nguồn khác nhau.

# Một số lưu lý khi bắt đầu

## Thư viện: babel-plugin-module-resolver

- Link github: [ở đây](https://github.com/tleunen/babel-plugin-module-resolver)
- Chỉnh sửa file `babel.config.js` và file `tsconfig.json` giống như base.

## Thư viện: react-native-svg

- Link github: [ở đây](https://github.com/software-mansion/react-native-svg)

> Vì mobile không hiện thị trực tiếp file .svg ra ngoài màn hình. Nên cần thư viện chuyển đổi.

**Có hai cách hiển thị file .svg trên mobile thường dùng:**

1.  Cách 1: Sử dụng với file .svg .

```js
import ArrowDown from './arrow-down.svg';
```

Muốn sử dụng cách này thì tham khảo: https://github.com/software-mansion/react-native-svg/blob/main/USAGE.md#use-with-svg-files

Tham khảo: `src/assets/svgs/index.tsx`

2.  Cách 2: Chuyển đổi sang react native component

- Bước 1: Copy as SVG
- Bước 2: Vào trang: https://transform.tools/svg-to-react-native và dán SVG. Ta sẽ thấy được Component của ảnh SVG.

Tham khảo: `src/assets/svgs/components/index.tsx`

### Lưu ý:

- Tham khảo các file: `metro.config.js`, `declarations.d.ts` và `.svgrrc`
- Hiện tại base này đang xử lý file .svg như sau:
  - Những file .svg nào không thay đổi màu sắc, kích thước trong quá trình code app thì sử dụng theo **Cách 1.**
  - Những file .svg nào có thay đổi màu sắc, kích thước trong quá trình code app thì sử dụng theo **Cách 2.**

> File `.svgrrc` cũng được dùng để thay đổi màu sắc (fill) của file SVG. Nhưng thực tế khi sử dụng thay đổi màu bằng cách này, có một số SVG bị mất nét hoặc mỏng nét. **_Nếu có cách giải quyết thì ping._**

## Font chữ

- Thêm file `react-native.config.js` như base.

```js
module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: ['./src/assets/fonts/'], // đường dẫn đến thư mục font chữ
};
```

Trong đó: `assets: [ĐƯỜNG DẪN ĐẾN THƯ MỤC CHỨA CÁC FONT CHỮ]`
Khi muốn thêm font chữ. Ta sử dụng lệnh sau:

```
npx react-native-asset
```

> Có thể khi chạy lệnh này xong bị lỗi app. Nên là trước khi chạy lệnh này. Nên xoá data app ở máy ảo.

## Debug ở Chrome

Với các React Native phiên bản `>0.69` thì mặc định sẽ dùng **Hermes**. Vì vậy khi bật chế độ gỡ lỗi ở Chrome sẽ bị thông báo như sau:

```
info Opening flipper://null/Hermesdebuggerrn?device=React%20Native...
error Browser exited with error:, Error: invalid url, missing http/https protocol
```

Cách sửa:

- **IOS:**

Trong file `ios/Podfile`:
Sửa:

```c
use_react_native!(
:path => config[:reactNativePath],
:hermes_enabled => flags[:hermes_enabled],
:fabric_enabled => flags[:fabric_enabled],
:flipper_configuration => flipper_config,
:app_path => "#{Pod::Config.instance.installation_root}/.."
)
```

thành

```c
use_react_native!(
:path => config[:reactNativePath],
:hermes_enabled => false,
:fabric_enabled => flags[:fabric_enabled],
:flipper_configuration => flipper_config,
:app_path => "#{Pod::Config.instance.installation_root}/.."
)
```

- **Android:**

Trong file `android/gradle.properties`
Sửa:

```properties
hermesEnabled=true
```

thành

```properties
hermesEnabled=false
```

> Có thể vị trí của cài đặt hermes khác nhau tuỳ phiên bản. Nhưng ý chính là tắt bỏ nó đi.
