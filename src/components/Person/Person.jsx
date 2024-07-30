export const Person = ({ person }) => {
  let parterInfo;

  if (person.isMarried) {
    if (person.sex === "m") {
      parterInfo = `${person.partnerName} is my wife`;
    } else {
      parterInfo = `${person.partnerName} is my husband`;
    }
  } else {
    parterInfo = "I am not married";
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {person.age && <p className="Person__age">I am {person.age}</p>}

      <p className="Person__partner">{parterInfo}</p>
    </section>
  );
};
