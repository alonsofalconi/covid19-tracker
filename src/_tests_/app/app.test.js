import narrativaAPI from '../../api/narrativa';
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
    </BrowserRouter>
);

const narrativa = {
  "dates": {
    "2021-09-06": {
      "countries": {
        "Afghanistan": {
          "date":"2021-09-06","id":"afghanistan","links":[{"href":"/api/2021-09-06/country/afghanistan","rel":"self","type":"GET"}],"name":"Afghanistan","name_es":"Afganist\u00e1n","name_it":"afghanistan","regions":[],"source":"John Hopkins University","today_confirmed":153534,"today_deaths":7141,"today_new_confirmed":159,"today_new_deaths":14,"today_new_open_cases":145,"today_new_recovered":0,"today_open_cases":63807,"today_recovered":82586,"today_vs_yesterday_confirmed":0.0010366748166259487,"today_vs_yesterday_deaths":0.0019643608811561464,"today_vs_yesterday_open_cases":0.0022776538594451168,"today_vs_yesterday_recovered":0.0,"yesterday_confirmed":153375,"yesterday_deaths":7127,"yesterday_open_cases":63662,"yesterday_recovered":82586
        },
        "Albania": { 
          "date":"2021-09-06","id":"albania","links":[{"href":"/api/2021-09-06/country/albania","rel":"self","type":"GET"}],"name":"Albania","name_es":"Albania","name_it":"Albania","regions":[],"source":"John Hopkins University","today_confirmed":151499,"today_deaths":2519,"today_new_confirmed":502,"today_new_deaths":4,"today_new_open_cases":498,"today_new_recovered":0,"today_open_cases":18637,"today_recovered":130343,"today_vs_yesterday_confirmed":0.0033245693623051853,"today_vs_yesterday_deaths":0.0015904572564613417,"today_vs_yesterday_open_cases":0.02745465571420702,"today_vs_yesterday_recovered":0.0,"yesterday_confirmed":150997,"yesterday_deaths":2515,"yesterday_open_cases":18139,"yesterday_recovered":130343
        },
        "Algeria": {
          "date":"2021-09-06","id":"algeria","links":[{"href":"/api/2021-09-06/country/algeria","rel":"self","type":"GET"}],"name":"Algeria","name_es":"Argelia","name_it":"algeria","regions":[],"source":"John Hopkins University","today_confirmed":198313,"today_deaths":5445,"today_new_confirmed":309,"today_new_deaths":25,"today_new_open_cases":284,"today_new_recovered":0,"today_open_cases":73716,"today_recovered":119152,"today_vs_yesterday_confirmed":0.001560574533847836,"today_vs_yesterday_deaths":0.004612546125461359,"today_vs_yesterday_open_cases":0.0038675236953915615,"today_vs_yesterday_recovered":0.0,"yesterday_confirmed":198004,"yesterday_deaths":5420,"yesterday_open_cases":73432,"yesterday_recovered":119152
        }
      }
    }
  },
  "total": {
    "date": "2021-09-06",
  },
};

beforeEach(() => {
  fetch.resetMocks();
});

describe('Application render correctly', () => {
  it('mocks fetch correctly', async () => {
    fetch.mockResponseOnce(JSON.stringify({ Mock: 'MockedData' }));
    const response = await narrativaAPI.getDataByDate();
    expect(response).toEqual({ Mock: 'MockedData' });
  });

  it('render countries correctly', async () => {
    fetch.mockResponseOnce(JSON.stringify(narrativa));
    render();
    expect(await screen.findByText('Algeria')).toBeInTheDocument();
  });
});
