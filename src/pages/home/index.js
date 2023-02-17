import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <Navbar />
          <div className="flex text-center justify-center items-center text-[200px] font-bold h-[50vh] text-[#5F2EEA]">
            SPIDERMAN
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
