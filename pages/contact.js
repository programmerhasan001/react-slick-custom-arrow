import getData from "../utilities/getData";

const Contact = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2>Hello from Contact</h2>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await getData();

  // Pass data to the page via props
  return { props: { data } };
}

export default Contact;
