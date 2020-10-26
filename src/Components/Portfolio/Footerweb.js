import React from 'react'
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
export const Footerweb = () => {
    return (
        <div>
  <Footer
    columns={[
      {
        icon: (
          <img alt="icon" src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
        ),
        title: 'Sohail',
        url: 'https://yuque.com',
        description: 'Pracitce Web App with React',
        openExternal: true,
      },
    ]}
    bottom="Made with ❤️ by Sohail"
  />   </div>
    )
}
