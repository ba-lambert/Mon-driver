export const renderStars = (rating:number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 1l2.472 6.027H18l-5 3.938 1.914 5.73L10 14.696 5.086 17.695 7 11.965l-5-3.938h5.528z" clipRule="evenodd" />
                </svg>
            );
        } else {
            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 1l2.472 6.027H18l-5 3.938 1.914 5.73L10 14.696 5.086 17.695 7 11.965l-5-3.938h5.528z" clipRule="evenodd" />
                </svg>
            );
        }
    }
    return stars;
};
interface IContact {
    phone: string;
    location: string;
    email: string;
}
interface IProfile {
    image: string;
    name: string;
    bio: string;
    email: string;
    role: string;
    rating: number;
    stars: number;
    status:string;
    lastUpdated: string;
    location: string;
    phone: string;
    country: string;
    contactInfo:IContact;
}

const ProfileCard = ({profile}: {profile: IProfile }) => {
    return (
        <div
            className="flex py-3 sm:py-0 sm:h-[300px] flex-col sm:flex-row rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-900 sm:w-[500px] items-center">
            <img
                className="h-32 w-32 rounded-full sm:h-full sm:w-[210px] object-cover sm:rounded-lg sm:rounded-l-lg"
                src={profile.image}
                alt=""/>

            <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-xl font-xs text-neutral-800 dark:text-neutral-50">
                    {profile.name}
                </h5>
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
                    {profile.bio}
                </p>
                <div className="flex items-center mb-2">
                    <div className="mr-1 flex flex-row">
                        {renderStars(profile.rating)}
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-300">
                        ({profile.rating.toFixed(1)}) {/* Showing average rating */}
                    </p>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-300 mb-2">
                    Status: <span className="font-medium text-neutral-600 dark:text-green-500">{profile.status}</span>
                </p>
                <div className="flex flex-col">
                    <p className="text-xs text-neutral-500 dark:text-neutral-300">
                        Contact Information:
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-200">
                        {profile.contactInfo.email}
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-200">
                        {profile.contactInfo.phone}
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-200">
                        {profile.contactInfo.location}
                    </p>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-300 mt-2">
                    Last updated {profile.lastUpdated}
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
