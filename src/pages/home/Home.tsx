import { MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';
import { FC } from 'react';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const showPopup = useShowPopup();

  const handleClick = () =>
    showPopup({
      message: 'Hello, I am popup',
    });

  return (
    <div>
      <h1>Test 1</h1>
      <MainButton text="SHOW POPUP" onClick={handleClick} />
    </div>
  );
};

export default Home;
