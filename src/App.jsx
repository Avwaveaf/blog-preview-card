import articleIllustration from './assets/images/illustration-article.svg'
import avatar from './assets/images/image-avatar.webp'
function App() {

  return (
    <>
      <div className="h-screen flex justify-center items-center">

        <div className="card">
          {/* Image Section */}
          <div className="w-full">
            <img src={ articleIllustration} alt="article" className='w-full rounded-xl'  />
          </div>

          {/* Badge Section */}
          <div className='w-full flex text-lg font-bold'>
            <span className='px-4 py-1  text-center bg-primary rounded-md'>Learning</span>
          </div>
          {/* Date */}
          <p className="font-semibold">Published 21 Dec 2023</p>
          
          {/* Title */}
          <a tabIndex={0} role='heading' className='text-2xl font-bold hover:text-primary focus:text-primary focus: outline-none'> HTML & CSS foundations</a>

          {/* Description */}
          <p className='text-neutral-grey'>These languages are the backbone of every website, defining structure, content, and presentation.</p>

          {/* Profile */}
          <div className='flex gap-4  items-center'>
            
              <img src={avatar} alt="" className='w-10'/>
            
            <h1 className='font-bold'>Greg Hoper</h1>
          </div>
          
        </div>

      </div>
    </>
  )
}

export default App
