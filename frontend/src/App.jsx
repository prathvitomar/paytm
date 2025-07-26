import Navbar from "./components/ui/Navbar";
import Loader from "./components/ui/Loader";
import { useIsOnline } from "./store/hooks/useIsOnline";

function App() {
  // const onlineStatus = useIsOnline();
  // if(onlineStatus){
  //   return (
  //     <h1>Yay We are Online</h1>
  //   )
  // }
  // else{
  //   return (
  //     <h1>We are Offline</h1>
  //   )
  // }

  return (
    <>
    {/* {onlineStatus ? "Yay We are Online": "We are Offline"} */}
      <Navbar />
       <Loader/>
    </>
  );
}

export default App;