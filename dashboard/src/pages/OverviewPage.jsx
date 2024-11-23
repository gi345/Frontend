import Header from "../components/common/Header";
import {motion} from  "framer-motion";
import StatCard from "../components/common/StatCard";
import {BarChart2, ShoppingBag, Users, Zap} from "lucide-react";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";


const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto realtive x-10">
        <Header title="Overview" />
        <main className='max-w-7xl mx-auto py-6 px-4 lg:px xl:px-20'>
          
          <motion.div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'
          initial={{opacity: 0,  y:20}}
          animate={{opacity: 1,  y:0  }}
          transition={{ duration: 1}}
          >
            <StatCard 
              name="Total Sales" icon ={Zap} value ='₹12,345' colors='#6366F1'
            />
            <StatCard name="New Users" icon ={Users} value ='₹12,345' colors='#8BCF6'/>
            <StatCard name="Total Products" icon ={ShoppingBag} value ='567' colors='#EC4899'/>
            <StatCard name="Conversion Rate" icon ={BarChart2} value ='₹12.5%' colors='#10B981'/>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <SalesOverviewChart />
            <CategoryDistributionChart />
            <SalesChannelChart />
          </div>
        </main>
    </div>
  )
}

export default OverviewPage