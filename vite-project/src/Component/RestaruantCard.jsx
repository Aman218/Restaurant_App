import GradeIcon from '@mui/icons-material/Grade';
function RestaurantCard(props) {
    const { name, avgRating, sla, cuisines, cloudinaryImageId } = props.resdetail;
    console.log("cuisines",cuisines)
    let stringvalCuisine=cuisines.join(', ')
    return (
        <div className="flex flex-col h-full m-4 w-full max-w-sm border-2 border-white shadow-lg p-4 rounded-lg">
        <img
          className="w-full h-48 object-cover rounded-md transition-transform duration-300 transform hover:scale-105"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
        />
        <h1 className="text-lg font-bold mt-2">{name}</h1>
        <div className="flex justify-between">
          <span className="text-gray-600 flex items-center">
            <GradeIcon className="text-[#FF5200]" /> {avgRating}
          </span>
          <span className="pl-1 text-gray-500">({sla.deliveryTime} minutes)</span>
        </div>
        <p className="break-words mt-1 text-sm text-gray-700">{stringvalCuisine}</p>
      </div>
    );
}

export default RestaurantCard;
