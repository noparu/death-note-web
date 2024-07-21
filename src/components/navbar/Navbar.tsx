const Navbar = () => {
    return (
        <div className="fixed left-0 top-0 w-full h-[150px] z-20">
            <div className="max-w-[187vh] mx-auto h-full bg-gradient-to-b from-black via-black/70 to-black-0 flex items-center justify-between px-[12vh]">
                <div className="text-white">DeathNote</div>

                <div className="text-white -mt-3">
                    <ul className="flex items-center gap-4">
                        <li>About</li>
                        <li>Mission</li>
                        <li>Contact Us</li>
                        <li>Kira-Website</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
