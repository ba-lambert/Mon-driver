import {ThreeDots} from "react-loader-spinner";

const Loader = () =>{
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#1d4ed8"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
    </div>
    )
}
export default Loader;