import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as reactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

// import { useAuth } from "../hooks/auth";

interface RouteProps extends reactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  //   const { user } = useAuth();
  const user = true;

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/questionary',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
