import useFetch from "../customize/fetch";

const Covid19 = () => {
   
  const {data:dataCovid,loadedData} = useFetch("https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z",true)
  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr className="list-form">
            <th className="text-center">Country</th>
            <th className="text-center">Confirmed</th>
            <th className="text-center">Deaths</th>
            <th className="text-center">Date</th>
          </tr>
        </thead>
        <tbody>
          {dataCovid &&
            loadedData === false &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Country}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Date}</td>
                </tr>
              );
            })}
          {loadedData === true && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Covid19;
