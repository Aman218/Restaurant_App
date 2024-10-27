import RestaurantCard from "./RestaruantCard";
import Search from "./Search";
import { restDetails } from "../Utils/Restaurantdetails";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function Body() {
    const [searchedRest, setSearchRest] = useState([]);
    const [initialRest, setInitialRest] = useState([]); // New state to hold initial restaurant data

    function filteredRestDetails(filteredData) {
        setSearchRest(filteredData);
    }

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            let response = await fetch('/api/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            let data = await response.json();
            console.log(data)
            const restaurants = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
            setSearchRest(restaurants);
            setInitialRest(restaurants); // Store the initial restaurant data
        } catch (error) {
            console.error('error->', error);
        }
    }

    return (
        <>
            <h1 className="m-2.5 font-bold text-center">Restaurants with online food delivery</h1>
            <Search filterFun={filteredRestDetails} searchedResDetail={searchedRest} initialResDetail={initialRest} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto w-[85%]">
                {searchedRest.map((res) => (
                    <Link key={res.info.id} to={`/restaurant/${res.info.id}`} className="block">
                        <RestaurantCard className="inline-block" resdetail={res.info} />
                    </Link>
                ))}
            </div>

        </>
    );
}

export default Body;