import '@testing-library/jest-dom';
import { render as rtlRender, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Header from '../../components/Header';
import Homepage from '../../components/Homepage';
import Details from '../../components/Details';

const render = () => rtlRender(
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/details">
        <Details />
      </Route>
    </Provider>
  </BrowserRouter>,
);

describe('Render application', () => {
  it('should render application correctly', async () => {
    render();
    expect(await screen.getByText('coronavirus tracker')).toBeInTheDocument();
  });

  it('should find Peru in the fetched countries', async () => {
    render();
    expect(await screen.findByText('Peru')).toBeInTheDocument();
  });

  it('should go to details when click on a country', async () => {
    render();
    fireEvent.click(screen.getByText('Argentina'));
    expect(await screen.findByText('9803')).toBeInTheDocument();
  });
});