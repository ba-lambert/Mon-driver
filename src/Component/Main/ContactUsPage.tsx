  import React from "react";
  import { useForm, Controller } from "react-hook-form";
  //  import p1 from "../../assets/images/p1.jpeg";
  //  import p2 from "../../assets/images/p2.jpeg";
  //  import p3 from "../../assets/images/p3.jpg";
  //  import cr1 from "../../assets/images/caru2.png";

  //  interface ContactPerson {
  //    id: number;
  //    name: string;
  //    position: string;
  //    image: string;
  //    description: string;
  //    contact: string;
  //    email: string;
  //  }

  const ContactUsPage: React.FC = () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      defaultValues: {
        email: "",
        name: "",
        contact: "",
        message: "",
      },
    });

    const onSubmit = (data: any) => {
      console.log(data);
      reset(); // Clear form after submission
    };

    return (
      <div className="min-h-screen max-w-screen-lg mx-auto">
        <div className="flex sm:flex-row flex-wrap justify-between mt-10 mb-10 items-start sm:ml-6 gap-10">
          <div className="w-full lg:w-1/3 sm:mt-28">
            <p className="text-emerald-900 font-semibold italic sm:ml-0 ml-20 text-2xl">
              Contact Us
            </p>
            <p className="text-black font-bold mt-3 text-4xl">
              Corporate Office
            </p>
            <div className="mt-10 text-gray-600 sm:text-2xl text-xl">
              <p>
                Airport avenue, KN 5 RD, Gasabo,
                <br /> Kigali-Rwanda
              </p>
              <p className="mt-2">Email:monchauffeur.rw@gmail.com</p>
              <p className="mt-1">Phone: +250 794 415 787 or 6200</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2">
            <div className="sm:mt-6 text-gray-950 font-bold text-md mb-6  sm:mb-11">
              If you have any questions, comments, or concerns, please use the
              form below to get in touch with us. We value your feedback and
              will get back to you as soon as possible.
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-customBlue bg-opacity-70 p-6 w-auto rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-customGreen mb-4">
                Send a Message
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <div className="w-full">
                    <Controller
                      name="name"
                      control={control}
                      rules={{ required: "Name is required" }}
                      render={({ field }) => (
                        <input
                          placeholder="Name"
                          {...field}
                          className="p-2 w-full rounded"
                        />
                      )}
                    />
                    {errors.name && (
                      <p className="text-green-500 italic font-bold text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="w-full sm:ml-32 ml-10">
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Email address is invalid",
                        },
                      }}
                      render={({ field }) => (
                        <input
                          placeholder="Email"
                          type="email"
                          {...field}
                          className="p-2 w-full rounded"
                        />
                      )}
                    />
                    {errors.email && (
                      <p className="text-green-500 italic font-bold text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <Controller
                    name="contact"
                    control={control}
                    rules={{
                      required: "Contact number is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Contact number must be 10 digits",
                      },
                    }}
                    render={({ field }) => (
                      <input
                        placeholder="Contact Number"
                        {...field}
                        className="p-2 w-full rounded"
                      />
                    )}
                  />
                  {errors.contact && (
                    <p className="text-green-500 italic font-bold text-sm mt-1">
                      {errors.contact.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-customGreen">Message</label>
                  <Controller
                    name="message"
                    control={control}
                    rules={{ required: "Message is required" }}
                    render={({ field }) => (
                      <textarea {...field} className="p-2 w-full rounded" />
                    )}
                  />
                  {errors.message && (
                    <p className="text-green-500 italic font-bold text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-black text-white py-2 px-4 rounded"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default ContactUsPage;
