import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      label:"Label1",
      content: "Content1",
    },
    {
      label:"Label2",
      content: "Content2",
    },
    {
      label:"Label3",
      content: "Content3",
    },
    {
      label:"Label4",
      content: "Content4",
    }
  ];  

  return <Accordion items={items} />;  // items prop..

}

export default AccordionPage;