import { create } from 'zustand'; 
import { useShallow } from 'zustand/react/shallow'

const useFeedbackStore = create((set) => ({
    goodCount: 0,
    neutralCount: 0,
    badCount: 0,

    actions: {
        incrementGood: () => set((state) => ({goodCount: state.goodCount + 1})),
        incrementNeutral: () => set((state) => ({neutralCount: state.neutralCount + 1})),
        incrementBad: () => set((state) => ({badCount: state.badCount + 1}))
    },
}))

export const useCounters = () => useFeedbackStore( 
    useShallow((state) => ({
        goodCount: state.goodCount, 
        neutralCount: state.neutralCount, 
        badCount: state.badCount,
    })) 
)
export const useActions = () => useFeedbackStore(state => state.actions)