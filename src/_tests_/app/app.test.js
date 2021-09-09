import narrativaAPI from '../../api/narrativa';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Application render correctly', () => {
  it('mocks fetch correctly', async () => {
    fetch.mockResponseOnce(JSON.stringify({ Mock: 'MockedData' }));
    const response = await narrativaAPI.getDataByDate();
    expect(response).toEqual({ Mock: 'MockedData' });
  });
});
