import Direction from "./direction/Direction";
import "./specialties.css";

const Specialties = (props) => {
  return (
    <div className="specialties">
      <div className="specialties__container container">
        <h2 className="specialties__title title">
          Направления & Специальности
        </h2>
        <div className="specialties__block">
          <Direction
            lists={[
              { list: " Интернет технологии и управление", id: 1 },
              { list: " Информационные системы и технологии", id: 2 },
              { list: " Информационная безопасность ", id: 3 },
              { list: " Прикладная информатика ", id: 4 },
            ]}
            title="ДЦТ"
            to="/department"
          />
          <Direction
            lists={[
              { list: " Интернет технологии и управление", id: 1 },
              { list: " Информационные системы и технологии", id: 2 },
            ]}
            title="Колледж"
            to="/collage"
          />
        </div>
      </div>
    </div>
  );
};

export default Specialties;
