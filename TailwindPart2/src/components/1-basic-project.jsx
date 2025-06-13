function SidebarClass1(){
    return(
        <div className="h-screen flex">
            <div className="transform-all duration-1000 bg-red-200 hover:bg-yellow-200 p-4 hover:p-8 hover:font-bold sm:flex-1 sm:block hidden duration-300 md:w-[25%]">
                SideBar
            </div>
            <div className="bg-green-200 flex-4">
                Content
            </div>
        </div>
    )
}
export default SidebarClass1