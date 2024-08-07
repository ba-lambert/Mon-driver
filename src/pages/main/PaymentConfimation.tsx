import { useLocation } from 'react-router-dom';

const PaymentConfirmation = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const orderTrackingId = queryParams.get('OrderTrackingId');
    const orderMerchantReference = queryParams.get('OrderMerchantReference');

    return (
        <div className='h-[70vh] justify-center items-center w-full max-w-2xl mx-auto'>
            <h1 className='text-2xl font-bold mb-4'>Payment Confirmation Page</h1>
            <p><strong>Order Tracking ID:</strong> {orderTrackingId}</p>
            <p><strong>Order Merchant Reference:</strong> {orderMerchantReference}</p>
        </div>
    );
};

export default PaymentConfirmation;
