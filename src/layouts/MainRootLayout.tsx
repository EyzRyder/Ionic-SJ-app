import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { Outlet } from "react-router";
import Menu from "../components/Menu";

export default function MainRootLayout() {
  return (
    <IonSplitPane contentId="main" >
      <Menu />
      <IonRouterOutlet id="main" >
        <Outlet />
      </IonRouterOutlet>
    </IonSplitPane>
  )
}