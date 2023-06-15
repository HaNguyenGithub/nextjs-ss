import { Container, Typography, Box } from "@mui/material";
import content from "../../styles/home/Content5.module.css";
export default function Content6() {
  const data = [
    { name: "NGOC NGUYEN", nation: "Vietnam", img_src: "/advisor/t-1.png" },
    { name: "THAO DINH", nation: "Vietnam", img_src: "/advisor/t-2.png" },
    {
      name: "SUHARTO PALAWAN",
      nation: "Philippines",
      img_src: "/advisor/t-4.png",
    },
    {
      name: "JOVEN G. ARBOLEDA",
      nation: "Philippines",
      img_src: "/advisor/t-8.png",
    },
    { name: "HUNG NGUYEN", nation: "Vietnam", img_src: "/advisor/t-5.png" },
    { name: "HUY HOANG", nation: "Vietnam", img_src: "/advisor/t-6.png" },
    {
      name: "MUHAMMAD IMAM KURNIAWAN",
      nation: "Indonesia",
      img_src: "/advisor/t-7.png",
    },
    { name: "LEO LUMABI", nation: "Philippines", img_src: "/advisor/t-9.png" },
  ];
  return (
    <>
      <div className={content.ourAdvisor}>
        <Container className={content.container}>
          <div className={content.team}>
              {data.map((item, index) => (
                <div className={content.frame} key={index}>
                  <img src={item.img_src} alt={item.name} />
                  <div>
                    <Typography component='h4'>{item.name}</Typography>
                    <Typography component='p'>{item.nation}</Typography>
                  </div>
                </div>
              ))}
          </div>
        </Container>
      </div>
    </>
  );
}
