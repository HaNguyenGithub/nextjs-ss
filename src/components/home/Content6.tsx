import { Container, Typography, Box } from "@mui/material";
import content from "../../styles/home/Content6.module.css";
export default function Content6() {
  const data_backers_row_1 = [
    {
      link: "https://tomochain.com/",
      src: "/backers/backer-2.png",
      alt: "Tomochain",
    },
    {
      link: "https://kyber.network/",
      src: "/backers/backer-3.png",
      alt: "Kyber Ventures",
    },
  ];

  const data_backers_row_2 = [
    {
      link: "https://www.hubglobal.io/",
      src: "/backers/backer-1.png",
      alt: "HubGlobal",
    },
    {
      link: "https://funverse.capital/",
      src: "/backers/backer-4.png",
      alt: "Funverse Capital",
    },
    {
      link: "https://capital.viabtc.com/",
      src: "/backers/via.png",
      alt: "Captain Viabtc",
    },
  ];

  const data_partners = [
    { link: "https://okara.vn/", src: "/partners/1.png", alt: "Okara" },
    { link: "https://yggsea.io/", src: "/partners/ygg.png", alt: "YGG SEA" },
    { link: "https://aws.amazon.com/", src: "/partners/5.png", alt: "Amazon" },
    {
      link: "https://www.vcpmc.org/vcpmc/",
      src: "/partners/3.png",
      alt: "VCPMC",
    },
  ];

  return (
    <>
      <div className={content.backers}>
        <Container className={content.container}>
          <Typography component="p">STRONG BACKER</Typography>
          <div className={content.firstRow}>
            {data_backers_row_1.map((item, index) => (
              <div>
                <a href={item.link} key={index}>
                <img src={item.src} alt={item.alt} />
                </a>
              </div>
              
            ))}
          </div>
          <div className={content.secondRow}>
            {data_backers_row_2.map((item, index) => (
             <div>
             <a href={item.link} key={index}>
                <img src={item.src} alt={item.alt} />
              </a>
            </div>
            ))}
          </div>
          <div className={content.split}></div>
          <div className={content.partners}>
            <Typography component="p">PARTNERS</Typography>
            <div className={content.boxPartners}>
              {data_partners.map((item, index) => (
                <a href={item.link} key={index}>
                  <img src={item.src} alt={item.alt} />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
