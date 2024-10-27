import { restDetails } from "../Utils/Restaurantdetails";
import TopRated from "./TopRatedComponent";
function Search(props) {
    let searchText = '';

    function filteredRestaurant(e) {
        searchText = e.target.value;

        let filteredRes = searchText
            ? props.searchedResDetail.filter((ResDetail) => {
                return ResDetail.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            : props.initialResDetail; // Use initial data when searchText is empty

        console.log("Filteredrest->", filteredRes);
        props.filterFun(filteredRes);
    }

    return (
        <>
            <div className="flex justify-center items-center [@media(max-width:899px)]:text-sm">
                <input
                    type="text"
                    placeholder="Enter Restaurant name"
                    className="placeholder-gray-400 placeholder-opacity-50 border border-gray-300 p-2 rounded-md"
                    onChange={filteredRestaurant}
                />
                <TopRated resDeatailsFun={props.filterFun} searchedRes={props.searchedResDetail} />
            </div>
        </>
    );
}

export default Search;