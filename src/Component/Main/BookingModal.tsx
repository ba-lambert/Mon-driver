 import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useForm, Controller } from "react-hook-form";
import pricingConfig from "../../../pricingConfig.json";

interface BookingModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface PricingConfig {
  single: {
    kigali: number;
    default: number;
  };
  roundtrip: number;
  day: number;
  night: number;
  fullday: number;
  weekly: {
    baseAmount: number;
    weeklyAmount: number;
  };
  monthly: number;
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { control, handleSubmit, watch, getValues, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      driverName: "",
      fromLocation: "",
      toLocation: "",
      region: "kigali",
      tripType: "single",
      numberOfDays: "",
      paymentMethod: "creditcard",
      cardNumber: "",
      confirmPayment: false,
    },
  });

  const [amount, setAmount] = useState(0);
  const [step, setStep] = useState(1);

  const formData = watch();

  useEffect(() => {
    calculateAmount(formData);
  }, [formData]);

  const calculateAmount = (data: typeof formData) => {
    let newAmount = 0;
    const { tripType, region, numberOfDays } = data;
    const config = pricingConfig as PricingConfig;

    if (tripType === "weekly") {
      newAmount = config.weekly.weeklyAmount;
    } else if (tripType === "other") {
      newAmount = (parseInt(numberOfDays) || 0) * 40000;
    } else {
      const tripConfig = config[tripType as keyof PricingConfig];

      if (typeof tripConfig === "number") {
        newAmount = tripConfig;
      } else if (typeof tripConfig === "object") {
        newAmount =
          (tripConfig as any)[region as keyof typeof tripConfig] ||
          (tripConfig as any).default;
      } else {
        newAmount = 0;
      }
    }

    setAmount(newAmount);
  };

  const onSubmit = (data: typeof formData) => {
    console.log("Form Data:", data);
    onRequestClose();
  };

  const handleNext = () => {
    // Validation before moving to the next step
    handleSubmit(() => {
      if (step === 1) {
        setStep(2);
      } else if (step === 2) {
        setStep(3);
      } else if (step === 3) {
        setStep(4);
      }
    })();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="sm:w-1/2 h-auto bg-white  text-black text-xl p-8 rounded-lg mx-auto relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      contentLabel="Book Driver Form"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="absolute top-4 right-4 bg-green-500 text-white font-semibold py-2 px-4 rounded text-lg"
      >
        x
      </button>
      <h2 className="font-bold text-customBlue text-3xl mb-4">Book Driver</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div className="flex flex-col   mb-4">
            <div className="flex sm:flex-row flex-col justify-around">
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold">Name</label>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      className="border border-green-500 rounded focus:border-transparent"
                    />
                  )}
                />
                {errors.name && (
                  <p className="text-green-500 text-sm font-bold italic">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold">Phone Number</label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{ required: "Phone Number is required" }}
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      className="border border-green-500 rounded focus:border-transparent"
                    />
                  )}
                />
                {errors.phoneNumber && (
                  <p className="text-green-500 text-sm font-bold italic">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold">Email</label>
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <input
                    type="email"
                    {...field}
                    className="border border-green-500  rounded focus:border-transparent"
                  />
                )}
              />
              {errors.email && (
                <p className="text-green-500 text-sm font-bold italic">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col mb-4">
            <div className="flex sm:flex-row flex-col justify-between">
              <div className="flex flex-col  mb-4">
                <label className="mb-2 font-bold">Current Location</label>
                <Controller
                  name="fromLocation"
                  control={control}
                  rules={{ required: "Current Location is required" }}
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      className="border border-green-500 rounded focus:border-transparent"
                    />
                  )}
                />
                {errors.fromLocation && (
                  <p className="text-green-500 text-sm font-bold italic">
                    {errors.fromLocation.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold">Destination</label>
                <Controller
                  name="toLocation"
                  control={control}
                  rules={{ required: "Destination is required" }}
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      className="border border-green-500 rounded focus:border-transparent"
                    />
                  )}
                />
                {errors.toLocation && (
                  <p className="text-green-500 text-sm font-bold italic">
                    {errors.toLocation.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold">Driver Name</label>
              <Controller
                name="driverName"
                control={control}
                rules={{ required: "Driver Name is required" }}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="border border-green-500 rounded focus:border-transparent"
                  />
                )}
              />
              {errors.driverName && (
                <p className="text-green-500 text-sm font-bold italic">
                  {errors.driverName.message}
                </p>
              )}
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col mb-4">
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold">Region</label>
              <Controller
                name="region"
                control={control}
                rules={{ required: "Region is required" }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="border text-sm rounded border-green-500 text-black focus:border-transparent"
                  >
                    <option value="kigali">Kigali</option>
                    <option value="upcountry">Upcountry</option>
                  </select>
                )}
              />
              {errors.region && (
                <p className="text-green-500 text-sm font-bold italic">
                  {errors.region.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold">Trip Type</label>
              <Controller
                name="tripType"
                control={control}
                rules={{ required: "Trip Type is required" }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="border rounded border-green-500 sm:text-2xl  text-sm text-black focus:border-transparent"
                  >
                    <option value="single">Single</option>
                    <option value="roundtrip">Roundtrip</option>
                    <option value="day">Day (8 hours)</option>
                    <option value="night">Night (8 hours)</option>
                    <option value="fullday">Full Day (24 hours)</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="other">Other</option>
                  </select>
                )}
              />
              {errors.tripType && (
                <p className="text-green-500 text-sm font-bold italic">
                  {errors.tripType.message}
                </p>
              )}
            </div>
            {formData.tripType === "other" && (
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold">Number of Days</label>
                <Controller
                  name="numberOfDays"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="number"
                      {...field}
                      className="border border-green-500 rounded focus:border-transparent"
                      placeholder="Enter number of days"
                    />
                  )}
                />
              </div>
            )}
          </div>
        )}
        {step === 4 && (
          <div className="flex flex-col mb-4">
            <div className="mb-4">
              <label className="mb-2 text-green-500 text-2xl font-semibold">
                Amount to be Paid: {amount} RWF
              </label>
            </div>
            <div className="flex items-center mb-4">
              <Controller
                name="confirmPayment"
                control={control}
                rules={{ required: "You must confirm payment" }}
                render={({ field }) => (
                  <input type="checkbox" {...field} className="mr-2" />
                )}
              />
              <label className="mb-2">I confirm I am ready to pay before</label>
            </div>
            {errors.confirmPayment && (
              <p className="text-green-500 text-sm font-bold italic">
                {errors.confirmPayment.message}
              </p>
            )}
          </div>
        )}
        <div className="flex justify-around">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="bg-black mr-5 text-white text-lg font-semibold py-2 px-4 rounded"
            >
              Previous
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            className="bg-black w-full text-white font-semibold p-2 text-lg rounded"
          >
            {step === 4 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default BookingModal;
