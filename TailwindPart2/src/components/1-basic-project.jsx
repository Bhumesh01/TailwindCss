function SidebarClass1(){
    return(
        <div className="h-screen flex">
            <div className="transition-all ease-in-out duration-150 bg-red-200 hover:bg-yellow-200 p-4 hover:p-8 hover:font-bold sm:w-36 w-0 duration-300 md:w-96">
                SideBar
            </div>
            <div className="bg-green-200 flex-4">
                Content
            </div>
        </div>
    )
}
export default SidebarClass1