function Button({text, style}){

    return(
        <button type="submit" style={style} className="btn text-amber-800 hover:bg-sky-700">
            {text}
        </button>
    )

}

export default Button;