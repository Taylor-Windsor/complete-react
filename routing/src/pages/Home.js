import {Link, useNavigate} from 'react-router-dom'
const HomePage = () => {
    const navigate = useNavigate();
    function navigateHandler(){
        navigate('/products')
    }
    return(
    <>
    <h1>My Home Page</h1>
    <p>go to <Link to="/products">the products page</Link></p>
    <button onClick={navigateHandler}>Products</button>
    </>
    )
    
};

export default HomePage;