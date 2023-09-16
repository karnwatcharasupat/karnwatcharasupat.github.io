import React, {createRef} from "react";
import "./ExperienceCard.scss";
import {Fade, Slide} from "react-reveal";

export default function ExperienceCard({cardInfo, isDark}) {
  const imgRef = createRef();

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };

  if (!cardInfo.logo)
    console.error(`Image of ${cardInfo.name} is missing in experience section`);

  return (
    <div>
      <Fade left duration={1000}>
        <div className="experience-card">
          {cardInfo.companylogo && (
            <div className="experience-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="experience-roundedimg"
                src={cardInfo.companylogo}
                alt={cardInfo.company}
              />
            </div>
          )}
          <div className="experience-card-right">
            <h5 className="experience-text-company">{cardInfo.company}</h5>

            {cardInfo.roledate.map((roleInfo, i) => (
              <div className="experience-text-details">
                <h5
                  className={
                    isDark
                      ? "dark-mode experience-text-subHeader"
                      : "experience-text-subHeader"
                  }
                >
                  {roleInfo.role}
                </h5>
                <p
                  className={`${
                    isDark ? "dark-mode" : ""
                  } experience-text-duration`}
                >
                  {roleInfo.date}
                </p>
                <p className="experience-text-desc">{roleInfo.desc}</p>
                <div className="experience-text-bullets">
                  <ul>
                    <GetDescBullets descBullets={roleInfo.descBullets} />
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="experience-card-border"></div>
      </Slide>
    </div>
  );
  //
  // return (
  //   <div className={isDark ? "experience-card-dark" : "experience-card"}>
  //     <div style={{background: rgb(colorArrays)}} className="experience-banner">
  //       <div className="experience-blurred_div"></div>
  //
  //       <img
  //         crossOrigin={"anonymous"}
  //         ref={imgRef}
  //         className="experience-roundedimg"
  //         src={cardInfo.companylogo}
  //         alt={cardInfo.company}
  //         onLoad={() => getColorArrays()}
  //       />
  //     </div>
  //     <div className="experience-text-details">
  //       <h5 className={isDark ? "experience-text-company dark-mode-text" :"experience-text-company" }>{cardInfo.company}</h5>
  //       <h5
  //         className={
  //           isDark
  //             ? "experience-text-role dark-mode-text"
  //             : "experience-text-role"
  //         }
  //       >
  //         {cardInfo.role}
  //       </h5>
  //       <h5
  //         className={
  //           isDark
  //             ? "experience-text-date dark-mode-text"
  //             : "experience-text-date"
  //         }
  //       >
  //         {cardInfo.date}
  //       </h5>
  //       <p
  //         className={
  //           isDark
  //             ? "subTitle experience-text-desc dark-mode-text"
  //             : "subTitle experience-text-desc"
  //         }
  //       >
  //         {cardInfo.desc}
  //       </p>
  //       <ul>
  //         <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
  //       </ul>
  //     </div>
  //   </div>
  // );
}
