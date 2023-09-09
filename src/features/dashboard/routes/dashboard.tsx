import { ContentLayout } from "@/components";
import { useLocation } from "react-router-dom";

export const Dashboard = () => {
  const { pathname } = useLocation();


  return (
    <ContentLayout title={"dashboard"}>
      <h1>{`This Is Protected Route of ${pathname}`}</h1>
      <pre>
       {"Hi"}
     </pre>
    </ContentLayout>
  );
};
