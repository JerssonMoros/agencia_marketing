import Layout from "../../hocs/layouts/Layout"  
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"

function Information(){
    return(
        <Layout>
            <Navbar/>
            <div>
                Information
            </div>
            <Footer/>
        </Layout>
    )
}
export default Information