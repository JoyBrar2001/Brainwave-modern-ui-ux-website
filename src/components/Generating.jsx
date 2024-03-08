import { loading } from '../assets'

const Generating = ({ className }) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}>
      <img
        src={loading}
        alt="Loading"
        className="w-5 h-5 mr-4"
        style={{
          animation: 'spin 1s linear infinite',
          '@keyframes spin': {
            '100%': { transform: 'rotate(-360deg)'}
          }
        }}
      />
      AI is generating<span className="animate-pulse ml-0.5">|</span>
    </div>
  )
}

export default Generating
