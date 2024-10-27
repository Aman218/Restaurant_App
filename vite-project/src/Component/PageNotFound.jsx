import App from "../App";
import { Link } from 'react-router-dom';
function PageNFound(){
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-[5rem]">Error 404</h1>
      <h2 className="text-[2rem]">Page Not found</h2>
      <Link to='/' className="text-blue-500 font-bold text-[1.5rem]"> Go back </Link>
    </div>
  )
}
export default PageNFound;