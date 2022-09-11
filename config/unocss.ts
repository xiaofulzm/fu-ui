
// Unocss
import {
    presetUno,
    presetAttributify,
    presetIcons // 添加图标预设
} from "unocss";

import Unocss from "unocss/vite";

// 按钮颜色
const colors = [
    'black',
    'gray',
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink'
]

// 图标样式
const icons= [
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share"
]

// 字体大小
const fSizes = ["xs", "sm", "base", "lg", "xl", "2xl", "3xl"]

const safelist = [
    ...colors.map((v)=>`bg-${v}-500`),
    ...colors.map((v)=>`hover:bg-${v}-700`),
    ...icons.map(v=>`i-ic-baseline-${v}`),
    ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
    ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
    ...fSizes.map((v) => `text-${v}`),
]

export default() => 
    Unocss({
        safelist,
           // 预设
        presets:[
            presetUno(),
            presetAttributify(),
            presetIcons()
        ]
    })
