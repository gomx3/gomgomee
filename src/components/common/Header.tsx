import Star from '../../assets/star.svg?react'
import Menu from './icons/menu/Menu'

export const Header = () => {
    return (
        <div className="flex items-center justify-between my-5">
            <Menu />
            <Star width="50px" height="50px" className="hover:animate-spin-slow" />
            <button>github</button>
        </div>
    )
}
