const Profile = ()=>{
    return (
        <div className="flex justify-center items-center space-x-2">
            <div className='flex flex-col justify-center items-center'>
                <p className='text-xs font-semibold text-gray-800'>Mugisha Eddy</p>
                <span className='text-xs font-light text-blue-900'>Admin</span>
            </div>
        <div className='h-10 rounded-full w-10 border-blue-950 border-2 cursor-pointer'>
            <img src='https://www.musicinafrica.net/sites/default/files/images/artist_profile/201508/meddy.jpg' alt='user profile' className='h-full rounded-full w-full object-cover' />
        </div>
        </div>
    )
}
export default Profile;