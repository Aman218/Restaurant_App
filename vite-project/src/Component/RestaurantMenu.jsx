import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
function RestaurantMenu() {

    const [menuItem, setMenuItem] = useState([])
    let params = useParams();
    console.log(params);

    useEffect(() => {
        fetchdata()
    },[])
    async function fetchdata() {
        let response = await fetch(`/menu/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`);
        let data = await response.json();
        console.log("Data----------",data)
        //  console.log("dataaa",data.data.cards)
        setMenuItem(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)
        console.log("Hello",data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)
       

    }
    return (
        <>
            <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Restaurant Menu:</h1>
            <div className="h-[70vh] overflow-y-scroll scroll-bar">
            {menuItem.map((res)=>{
                return (
                    <div className="min-h-[30vh] flex flex-row justify-between  p-6 bg-white rounded-lg shadow-lg border border-gray-200 w-[60%] mx-auto ">
              
                    {/* <h3 className="text-lg font-semibold text-gray-600 mb-4">{params.id}</h3> */}
                    <div className="text-center mb-4">
                        <h1 className="text-xl font-bold text-gray-800">{res.card.info.name}</h1>
                        <h2 className="text-lg text-green-600">Rs.{res.card.info.price/100}</h2>
                        <h3 className="text-sm text-gray-500 max-w-md mx-auto">{res.card.info.description}</h3>
                    </div>
                    <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res.card.info.imageId}`}
                        alt={res.card.info.name}
                        className="w-48 h-48 object-cover rounded-md shadow-md"
                    />
                </div>
                )
            })}
            </div>
          

        </>
    )
}
export default RestaurantMenu;