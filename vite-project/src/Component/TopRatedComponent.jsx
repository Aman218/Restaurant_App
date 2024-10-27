import { restDetails } from "../Utils/Restaurantdetails";
import './TopRated.css';

function TopRated(props){
console.log(props)
    function restaurantBasedOnRating(){
       let resDetailsBasedOnRating= props.searchedRes.filter((restaurant)=>{

            if(restaurant.info.avgRating>=4.3){
                return true;
            }
        })
        console.log(resDetailsBasedOnRating)
        props.resDeatailsFun(resDetailsBasedOnRating)
    }
    return (
        
         <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-1  [@media(max-width:899px)]:text-sm" id="btn-id" onClick={restaurantBasedOnRating}>TopRatedRestaurant</button>
        
    )
}
export default TopRated;