import "./sidebar.css";

export default function Sidebar() {

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d13db1b9-cbb6-46ae-b32d-72a22ba00036/d2cfyp3-4d2c4cd9-7fb8-4b52-bf11-4788d384ddc9.jpg/v1/fill/w_900,h_830,q_75,strp/_hi_there_____by_crimsonkanji_d2cfyp3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODMwIiwicGF0aCI6IlwvZlwvZDEzZGIxYjktY2JiNi00NmFlLWIzMmQtNzJhMjJiYTAwMDM2XC9kMmNmeXAzLTRkMmM0Y2Q5LTdmYjgtNGI1Mi1iZjExLTQ3ODhkMzg0ZGRjOS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.nmrNRmWExOh6ElJLzI5YWz5XVZNf-pgyw0ibah0DmXQ"
          alt=""
          className="sidebarImage"
        />
        <p>
          This is a group project for the course "Web Development" at the
          <br />
          Chitkara University of Engineering and Technology.
          <br />
          <br />
          This would be a blog where you can write and share your own posts. Your
          posts will then be assesed by our <b>bot-team</b> and you will be given a
           <b>sentiment</b> score which will be displayed on the front-end.
          <br />
          <br />
          You can also see the sentiment score of other people's posts.
          <br />
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
