import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
        <div className=''>
            <h1>YOU HAVE SUCCESSFULLY LOGGED IN!!!!! <br></br> 
            <a href='https://github.com/sameeksha-nair'><button className='homebutton'>My Github</button></a>
            <Link to="/"><button className='homebutton'>Logout</button></Link>
            </h1>
        </div>
  );
}

export default Home;
