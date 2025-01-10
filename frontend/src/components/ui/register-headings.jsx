const RegisterHeading = ({ heading, textSize }) => {
    return (
        <div className={`bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] bg-clip-text text-transparent font-bold`}>
            <h2 className={`${textSize} sm:text-3xl mb-2`}>{heading.toUpperCase()}</h2>
        </div>
    )
}

export default RegisterHeading;