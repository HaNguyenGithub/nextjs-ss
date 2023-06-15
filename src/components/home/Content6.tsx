import { Container, Typography, Box } from "@mui/material";
import content from "../../styles/home/Content6.module.css";
export default function Content6() {
  return (
    <>
      <div className={content.backers}>
        <Container className={content.container}>
          <Typography component="p">STRONG BACKER</Typography>
          <div className={content.firstRow}>
            <a href="https://tomochain.com/">
              <img src="/backers/backer-2.png" alt="Tomochain" />
            </a>
            <a href="https://kyber.network/">
              <img src="/backers/backer-3.png" alt="Kyber Ventures" />
            </a>
          </div>
          <div className={content.secondRow}>
            <a href="https://www.hubglobal.io/">
              <img src="/backers/backer-1.png" alt="" />
            </a>
            <a href="https://funverse.capital/">
              <img src="/backers/backer-4.png" alt="" />
            </a>
            <a href="https://capital.viabtc.com/">
              <img src="/backers/via.png" alt="" />
            </a>
          </div>
          <div className={content.split}></div>
          <div className={content.partners}>
            <Typography component="p">PARTNERS</Typography>
            <div className={content.boxPartners}>
            <a href="https://okara.vn/">
              <img src="/partners/1.png" alt="Okara" />
            </a>
            <a href="https://yggsea.io/">
              <img src="/partners/ygg.png" alt="YGG SEA" />
            </a>
            <a href="https://aws.amazon.com/">
              <img src="/partners/5.png" alt="Amazon" />
            </a>
            <a href="https://www.vcpmc.org/vcpmc/">
              <img src="/partners/3.png" alt="VCPMC" />
            </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
