export default function VideoComponent() {
  return (
    <div
      className="relative flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Background.jpg')" }} // Change to your image path
    >
      <div className="bg-black bg-opacity-60 absolute inset-0"></div> 
      <video className="relative w-full max-w-3xl shadow-lg rounded-lg" controls autoPlay loop muted>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
