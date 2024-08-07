 import React from "react";
 import bg from "../../assets/Web Assets/web1-03.png";
 import { useForm, Controller } from "react-hook-form";
 import {
   TextInput,
   Textarea,
   Button,
   Container,
   Group,
   Title,
   Stack,
   Box,
 } from "@mantine/core";

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
     reset();
   };

   return (
     <div className="min-h-screen flex  items-center justify-center pb-32 bg-gray-100">
       <Container size="md" py="2xl" className="bg-white  rounded-lg shadow-lg">
         <Group align="flex-start">
           <Box
             className="flex-1 p-6 bg-cover bg-center rounded-lg text-white"
             style={{
               backgroundImage: `url(${bg})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               height: "50vh",
             }}
           >
            
             <div className="bg-customGreen inset-0 bg-gradient-to-b  from-transparent to-black bg-opacity-80 rounded-t-full flex flex-col p-2 text-center pt-20 mt-20">
               <div>
                 <Title order={2} className="text-white ">
                   Contact Us
                 </Title>
               </div>
               <div>
                 <Title order={1} mt="xl" className="text-white ">
                   Corporate Office
                 </Title>
               </div>
               <div>
                 <Stack mt="xl">
                   <p>Airport avenue, KN 5 RD, Gasabo, Kigali-Rwanda</p>
                   <p>Email: monchauffeur.rw@gmail.com</p>
                   <p>Phone: +250 794 415 787 or 6200</p>
                 </Stack>
               </div>
             </div>
           </Box>

           <Box className="flex-1 pt-24  sm:p-6">
             <Title order={3} mb="md" className="text-gray-800">
               Send a Message
             </Title>
             <form onSubmit={handleSubmit(onSubmit)}>
               <Stack>
                 <Group grow>
                   <Controller
                     name="name"
                     control={control}
                     rules={{ required: "Name is required" }}
                     render={({ field }) => (
                       <TextInput
                         label="Name"
                         placeholder="Name"
                         {...field}
                         error={errors.name?.message}
                       />
                     )}
                   />
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
                       <TextInput
                         label="Email"
                         placeholder="Email"
                         type="email"
                         {...field}
                         error={errors.email?.message}
                       />
                     )}
                   />
                 </Group>

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
                     <TextInput
                       label="Contact Number"
                       placeholder="Contact Number"
                       {...field}
                       error={errors.contact?.message}
                     />
                   )}
                 />

                 <Controller
                   name="message"
                   control={control}
                   rules={{ required: "Message is required" }}
                   render={({ field }) => (
                     <Textarea
                       label="Message"
                       placeholder="Your message..."
                       {...field}
                       error={errors.message?.message}
                     />
                   )}
                 />

                 <Button
                   type="submit"
                   className="bg-green-600 hover:bg-green-700 text-white"
                 >
                   Send Message
                 </Button>
               </Stack>
             </form>
           </Box>
         </Group>
       </Container>
     </div>
   );
 };

 export default ContactUsPage;
