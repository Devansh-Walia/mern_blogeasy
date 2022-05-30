// library imports
import { Helmet } from "react-helmet";

// custom imports
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        {/* <!-- HTML Meta Tags --> */}
        <title>BlogEasy</title>
        <meta
          name="description"
          content="A MERN Sentiment based blog writing website"
        />

        {/* <!-- Google / Search Engine Tags --/> */}
        <meta itemprop="name" content="BlogEasy" />
        <meta
          itemprop="description"
          content="A MERN Sentiment based blog writing website"
        />
        <meta
          itemprop="image"
          content="https://www.webreedigito.com/wp-content/uploads/2020/12/blogs.jpg"
        />

        {/* <!-- Facebook Meta Tags --/> */}
        <meta property="og:url" content="https://www.bloggEasy.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BlogEasy" />
        <meta
          property="og:description"
          content="A MERN Sentiment based blog writing website"
        />
        <meta
          property="og:image"
          content="https://www.webreedigito.com/wp-content/uploads/2020/12/blogs.jpg"
        />

        {/* <!-- Twitter Meta Tags --/> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BlogEasy" />
        <meta
          name="twitter:description"
          content="A MERN Sentiment based blog writing website"
        />
        <meta
          name="twitter:image"
          content="https://www.webreedigito.com/wp-content/uploads/2020/12/blogs.jpg"
        />
      </Helmet>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
