import Topbar from "./components/Topbar";

function App() {
    return (
        <>
            <div className="sm:hidden">
                <Topbar />
            </div>
            <div className="sm:block hidden">sidebar</div>
        </>
    );
}

export default App;
