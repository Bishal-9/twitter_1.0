import Image from "next/image"
import SidebarLink from "./SidebarLink"
import {
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardListIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

const Sidebar = () => {
    return (
        <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
            <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
                <Image
                    src='https://rb.gy/ogau5a'
                    width={30}
                    height={30}
                    alt="twitter icon"
                />
            </div>
            <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
                <SidebarLink text='Home' Icon={HomeIcon} active />
                <SidebarLink text='Explore' Icon={HashtagIcon} />
                <SidebarLink text='Notifications' Icon={BellIcon} />
                <SidebarLink text='Messages' Icon={InboxIcon} />
                <SidebarLink text='Bookmarks' Icon={BookmarkIcon} />
                <SidebarLink text='Lists' Icon={ClipboardListIcon} />
                <SidebarLink text='Profile' Icon={UserIcon} />
                <SidebarLink text='More' Icon={DotsCircleHorizontalIcon} />
            </div>
            <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
                Tweet
            </button>
            <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto">
                <img
                    src='https://avatars.githubusercontent.com/u/63504511?v=4'
                    className="h-10 w-10 rounded-full xl:mr-2.5"
                    alt="profile"
                />
                <div className="hidden xl:inline leading-5">
                    <h4 className="font-bold">Bishal 9</h4>
                    <p className="text-[#6e767d]">@bishal9</p>
                </div>
                <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
            </div>
        </div>
    )
}

export default Sidebar