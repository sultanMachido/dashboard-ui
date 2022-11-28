import "./App.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import ChartBoxList from "./components/ChartBoxList";
import chart from "./images/chart.png";
import Report from "./components/Report";

const chartData = [
  {
    title: "Daily Transaction Volume",
    count: "2,342",
    chart: chart,
  },
  {
    title: "Daily Transaction Value",
    count: "4,000,000",
    chart: chart,
  },
  {
    title: "Total Transaction Volume",
    count: "452,000",
    chart: chart,
  },
  {
    title: "Total transaction Value",
    count: "4,000,000",
    chart: chart,
  },
];

function App() {
  return (
    <div className='App'>
      <Topbar />
      <div className='flex justify-between'>
        <Sidebar />
        <div className="w-9/12">
          <ChartBoxList data={chartData} />
          <Report />
        </div>
      </div>
    </div>
  );
}

export default App;
