import { useThemeParams, useWebApp } from '@vkruglikov/react-telegram-web-app';
import { FC } from 'react';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [, themeParams] = useThemeParams();
  const WebApp = useWebApp();

  console.log();

  return (
    <div>
      <h1
        style={{
          color: themeParams.text_color,
        }}
      >
        Bienvenue {WebApp?.WebAppUser?.first_name} {WebApp?.WebAppUser?.first_name}
        Version {WebApp?.version}
      </h1>
    </div>
  );
};

export default Home;
