import{a as e,L as a,I as c}from"./react-vendor-DF20Ph9L.js";import{r as n}from"./room2-DURNC4y3.js";import{J as u}from"./vendor-DE8bDVoj.js";function f(){const t=localStorage.getItem("roomType")||"  Room type not selected",s=localStorage.getItem("roomPrice")||0,l=localStorage.getItem("name")||"Guest",o=localStorage.getItem("email")||"guest@email.com",m=async()=>{const r={name:l,email:o,roomType:t,price:s,hotelName:"Hotel The Tree",location:"Hinjewadi, pune, India"};try{await u.send("service_229t579","template_5uwftjf",{...r},"qb4MJrPgzVN8h0_sX"),alert("Payment successful! Confirmation email sent")}catch(i){console.error("Email sending failed:",i),alert("Payment successful, but failed to send email.")}};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"relative flex flex-col min-h-screen bg-gray-100 p-6",children:[e.jsxDEV(a,{to:"/book",className:"absolute top-6 left-6",children:e.jsxDEV(c,{className:"text-black w-10 h-10"},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:45,columnNumber:21},this)},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:44,columnNumber:17},this),e.jsxDEV("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold font-[Playfair] text-center mt-20",children:"Payment & Booking Review"},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:49,columnNumber:17},this),e.jsxDEV("div",{className:"flex flex-col items-center bg-white shadow-lg rounded-lg p-4 mt-20 w-full max-w-3xl mx-auto",children:[e.jsxDEV("img",{src:n,alt:"Room",className:"w-full h-32 rounded-lg object-cover "},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:56,columnNumber:21},this),e.jsxDEV("div",{className:"mr-[50%] mt-6",children:[e.jsxDEV("h2",{className:" text-3xl font-semibold",children:t},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:60,columnNumber:25},this),e.jsxDEV("p",{className:"text-gray-700 text-2xl",children:"Hotel The Tree"},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:61,columnNumber:25},this),e.jsxDEV("p",{className:"text-gray-500 text-xl",children:"Hinjewadi, Pune, India"},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:62,columnNumber:25},this)]},void 0,!0,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:59,columnNumber:21},this)]},void 0,!0,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:54,columnNumber:17},this),e.jsxDEV("div",{className:"flex flex-col items-center bg-white shadow-lg rounded-lg p-4 mt-12 w-full max-w-3xl mx-auto",children:[e.jsxDEV("img",{src:n,alt:"Room",className:"w-full h-32 rounded-lg object-cover"},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:72,columnNumber:21},this),e.jsxDEV("div",{className:"mt-6 mr-[75%] text-3xl",children:[e.jsxDEV("h2",{className:"text-xl font-semibold",children:"Total cost"},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:76,columnNumber:25},this),e.jsxDEV("p",{className:"text-gray-700 font-bold",children:["₹",s]},void 0,!0,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:77,columnNumber:25},this)]},void 0,!0,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:75,columnNumber:21},this)]},void 0,!0,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:70,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:42,columnNumber:13},this),e.jsxDEV("div",{className:"w-full bg-[#003153] text-white py-4 px-6 flex items-center justify-between",children:[e.jsxDEV("div",{className:"text-xl font-semibold",children:["Room Price: ₹",s]},void 0,!0,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:86,columnNumber:17},this),e.jsxDEV("button",{onClick:m,className:"bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition",children:"Make Payment"},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:91,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:84,columnNumber:13},this)]},void 0,!0,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/components/PaymentReview.jsx",lineNumber:41,columnNumber:9},this)}export{f as default};
