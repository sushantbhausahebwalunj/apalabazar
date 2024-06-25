// import React from 'react'

// function Order() {

// const sharedClasses = {
//   bgWhite: 'bg-white',
//   bgZinc700: 'dark:bg-zinc-700',
//   p4: 'p-4',
//   rounded: 'rounded',
//   shadow: 'shadow',
//   flex: 'flex',
//   flexCol: 'flex-col',
//   flexRow: 'flex-row',
//   justifyBetween: 'justify-between',
//   itemsCenter: 'items-center',
//   mb4: 'mb-4',
//   w24: 'w-24',
//   h24: 'h-24',
//   objectCover: 'object-cover',
//   mb2: 'mb-2',
//   mdMr4: 'md:mr-4',
//   mdMb0: 'md:mb-0',
//   textLg: 'text-lg',
//   textXl: 'text-xl',
//   fontSemiBold: 'font-semibold',
//   textZinc500: 'text-zinc-500',
//   darkTextZinc300: 'dark:text-zinc-300',
//   textSm: 'text-sm',
//   textBase: 'text-base',
//   mt2: 'mt-2',
//   textYellow500: 'text-yellow-500',
//   ml2: 'ml-2',
//   textZinc700: 'text-zinc-700',
//   textXs: 'text-xs',
//   mt1: 'mt-1',
//   textBlue500: 'text-blue-500',
//   inlineBlock: 'inline-block',
//   bgGreen100: 'bg-green-100',
//   darkBgGreen900: 'dark:bg-green-900',
//   textGreen700: 'text-green-700',
//   darkTextGreen300: 'dark:text-green-300',
// };
// const ProductCard = ({ imageSrc, altText, title, price, details, status, refundInfo }) => {
//   return (
//     <div className={`${sharedClasses.bgWhite} ${sharedClasses.bgZinc700} ${sharedClasses.p4} ${sharedClasses.rounded} ${sharedClasses.shadow} ${sharedClasses.mb4}`}>
//       <div className={`${sharedClasses.flex} ${sharedClasses.flexCol} md:${sharedClasses.flexRow} ${sharedClasses.itemsCenter}`}>
//         <img src={imageSrc} alt={altText} className={`${sharedClasses.w24} ${sharedClasses.h24} ${sharedClasses.objectCover} ${sharedClasses.mb4} ${sharedClasses.mdMr4} ${sharedClasses.mdMb0}`} />
//         <div className={`${sharedClasses.flex}-1`}>
//           <div className={`${sharedClasses.flex} ${sharedClasses.flexCol} md:${sharedClasses.flexRow} ${sharedClasses.justifyBetween} ${sharedClasses.itemsCenter}`}>
//             <h2 className={`${sharedClasses.textLg} ${sharedClasses.textXl} ${sharedClasses.fontSemiBold}`}>{title}</h2>
//             <span className={`${sharedClasses.textLg} ${sharedClasses.textXl} ${sharedClasses.fontSemiBold}`}>{price}</span>
//           </div>
//           <p className={`${sharedClasses.textZinc500} ${sharedClasses.darkTextZinc300} ${sharedClasses.textSm} ${sharedClasses.textBase}`}>{details}</p>
//           <div className={`${sharedClasses.flex} ${sharedClasses.itemsCenter} ${sharedClasses.mt2}`}>
//             <span className={`${sharedClasses.textYellow500}`}>●</span>
//             <span className={`${sharedClasses.ml2} ${sharedClasses.textSm} ${sharedClasses.textZinc700} ${sharedClasses.darkTextZinc300}`}>{status}</span>
//           </div>
//           <p className={`${sharedClasses.textZinc500} ${sharedClasses.darkTextZinc300} ${sharedClasses.textXs} ${sharedClasses.textSm} ${sharedClasses.mt1}`}>{refundInfo}</p>
//           <a href="#" className={`${sharedClasses.textBlue500} ${sharedClasses.textXs} ${sharedClasses.textSm} ${sharedClasses.mt2} ${sharedClasses.inlineBlock}`}>⭐ Rate & Review Product</a>
//         </div>
//       </div>
//     </div>
//   );
// };

//   return (
//     <div className={`${sharedClasses.p4} ${sharedClasses.bgZinc100} ${sharedClasses.darkBgZinc800}`}>
//     <div className={`${sharedClasses.flex} ${sharedClasses.flexCol} md:${sharedClasses.flexRow} ${sharedClasses.justifyBetween} ${sharedClasses.itemsCenter} ${sharedClasses.mb4}`}>
//       <input type="text" placeholder="Search your orders here" className={`${sharedClasses.p2} border rounded w-full md:max-w-md ${sharedClasses.mb2} ${sharedClasses.mdMb0}`} />
//       <button className={`${sharedClasses.bgBlue500} text-white ${sharedClasses.p2} ${sharedClasses.rounded}`}>🔍 Search Orders</button>
//     </div>
//     <ProductCard
//       imageSrc="https://placehold.co/100x100"
//       altText="Casual Shoes"
//       title="Casual Shoes For Men Sneakers loafers Wh..."
//       price="₹261"
//       details="Color: White Size: 8"
//       status="Refund Completed"
//       refundInfo="You returned this order because the quality was not as expected."
//     />
//     <div className={`${sharedClasses.bgGreen100} ${sharedClasses.darkBgGreen900} ${sharedClasses.p4} ${sharedClasses.rounded} ${sharedClasses.mt4}`}>
//       <p className={`${sharedClasses.textGreen700} ${sharedClasses.darkTextGreen300} ${sharedClasses.fontSemiBold}`}>Refund Completed (Refund ID: 12102993153382082601)</p>
//       <p className={`${sharedClasses.textZinc700} ${sharedClasses.darkTextZinc300} ${sharedClasses.textXs} ${sharedClasses.textSm} ${sharedClasses.mt1}`}>• The money was sent to your Bank Account ending with ********036 on Dec 15, 2023. For any questions, please contact your bank with reference number 334822116751.</p>
//     </div>
//     <ProductCard
//       imageSrc="https://placehold.co/100x100"
//       altText="B 11 Behind the Neck Super Bass Bluetooth"
//       title="B 11 Behind the Neck Super Bass Bluetoot..."
//       price="₹149"
//       details="Color: Red"
//       status="Cancelled on Jun 28, 2023"
//     />
//     <ProductCard
//       imageSrc="https://placehold.co/100x100"
//       altText="B11- Bluetooth red Wireless In Ear Earph"
//       title="B11- Bluetooth red Wireless In Ear Earph..."
//       price="₹151"
//       details="Color: Maroon"
//       status="Cancelled on Jun 11, 2023"
//     />
//   </div>
//   )
// }

// export default Order

import React from "react";

const sharedClasses = {
  button: "bg-blue-500 text-white p-2 rounded-lg flex items-center",
  input: "flex-grow p-2 border rounded-lg",
  card: "bg-white p-4 rounded-lg border",
  image: "w-20 h-20 object-cover rounded-lg mr-4",
  text: "text-lg md:text-xl font-semibold",
  info: "text-zinc-600",
  status: "text-sm",
};

const OrderItem = ({ imageSrc, title, price, color, status, message }) => {
  return (
    <div className={sharedClasses.card}>
      <div className="flex flex-col sm:flex-row items-center">
        <img src={imageSrc} alt={title} className={sharedClasses.image} />
        <div className="flex-grow mt-4 sm:mt-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h3 className={sharedClasses.text}>{title}</h3>
            <span className={sharedClasses.text}>₹{price}</span>
          </div>
          <p className={sharedClasses.info}>Color: {color}</p>
          {status && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2">
              <span className={`${status.color} ${sharedClasses.status}`}>
                {status.text}
              </span>
              {message && (
                <span className={`${sharedClasses.info} mt-2 sm:mt-0 sm:ml-2`}>
                  {message}
                </span>
              )}
            </div>
          )}

          <p className=" bg-green-200 p-2 rounded">
            Refund Completed (Refund ID: 12102993153382082601) • The money was
            sent to your Bank Account ending with ********036 on Dec 15, 2023.
            For any questions, please contact your bank with reference number
            334822116751.
          </p>
        </div>
      </div>
    </div>
  );
};

const Orders = () => {
  return (
    <div className=" p-4">
      <div className="mx-auto bg-white p-4 rounded-lg shadow h-[80vh] overflow-scroll sidebar">
        <div className="flex gap-3 lg:flex-row items-center mb-4 w-[100%]">
          <input
            type="text"
            placeholder="Search your orders here"
            className={`{sharedClasses.input} mt-4 sm:mt-0 sm:ml-4 p-2 border rounded-xl w-[70%]`}
            
          />
          <button className={`${sharedClasses.button} mt-4 sm:mt-0 p-2 sm:ml-4 w-fit`}>
            <svg
              className="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32A8 8 0 1114.32 12.9l4.387 4.387a1 1 0 01-1.414 1.414L12.9 14.32zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
            Search
          </button>
        </div>
        <div className="space-y-4">
          <OrderItem
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrloZ_lHhAsVRnPjAyVxigmOm_187ehKOaog&s0"
            title="Casual Shoes For Men Sneakers loafers Wh..."
            price="261"
            color="White Size: 8"
            status={{ color: "text-yellow-500", text: "● Refund Completed" }}
            message="You returned this order because the quality was not as expected."
          />
          <OrderItem
            imageSrc="https://temptindia.com/cdn/shop/files/SpiritRed1.png?v=1705564680&width=1496"
            title="B 11 Behind the Neck Super Bass Bluetoot..."
            price="149"
            color="Red"
            status={{
              color: "text-red-500",
              text: "● Cancelled on Jun 28, 2023",
            }}
          />
          <OrderItem
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdFkW0O3t1TZhHCuQew5RjEs3zAO_FbthBw&s"
            title="B11- Bluetooth red Wireless In Ear Earph..."
            price="151"
            color="Maroon"
            status={{
              color: "text-red-500",
              text: "● Cancelled on Jun 11, 2023",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
