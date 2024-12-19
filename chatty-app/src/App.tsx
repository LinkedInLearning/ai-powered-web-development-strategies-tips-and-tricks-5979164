import Header from "./components/Header";
import InfoArea from "./components/InfoArea";
import MapArea from "./components/MapArea";
import ChatArea from "./components/ChatArea";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex flex-col md:flex-row overflow-hidden">
        <InfoArea />
        <MapArea />
        <ChatArea />
      </main>
    </div>
  );
};

export default App;
