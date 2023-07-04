const Base_url = process.env.BASE_URL;
const Movie_key = process.env.API_KEY;

const Featch = {
  async SearchFeatchData(data: string): Promise<any> {
    const req = (
      await fetch(
        `${Base_url}/search/multi?query=${data}&api_key=${Movie_key}&language=ko-KR`
      )
    ).json();
    return req;
  },
};

export default Featch;
