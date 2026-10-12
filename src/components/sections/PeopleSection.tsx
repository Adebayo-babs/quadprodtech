import TitleBox from "../ui/TitleBox";
import { TEAM_PHOTOS } from "../../data/content";

export default function PeopleSection() {
  return (
    <section className="section people">
      <div className="container">
        <div className="center">
          <TitleBox variant="people" main="OUR PEOPLE, IN THE FIELD" />
        </div>
        <p className="people-text">
          Placeholders below, ready for real photos of the Quad Production Technologies team on site.
        </p>
        <div className="people-grid">
          {TEAM_PHOTOS.map((t) => (
            <img key={t.image} src={t.image} alt={t.label} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
