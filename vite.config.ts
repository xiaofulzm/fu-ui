/// <reference types="vitest" />

import { defineConfig,Plugin,UserConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";

// Unocss
import Unocss from "./config/unocss";

// 配置[导出模块类型]并确定导出的文件名
const rollupOptions= {
    external:["vue","vue-router"],
    output:{
        assetFileNames: `assets/[name].css`, // 修改打包后的css名称
        globals:{
            vue:"Vue"
        }
    }
}

export const config = {
    plugins:[
        vue() as  Plugin,
        //添加jsx插件
        vueJSX({}) as Plugin,
        // 添加Unocss插件
        Unocss() as Plugin[]
    ],
    // 添加库模式配置
    build:{
        rollupOptions,
        minify: 'terser', // boolean | 'terser' | 'esbuild'
        sourcemap: true, // 输出单独 source文件
        reportCompressedSize: true,  // 生成压缩大小报告
        cssCodeSplit: true,// cssCodeSplit 这个选项是为了决定在编译的时候是否要独立输出css。显然这里面应该选择为 true
        lib:{
            entry:"./src/entry.ts",
            name:"FuUI",
            fileName:"fu-ui",
            formats:["es","umd","iife"] // 导出模块格式
        },
        outDir: "./dist",
    },
    // 测试
    test:{
        globals: true,
        environment: 'happy-dom',
        // 支持tsx组件，很关键
        transformMode: {
        web: [/.[tj]sx$/]
        }
    },
}


export default defineConfig(config as UserConfig);


