const RegisterHeading = ({ heading, textSize }) => {
    return (
        <div className={`bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_93.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold`}>
            <h2 className={`${textSize} sm:text-3xl mb-2`}>{heading.toUpperCase()}</h2>
        </div>
    )
}

export default RegisterHeading;