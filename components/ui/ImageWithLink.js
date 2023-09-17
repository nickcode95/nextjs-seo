import Image from 'next/image'


export default function ImageWithLink(props) {
    return (
        <div className='flex-col pb-12'>                
                <div className='flex mx-auto'>
                    <a href={props.href} target='_blank' rel="noopener noreferrer">
                        <Image src={props.src} alt={props.alt} height={400} width={400} />
                    </a>
                </div>
            </div>
    )
}