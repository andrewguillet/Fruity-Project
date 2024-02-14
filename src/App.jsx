import Counter from "./pages/Counter/Counter";
import Fruity from "./pages/Fruity/Fruity";
import Users from "./pages/Users/Users";
import Chrono from "./pages/Chrono/Chrono";

function App() {
  return (
    <div className="min-h-screen bg-slate-700 px-4">
      <div className="mx-auto max-w-3xl pt-10 pb-20">
        {/* 1. Test counter */}
        {/* <Counter /> */}
        {/* 2. Fruity App */}
        {/* {<Fruity />} */}
        {/* 3.Users */}
        {/* <Users /> */}
        {/* 4. Chrono */}
        <Chrono />
      </div>
    </div>
  );
}

export default App;
