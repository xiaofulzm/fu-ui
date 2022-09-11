
import { defineComponent} from "vue";


export default defineComponent({
    name:"FIcon",
    props:{
        icon:{
            type:String,
            default: "",
        }
    },
    setup(props,{slots}){
        return()=><i 
            class={`
              py-2
              px-2
              i-ic-baseline-${props.icon}
            `}
        >   
            {slots.default?slots.default():''}
        </i>
    }
})
