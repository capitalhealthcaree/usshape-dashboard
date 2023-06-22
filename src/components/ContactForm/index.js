import React, { useEffect, useState, useRef } from "react";
import api from "../../services/api";
import { Spinner } from "reactstrap";
import html2canvas from "html2canvas";

const ContactForm = () => {
  const divRef = useRef(null);

  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await api.get("/getcontacts");
      if (res.status === 200) {
        if (res && res.data && res.data.data) setData(res.data.data);
      }
    }
    fetchData();
  }, []);
  function handleDownloadClick() {
    html2canvas(divRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "client-detail.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  }
  console.log(data);

  return data ? (
    <>
      <div className="row">
        {data.map((data, i) => {
          const originalDate = new Date(data.createdAt);

          const options = {
            day: "numeric",
            month: "long",
            year: "numeric",
          };
          const formatter = new Intl.DateTimeFormat("en-US", options);
          const formattedDateParts = formatter.formatToParts(originalDate);
          const formattedDate = `${formattedDateParts[2].value}-${formattedDateParts[0].value}-${formattedDateParts[4].value}`;

          return (
            <div className="col-12" ref={divRef} key={i}>
              <div class="card mb-3">
                <div class="card-body">
                  <button
                    className="btn btn-success"
                    onClick={handleDownloadClick}
                  >
                    Download Details
                  </button>

                  <div>
                    <h5 class="d-inline mr-3">Name:</h5>
                    <p class="d-inline">{data.name}</p>
                  </div>
                  <div>
                    <h5 class="d-inline mr-3">Phone:</h5>
                    <p class="d-inline">{data.phone}</p>
                  </div>
                  <div>
                    <h5 class="d-inline mr-3">Email:</h5>
                    <p class="d-inline">{data.email}</p>
                  </div>
                  <div>
                    <h5 class="d-inline mr-3">Patient Type:</h5>
                    <p class="d-inline">{data.patientType}</p>
                  </div>
                  <div>
                    <h5 class="d-inline mr-3">Message:</h5>
                    <p class="d-inline">{data.message}</p>
                  </div>
                  <div>{formattedDate}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10%",
      }}
    >
      <Spinner children={false} color="dark" />
      <h3 style={{ marginLeft: "10px" }}>Loading...</h3>
    </div>
  );
};
export default ContactForm;
