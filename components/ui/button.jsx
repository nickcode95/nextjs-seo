export default function Button (props) {
    return (
        <>
            <button className={`mx-auto ${props.margin} ${props.color} text-sm border-4 ${props.borderColor} py-1 px-2 rounded-full`}type="button">{props.text}</button>
        </>
    )
}