import Navbar from "../component/Nav";
import Header from "../component/Header";
import VotingInfoComponent from "../component/vote";
import Footer from "../component/footer";
import Posts from "../component/posts";
import CardsComponent from "../component/cards";
import Pic from "../component/PictureComponent";
function Home (){

    return(
        <>
        <Navbar/>
        <Header/>
        <Posts/>
        <CardsComponent/>
        <Pic/>
        <VotingInfoComponent/>
        <Footer/>
        </>
    )
};

export default Home;