import Best from "./Best/Best";
import Info from "./Info/Info";
import News from "./News/News";
import Specialties from "./Specialties/Specialtyes";
import Welcome from "./Welcome/Welcome";

const Content = () => {
  return (
    <div>
      <Welcome />
      <Info />
      <Specialties />
      <Best />
      <News />
    </div>
  );
};

export default Content;
