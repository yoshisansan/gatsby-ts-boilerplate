import React, { VFC } from 'react';
// 3. Pass the `theme` prop to the `ChakraProvider`

const Layout: VFC<{ children: JSX.Element[] }> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Layout;
