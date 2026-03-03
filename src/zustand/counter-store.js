
import {create} from "zustand"

export const useCounterStore = create((setState)=> {
    return {
        count: 0,
        increment: () => setState((state) => ({count: state.count + 1})),
        decrement: () => setState((state) => ({count: state.count - 1})),
        increment2: () => setState((state) => ({count: state.count + 2}))
    }
    
})