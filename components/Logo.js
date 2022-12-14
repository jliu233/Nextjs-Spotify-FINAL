import Image from 'next/image'

const Logo = ({ color = $color_primary, size = 1 }) => {
    return <Image 
        src={`/images/spotify-logo-${color}.svg`}
        alt="Spotify Logo"
        width={63 * size}
        height={20 * size}
        //layout="responsive"
    />
}
export default Logo;