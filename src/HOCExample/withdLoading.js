
import React from 'react';
import Spiner from '../Spiner/Spiner';
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <Spiner/>;
  };
}
export default WithLoading;
