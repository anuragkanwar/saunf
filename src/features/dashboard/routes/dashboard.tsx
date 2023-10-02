import { ContentLayout } from "@/components";
import { PieChart } from "@/features";
import { BugSeverityData, BugStatusData, } from "@/utils";
import { BugSeverityChart } from "@/features/dashboard/components/BugSeverityChart.tsx";
import { useBoolean } from "usehooks-ts";


export const Dashboard = () => {
  const isDataAvailable = useBoolean(false);
  return (
    <ContentLayout title={"dashboard"}>
      {isDataAvailable.value ?
        <div className={"grid grid-cols-2 gap-16 h-[100vh]"}>
          <div className={"h-full w-full"}>
            <div className={"h-1/6"}>
              Bar
            </div>
            <div className={"h-5/6"}>
              <PieChart data={BugStatusData}/>
            </div>
          </div>
          <div className={"h-full w-full"}>
            <div className={"h-1/6"}>
              Bar
            </div>
            <div className={"h-5/6"}>
              <BugSeverityChart data={BugSeverityData}/>
            </div>
          </div>
        </div>
        :
        <div>Not Enough Data </div>
      }
    </ContentLayout>
  );
};
