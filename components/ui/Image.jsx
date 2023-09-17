import Image from 'next/image'

export default function Img(props) {
    return (
        <div>
            <Image src={props.src}
                width={0}
                height={0}
                sizes={props.sizes}
                style={{ width: '100%', height: 'auto' }}
                alt={props.alt}
            />
        </div>
    )
}