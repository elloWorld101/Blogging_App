import {atom} from "recoil"

export const disableAtom = atom({
    key: 'disableAtom',
    default: false
})

export const skeletonAtom = atom({
    key: "skeletonAtom",
    default: true
})

export const userAtom = atom({
    key: "userAtom",
    default: ""
})