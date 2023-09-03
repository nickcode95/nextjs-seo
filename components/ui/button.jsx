export default function Button (props) {
    return (
        <div>
            <button className={`mx-auto ${props.color} text-sm ${props.border} py-1 px-2 rounded-full`}type="button">{props.text}</button>
        </div>
    )
}