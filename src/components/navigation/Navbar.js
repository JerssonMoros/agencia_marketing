import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import logo_a from 'assets/img/logochip.png' 
import './ButtonNavbar.css'

function Navbar(){
    return(
        <nav className='w-full py-2.5 top-0 fixed'>
            <div className="sm:px-6 ">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">

                <div className="ml-12 mt-2">
                <img src={logo_a} width={100} height={80}
                className=''/>
                </div>

                <div className='ml-4 mt-2 flex-shrink-0'>
                    <Link to='/blog' className="text-lg inline-flex leading-6 text-white hover:border-b-2 hover:border-blue-button mx-7">Blog</Link>
                    <Link to='/community' className="text-lg inline-flex leading-6 text-white hover:border-b-2 hover:border-blue-button mx-7">Community</Link>
                    <Link to='/support' className="text-lg inline-flex leading-6 text-white hover:border-b-2 hover:border-blue-button mx-7">Support</Link>
                    <Link to='/information' className="text-lg inline-flex leading-6 text-white hover:border-b-2 hover:border-blue-button mx-7">Information</Link>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">

                
                {/* <button className='font-bold text-blue-button hover:text-orange-500'>
                    <div className='d-flex flex-column align-items-center'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#007BEF" className="bi bi-person-circle hover:transition hover:duration-300 hover:ease-in-out hover:fill-black" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    
                        <img src={load} width={29} height={8} className='pt-1.5'/>
                    </div>
                </button>
                 */}

                <button className='pt-2' >
                    <div className='ml-4 d-flex align-items-center'>
                        <div class="button">LOG IN</div>
                    </div>
                </button>
                

                {/* <button
                5
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mx-2"
                >
                    Log In
                </button> */}
                </div>
            </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state =>({

}) 

export default connect(mapStateToProps,{

})(Navbar)