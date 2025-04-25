function Store() {
    return (
        <div className="bg-gray-600">

            <div className="flex justify-between bg-blue-950 text-white items-center">
                <div className="font-bold text-[24px] p-4 "> Blogs</div>
                <div className="text-1xl font-semibold">
                    <span className="mr-3">Login</span>
                    <span>Register</span>
                </div>
            </div>

            <div className="bg-white">
                <div>Blogs!</div>
                <div>Publish your passion your way...</div>
                <hr></hr>
                <div>
                <button className="bg-blue-950">Login</button>
                <button className="bg-blue-950">Register</button>
            </div>
            </div>
           
        </div>

    )
}
export default Store;