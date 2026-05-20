import {FaFacebook, FaTwitter, FaLinkedin , FaInstagram, FaGithub} from 'react-icons/fa';

const Footer = () => {
  const handelScroll = (activeId)=>{
    const section = document.getElementById(activeId);

    if(section){
      section.scrollIntoView({behavior:"smooth"});
    }
  }
  return (
    <section className='text-white py-8 px-[7vw] md:px-[7vw] lg:px-[12vw] '>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semibold text-purple-500'>Tushar Barik</h2>

        {/* Navigation links */}
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            {name:"About",id:"about"},
            {name:"Skills",id:"skills"},
            {name:"Experience",id:"experience"},
            {name:"Projects",id:"work"},
            {name:"Education",id:"education"},
          ].map((item,index)=>{
            return(
              <button key={index} onClick={()=>handelScroll(item.id)} className='hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer'>{item.name}</button>
            )
          })}

        </nav>

        {/* Social media icons */}
          <div className='flex flex-wrap justify-center space-x-4 mt-6'>
            {[
              {icon:<FaFacebook/>, link:""},
              {icon:<FaLinkedin/>, link:""},
              {icon:<FaGithub/>, link:""},
              {icon:<FaInstagram/>, link:""},
              {icon:<FaTwitter/>, link:""},
            ].map((icons,index)=>{
              return (
                <a key={index} href={icons.link} target='_blank' className=' text-2xl hover:text-purple-500 transition-transform transform hover:scale-110'>{icons.icon}</a>
              )
            })}

          </div>

          {/* Copyright text */}
            <p className='text-sm text-gray-400 mt-6'>&copy; {new Date().getFullYear()} Tushar Barik. All rights reserverd.</p>
      </div>

    </section>
  )
}

export default Footer