import fetch from "node-fetch"; // i have used node-fetch library for fecthing response from other server if you  dont want it you can delete it and use simple js fetch 
import dotenv from "dotenv";

dotenv.config();

export const isPinCodeAvailable = async (pincode) => {
  try {
    let headersList = {
      Authorization: `Token ${process.env.DELHIVERY_API_KEY}`,
    };

    let response = await fetch(
      `https://track.delhivery.com/c/api/pin-codes/json/?filter_codes=${pincode}`,
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await response.json();
    return data && data.delivery_codes && data.delivery_codes.length > 0
      ? data
      : false;
  } catch (error) {
    console.error(error);
    return false;
  }
};



// Function to fetch waybill details from Delhivery API 
export const fetchWaybillDetails = async (count) => {
  try {
    let headersList = {
      Authorization: `Token ${process.env.DELHIVERY_API_KEY}`,
      
    };
    let response = await fetch(
      `https://staging-express.delhivery.com/waybill/api/bulk/json/?count=${count}`,
      {
        method: "GET",
        headers: headersList,
      }
    );
    
    console.log("im from fetchwaybilldetails", response)
    let data = await response.json();

    // im checking here  if the response contains waybill details and return accordingly
    return data && data.waybills && data.waybills.length > 0 ? data.waybills : false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
