import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { useTransition } from "react-spring";
import { __RouterContext } from "react-router";
import Main from "../Main/Main";
import { AppRoutesContainer, getBgColor } from "./App.styles";
import { ROUTER_ANIMATION_DURATION } from "../../utils/style-utils";

function useRouter() {
  return useContext(__RouterContext);
}

const AppRoutes = (): any => {
  const { location } = useRouter();
  const transitions = useTransition(location, (location: any) => location.key, {
    from: {
      opacity: 0,
      width: "100%",
      transform: "translate3d(100%, 0, 0) scale(0)"
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0,0,0) scale(1)",
      backgroundColor: getBgColor((location as any).pathname)
    },
    leave: {
      opacity: 0,
      transform: "translate3d(-50%,0,0) scale(0)"
    },
    config: {
      duration: ROUTER_ANIMATION_DURATION,
      mass: 1,
      tension: 280,
      friction: 120
    }
  });
  return transitions.map(({ item, props: transition, key }: any) => (
    <AppRoutesContainer key={key} style={transition}>
      <Route exact path="/:filter?" component={Main} />
    </AppRoutesContainer>
  ));
};

export default AppRoutes;
