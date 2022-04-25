
import CartBadge from './CartBadge';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';



const Topbar = () => {  

    return (
        <nav className="navbar navbar-light bg-light shadow">
  <span className="navbar-brand" href=''></span>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    
    <SearchIcon className=''/>
    <PersonOutlineIcon className='m-3'/>
    <CartBadge  />
  </form>
</nav>
    );

};

export default Topbar;
