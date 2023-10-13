import React from 'react'
import { SVGProps, Ref, forwardRef, memo } from 'react'

const CloseAddItem = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 24 24"
        {...props}
        ref={ref}
    >
        <title>{"Close 'Add task'"}</title>
        <g fill="none" fillRule="nonzero">
            <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
            <path
                fill="#9c27b0"
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM9.879 8.464 12 10.586l2.121-2.122a1 1 0 1 1 1.415 1.415l-2.122 2.12 2.122 2.122a1 1 0 0 1-1.415 1.415L12 13.414l-2.121 2.122a1 1 0 0 1-1.415-1.415L10.586 12 8.465 9.879a1 1 0 0 1 1.414-1.415Z"
            />
        </g>
    </svg>
)
const ForwardRef = forwardRef(CloseAddItem)
const Memo = memo(ForwardRef)

export { Memo as CloseAddItem }