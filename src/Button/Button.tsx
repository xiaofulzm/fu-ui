
import { defineComponent,PropType,toRefs } from "vue";
import "uno.css"

export type IColor = 'black'|'gray'|'red'|'yellow'|'green'|'blue'|'indigo'|'purple'|'pink' // 颜色类型
export type ISize = "small" | "medium" | "large" // 按钮大小

export const props = {
    color:{
        type: String as PropType<IColor>,
        default:'pink' // 默认颜色
    },
    icon: {
        type: String,
        default: "",
    },
    size:{
        type:String as PropType<ISize>,
        default:'medium' 
    }
}

export default defineComponent({
    name:'FButton',
    props,
    setup(props,{slots}){

        // 定义样式大小
        const sizeObj = {
            small:{
                x:"2",
                y:"1.5",
                text:"sm"
            },
            medium: {
                x: "3",
                y: "1.5",
                text: "base",
            },
            large: {
                x: "4",
                y: "1.5",
                text: "lg",
            }
        } 

        return()=><button
            class={`
                m-2
                py-${sizeObj[props.size].y}
                px-${sizeObj[props.size].x}
                font-semibold
                rounded-lg
                shadow-md
                text-white
                text-${sizeObj[props.size].text}
                bg-${props.color}-500
                hover:bg-${props.color}-700
                border-none
                cursor-pointer
                `}
        >
            {props.icon !== ""?<i class={`i-ic-baseline-${props.icon} p-3 m-1` } ></i>:""}
            {slots.default?slots.default():''}
        </button>
    }
})