import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { WebAppProvider, useThemeParams } from '@vkruglikov/react-telegram-web-app';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = () => {
  const [, themeParams] = useThemeParams();

  return (
    <WebAppProvider
      options={{
        smoothButtonsTransition: true,
      }}
    >
      <div
        style={{
          color: themeParams.text_color,
          backgroundColor: themeParams.bg_color,
        }}
        className="App"
      >
        <main>
          <Outlet />
        </main>
      </div>
    </WebAppProvider>
  );
};

export default MainLayout;
