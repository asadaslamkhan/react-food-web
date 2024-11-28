import React from 'react'
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"


const FoodData = [
    {
        image: img1,
        rating: "⭐⭐⭐⭐⭐",
        price: "$10.99",
        name: "Zinger Burger",
        desc: "Experience the perfect crunch and juicy flavor with our irresistible zinger burger, crafted for ultimate satisfaction in every bite."
    },
    {
        image: img2,
        rating: "⭐⭐⭐⭐⭐",
        price: "$10.99",
        name: "Black Cheese Burger",
        desc: "Savor the bold, rich flavors of our Black Cheese Burger, a striking twist on classic indulgence with every bite."
    },
    {
        image: img3,
        rating: "⭐⭐⭐⭐⭐",
        price: "$10.99",
        name: "Double Meat Burger",
        desc: "Double the meat, double the flavor—our Double Meat Burger is a hearty feast for true burger lovers."
    },
];

function TopList() {
    return (
        <div className='container py-14'>
            {/* Header section */}
            <div className='text-center mb-12'>
                <h1 className='text-4xl font-semibold'>Top List</h1>
                <p>Our Top List</p>
            </div>
            {/* card section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

                {FoodData.map((item, index) => (
                    <div key={index}
                        className="bg-white/50 p-5 sm:p-3 rounded-3xl hover:scale-110 transition duration-300">

                        <img src={item.image} alt="" className="w-60 sm:h-40 mx-auto object-cover rounded-full img-shadow" />

                        <div className="space-y-2">
                            <p className="text-lg font-semibold"> {item.name}</p>
                            <p className="text-red-500">{item.rating}</p>
                            <p> {item.desc}</p>
                            <p className="text-lg font-semibold">{item.price}</p>                    
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    );
};

export default TopList
