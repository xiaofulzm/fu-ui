

import { createApp } from "vue/dist/vue.esm-browser";

import FuUI from "./entry";

console.log(FuUI);


createApp({
    template:`
    <div>
        <FButton color="blue" icon="search" >蓝色按钮</FButton>
        <FButton color="pink" icon="edit" >粉色按钮</FButton>
        <FButton color="yellow" icon="check" >黄色按钮</FButton>
        <FButton color="red" icon="delete" >红色按钮</FButton>
        <FButton color="green" icon="message" >红色按钮</FButton>
    </div>
    <div>
        <FButton size="small" >小按钮</FButton>
        <FButton size="medium" >中按钮</FButton>
        <FButton size="large" >大按钮</FButton>
    </div>
    <div>
        <FIcon  icon="search" ></FIcon>
        <FIcon  icon="edit" ></FIcon>
        <FIcon  icon="check" ></FIcon>
        <FIcon  icon="delete" ></FIcon>
        <FIcon  icon="message" ></FIcon>
    </div>
    `
}).use(FuUI).mount("#app")