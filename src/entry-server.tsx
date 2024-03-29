import { renderToString } from 'react-dom/server';

import App from './App';

export const render = (data) => {
  return renderToString(<App data={data} />);
};
