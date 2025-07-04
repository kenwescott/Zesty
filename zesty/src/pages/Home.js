import BackgroundCarousel from'../components/BackgroundCarousel';

function Home() {
  return (
    <div>
     
      {/* Carousel */}
      <BackgroundCarousel />

      {/* Other homepage content */}
      <section className="mt-5 text-center">
        <h2>Welcome to MyStore</h2>
        <p>Explore our latest deals and best-selling products!</p>
      </section>
    </div>
  );
}


export default Home;
