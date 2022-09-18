import { App } from "vue";
import FButton from "./Button/Button";
import FIcon from "./icon";

// 导出单独组建
export { FButton, FIcon };

// 编写一个插件, 实现一个install 方法

export default {
  install(app: App): void {
    // app.component(FButton.name, FButton);
    app.component(FIcon.name, FIcon);
  },
};
