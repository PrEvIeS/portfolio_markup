import "./Topbar.scss";
import logo from '../../assets/images/logo.png'
import profile_img from '../../assets/images/profile.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
  return (
    <div className='header topbar'>
      <div className="topbar-left">
        <img src={logo} alt=""/>
        <div className="topbar-left-icons">
          <a href>
            <MenuIcon />
          </a>
          <a className={'search'} href>
            <SearchIcon />
          </a>
          <input type="text" placeholder={'Поиск....'}/>
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-right-icons">
          <a href className="topbar-apps">
            <AppsIcon />
          </a>
          <a href className="topbar-notifications">
            <NotificationsIcon />
          </a>
          <div className="topbar-profile dropdown">
            <a href className="dropdown-toggle">
              <img src={profile_img} className={'profile-img'} alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
