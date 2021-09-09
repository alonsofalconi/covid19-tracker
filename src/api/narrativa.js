const narrativaAPI = {
  async getDataByDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const fullYear = `${year}-${month}-${day}`;

    const rawResponse = await fetch(`https://api.covid19tracking.narrativa.com/api/${fullYear}`);
    const data = await rawResponse.json();

    return data;
  },
};

export default narrativaAPI;
