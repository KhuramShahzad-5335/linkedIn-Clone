import "./SideBar.css";
import avatar_img from "../Assets/avatar.jfif";
import bg_cover from "../Assets/bg-cover.png";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

function SideBar() {
  const recentHashTags = (topic) => {
    return (
      <div className="sidebar__recentitem">
        <span className="hashes">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar__container">
      <div className="profile__container">
        <img src={bg_cover} alt="cover_photo" className="bg-image" />
        <div className="avatar__container">
          <img src={avatar_img} alt="profile_photo" />
        </div>
        <h1>Khuram Shahzad</h1>
        <p>KrShahzad7@gmail.com</p>
        <p id="addMargin">"Kill The Boy And Let The Man Be Born!"</p>
        <div className="status__container">
          <div className="status">
            <p>Profile Views</p>
            <p className="numbers">20,196</p>
          </div>
          <div className="status">
            <p>Post Impressions</p>
            <p className="numbers">1379</p>
          </div>
        </div>
        <div className="numbers-last">
          <h2>My Items</h2>
          <BookmarkBorderIcon className="items__icon" />
        </div>
      </div>
      <div className="otherThings">
        <div className="items">
          <p>Recent</p>
          <div className="icons">
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className="items">
          <p className="special__item">Groups</p>
          <div className="icons">
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className="items">
          <p className="special__item">Events</p>
          <div className="icons">
            <AddIcon />
          </div>
        </div>
        <div className="items__container" id="addBorder">
          <div className="items">
            <p className="special__item">Followed HashTags</p>
            <div className="icons">
              <CloseIcon />
            </div>
          </div>
          <div className="recent__items">
            {recentHashTags("WebDevelopment")}
            {recentHashTags("Front End Tricks")}
            {recentHashTags("Lets COde")}
            {recentHashTags("30 days of code")}
            <p className="seemore">See more ...</p>
          </div>
        </div>
        <div className="numbers-last" id="addradius">
          <p className="style__me">Discover More</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
