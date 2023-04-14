function StyledButton(props) {
    return (
        <button
            type="button"
            className="mt-8 border-2 dark:border-moon-purple bg-transparent
            border-orange py-2 px-4 rounded-md transition duration-100 
            hover:dark:bg-moon-purple/[0.3] hover:bg-orange/[0.3] flex 
              items-center justify-center gap-1 outline-none dark:text-moon-purple 
              font-semibold text-orange"
            {...props}
        >
            {props.children}
        </button>
    )
}

export default StyledButton
