import { DocLayout } from "../../../Info/DocLayout";

const Test = () => {
  const data = {
    title: "Test",
    subtitle:
      "Hier lernst du alles rund ums Destillieren. Wir gehen auf das Prinzip, die Wirkmechanismen und den grundlegenden Aufbau einer Destillieranlage ein.",
    headline: [
      {
        type: "text",
        id: 1,
        name: "Item1",
        content:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus. Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula.",
      },
      {
        type: "math",
        id: 2,
        name: "Zylinder",
        formula: "V = π · r2 · h",
        content: "Some explanation text for your majesty.",
      },
    ],
  };

  return (
    <>
      <DocLayout {...data} />
    </>
  );
};

export { Test };
