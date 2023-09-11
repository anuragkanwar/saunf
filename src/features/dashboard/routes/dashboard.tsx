import { ContentLayout } from "@/components";
import { useLocation } from "react-router-dom";
import { PieChart } from "@/features";


const PieChartData = [
  {
    "id": "javascript",
    "label": "javascript",
    "value": 543,
    "color": "hsl(102, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 138,
    "color": "hsl(124, 70%, 50%)"
  },
  {
    "id": "go",
    "label": "go",
    "value": 52,
    "color": "hsl(224, 70%, 50%)"
  },
  {
    "id": "make",
    "label": "make",
    "value": 133,
    "color": "hsl(301, 70%, 50%)"
  },
  {
    "id": "rust",
    "label": "rust",
    "value": 499,
    "color": "hsl(291, 70%, 50%)"
  }
];


export const Dashboard = () => {
  const { pathname } = useLocation();


  return (
    <ContentLayout title={"dashboard"}>
      <h1>{`This Is Protected Route of ${pathname}`}</h1>
      <div className={"grid grid-cols-3"}>
        <div>
          <PieChart data={PieChartData}/>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </ContentLayout>
  );
};
