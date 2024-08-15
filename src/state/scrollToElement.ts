import { create } from 'zustand'

type State = {
  elementName: string
}

type Action = {
  updateElementName: (elementName: State['elementName']) => void
}

export const useScrollToElement = create<State & Action>((set) => ({
  elementName: '',
  updateElementName: (elementName) => set(() => ({ elementName: elementName })),
}))
