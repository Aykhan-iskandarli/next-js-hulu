import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { BadgeCheckIcon, 
    CollectionIcon, 
    HomeIcon, 
    LightningBoltIcon, 
    SearchIcon, 
    UserIcon } from '@heroicons/react/outline'

const Header = () => {
    return (
        <header className="flex flex-col justify-between items-center 
        sm:flex-row m-5 h-auto">
           <div className="flex flex-grow justify-evenly max-w-2xl">
           <HeaderItem title="HOME" Icon={HomeIcon} />
            <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
            <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
            <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
            <HeaderItem title="SEARCH" Icon={SearchIcon} />
            <HeaderItem title="ACCAOUNT" Icon={UserIcon} />
           </div>
            <Image
                className="object-fit"
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header
