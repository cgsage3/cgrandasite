const Address = () => {
  const addressContent = [
    {
      id: 1,
      iconImg: "img/address/phone.png",
      name: "Phone",
      info: (
        <>
          <li>
            <a href="Tel: +1 855 930 9368">855 930 9368</a>
          </li>

        </>
      ),
      animDelay: "0",
    },
    {
      id: 2,
      iconImg: "img/address/email.png",
      name: "Email",
      info: (
        <>
          <li>
            <a href="mailto:info@cgranda.com">info@cgranda.com</a>
          </li>
        </>
      ),
      animDelay: "100",
    },
    {
      id: 3,
      iconImg: "img/address/location.png",
      name: "Address",
      info: (
        <>
          <li>
            <p>
              {/*Envato 121 King St,*/}
              {/*<br />*/}
              NY, NY
            </p>
          </li>
        </>
      ),
      animDelay: "200",
    },
  ];

  return (
    <ul className="wrapper">
      {addressContent.map((item) => (
        <li
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={item.animDelay}
          key={item.id}
        >
          <div className="list_inner">
            <div className="icon">
              <img src={item.iconImg} alt="icon" />
            </div>
            {/* End icon */}
            <div className="content">
              <h3>{item.name}</h3>
              <ul>{item.info}</ul>
            </div>
            {/* End .content */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Address;
