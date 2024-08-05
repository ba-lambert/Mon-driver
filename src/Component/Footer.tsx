import { GrGroup } from 'react-icons/gr';

const Footer = () => {
    return (
      <div className="relative flex w-full items-center justify-center">
        <div className="bg-green-400 rounded-lg p-6 w-full md:w-2/3 lg:w-1/2 mx-auto sm:mb-8 mb-32 absolute bottom-[620px] sm:bottom-[370px]">
          <h3 className="text-white text-lg mb-2">Subscribe to our updates</h3>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your e-mail"
              className="bg-transparent border-b border-white flex-1 py-2 px-3 text-white placeholder-white outline-none"
            />
            <button className="bg-blue-800 text-white py-2 px-4 rounded">
              Send
            </button>
          </div>
        </div>
          <div className='bg-blue-900 flex w-full'>
        <footer className="max-w-screen-lg mx-auto sm:mt-0 mt-4 text-white pt-28 pb-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="">
                <h4 className="text-green-400 mb-4">Important links:</h4>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="text-white hover:underline">
                      Hire a driver
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-white hover:underline">
                      Book a drive
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-white hover:underline">
                      Sign up as a driver
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-white hover:underline">
                      Drivers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-white hover:underline">
                      Our fleet
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-white hover:underline">
                      About us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-white hover:underline">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mr-11">
                <h4 className="text-green-400 mb-4">Our services:</h4>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="text-white hover:underline">
                      Drivers for hire
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-white hover:underline">
                      Corporate events drivers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-white hover:underline">
                      Drivers management
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-white hover:underline">
                      Drivers training
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-white hover:underline">
                      VIP Motorcade (Coming soon)
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center mr-48">
                <h4 className="text-green-400 mb-4">Join our community</h4>
                <div className="text-green-400 p-3 border-2 border-green-400 rounded-full">
                  <GrGroup size={20} />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-green-400 pt-4">
              <p className="text-green-400 text-sm">
                &copy; 2024 MonChauffeur. All rights reserved
              </p>
              <p className="text-green-400 text-sm">Developed by COM</p>
            </div>
          </div>
        </footer>
          </div>
      </div>
    );
};

export default Footer;
