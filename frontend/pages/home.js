import Layout from "Components/Layout";
import Home from "Components/Home";
const home = () => {
    return (
        <Layout>
             <div className="bg-gray-50 h-screen overflow-y-scroll">
                <Home/>
            </div>
        </Layout>
    )
}

export default home
