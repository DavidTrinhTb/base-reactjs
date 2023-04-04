import { TabPaneProps, Tabs, TabsProps } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

export interface IFracTabPaneProps extends TabPaneProps {
  content: React.ReactNode;
  title: any;
}

interface IFracTabsProps extends TabsProps {
  tabs: IFracTabPaneProps[];
  operations?: React.ReactNode;
  transparent?: boolean;
  viewAll?: boolean;
  path?: string;
}

const { TabPane } = Tabs;

const FracTabs: React.FC<IFracTabsProps> = (props: IFracTabsProps) => {
  const { tabs, operations = <></>, transparent = false, viewAll = false, path = '' } = props;

  const history = useHistory();

  const handleRedirect = () => {
    path && history.push(path);
  };

  return (
    <div className={`tabs-container ${transparent ? 'background-transparent' : 'background-solid'}`}>
      {viewAll && (
        <div className='view-all'>
          <span onClick={handleRedirect}>
            <span>View All</span>
          </span>
        </div>
      )}
      <Tabs {...props} tabBarExtraContent={operations}>
        {tabs.map((item: IFracTabPaneProps) => {
          return (
            <TabPane tab={item.title} key={item.tabKey} disabled={item.disabled}>
              {item.content}
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default FracTabs;
