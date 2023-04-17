import Layout from "../../hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import bg from "assets/img/4562472.jpg"
import mysvg from "assets/img/fondo.svg"

function Home() {
    return (
        <Layout >
           
            <div style={{ backgroundImage: `url(${mysvg})`, height:"100vh"}}>
            <Navbar />
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#010517" fill-opacity="1" d="M0,32L30,74.7C60,117,120,203,180,197.3C240,192,300,96,360,85.3C420,75,480,149,540,176C600,203,660,181,720,154.7C780,128,840,96,900,122.7C960,149,1020,235,1080,266.7C1140,299,1200,277,1260,234.7C1320,192,1380,128,1410,96L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                </svg> */}



                <br>



                </br>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#010517" fill-opacity="1" d="M0,32L30,74.7C60,117,120,203,180,197.3C240,192,300,96,360,85.3C420,75,480,149,540,176C600,203,660,181,720,154.7C780,128,840,96,900,122.7C960,149,1020,235,1080,266.7C1140,299,1200,277,1260,234.7C1320,192,1380,128,1410,96L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                </svg> */}
            </div>
            {/* <h1>Ricky and Morty App</h1> */}
            <Footer />
        </Layout>
    )
}
export default Home